import Docker from 'dockerode';
import { promises as fs } from 'fs';
import path from 'path';
import { ExecutionResult, TestCase } from '../types/code';
import { languageConfigs } from '@/utils/language-config';
const docker = new Docker();

const EXECUTION_TIMEOUT = 5000; // 5 seconds
const MEMORY_LIMIT = '50m';
const WORK_DIR = '/app';

export class DockerService {
  private async createContainer(
    language: keyof typeof languageConfigs,
    code: string,
    testCase: TestCase
  ) {
    const config = languageConfigs[language];
    const workDir = WORK_DIR;
    
    // Create temporary directory for code execution
    const tempDir = path.join(process.cwd(), 'temp', Date.now().toString());
    await fs.mkdir(tempDir, { recursive: true });
    
    // Write code file
    const filename = `solution.${config.extension}`;
    await fs.writeFile(path.join(tempDir, filename), code);
    
    // Write test case file
    await fs.writeFile(
      path.join(tempDir, 'input.json'),
      JSON.stringify(testCase)
    );

    const container = await docker.createContainer({
      Image: config.image,
      Cmd: config.executeCmd,
      WorkingDir: workDir,
      HostConfig: {
        Memory: parseInt(MEMORY_LIMIT),
        MemorySwap: parseInt(MEMORY_LIMIT),
        Binds: [`${tempDir}:${workDir}`],
      },
    });

    return { container, tempDir };
  }

  async executeCode(
    language: keyof typeof languageConfigs,
    code: string,
    testCases: TestCase[]
  ): Promise<ExecutionResult> {
    for (const testCase of testCases) {
      try {
        const { container, tempDir } = await this.createContainer(
          language,
          code,
          testCase
        );

        const startTime = process.hrtime();

        await container.start();
        
        // Wait for container to finish or timeout
        const executionPromise = container.wait();
        const timeoutPromise = new Promise((_, reject) =>
          setTimeout(() => reject(new Error('Execution timeout')), EXECUTION_TIMEOUT)
        );
        
        const result = await Promise.race([executionPromise, timeoutPromise]);

        const endTime = process.hrtime(startTime);
        const executionTime = endTime[0] * 1000 + endTime[1] / 1000000; // Convert to milliseconds

        // Get container logs
        const logs = await container.logs({ stdout: true, stderr: true });
        const output = logs.toString().trim();

        // Cleanup
        await container.remove();
        await fs.rm(tempDir, { recursive: true, force: true });

        if (result.StatusCode !== 0) {
          return {
            success: false,
            error: output,
            executionTime,
            failedTestCase: testCase,
          };
        }

        // Compare output with expected output
        try {
          const actualOutput = JSON.parse(output);
          if (JSON.stringify(actualOutput) !== JSON.stringify(testCase.expectedOutput)) {
            return {
              success: false,
              output: actualOutput,
              executionTime,
              failedTestCase: testCase,
            };
          }
        } catch (e) {
          return {
            success: false,
            error: 'Invalid output format',
            executionTime,
            failedTestCase: testCase,
          };
        }
      } catch (error) {
        return {
          success: false,
          error: error.message,
          failedTestCase: testCase,
        };
      }
    }

    return { success: true };
  }
}