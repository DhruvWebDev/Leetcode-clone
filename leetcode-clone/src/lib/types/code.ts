export interface CodeSubmission {
  code: string;
  language: 'javascript' | 'python' | 'cpp' | 'java';
  problemId: string;
}

export interface TestCase {
  input: any[];
  expectedOutput: any;
}

export interface ExecutionResult {
  success: boolean;
  output?: any;
  error?: string;
  executionTime?: number;
  memoryUsed?: number;
  failedTestCase?: TestCase;
}