//Post Request 
// {
//     "lang": "javascript",
//     "code": "
//   function add(a, b) {
//     return a + b;
//   }
//   console.log(add(...JSON.parse(process.stdin.read())));
//     ",
//     "testCases": [
//       { "input": [2, 3], "expected": 5 },
//       { "input": [10, -5], "expected": 5 },
//       { "input": [0, 0], "expected": 0 }
//     ]
//   }
  
    
    
    
    //Response 
    // {
    //     "code": "
    //   function add(a, b) {
    //     return a + b;
    //   }
    //   console.log(add(...JSON.parse(process.stdin.read())));
    //     ",
    //     "lang": "javascript",
    //     "results": [
    //       {
    //         "input": [2, 3],
    //         "expected": 5,
    //         "output": "5",
    //         "status": "Passed"
    //       },
    //       {
    //         "input": [10, -5],
    //         "expected": 5,
    //         "output": "5",
    //         "status": "Passed"
    //       },
    //       {
    //         "input": [0, 0],
    //         "expected": 0,
    //         "output": "0",
    //         "status": "Passed"
    //       }
    //     ]
    //   }

//     // Template for JavaScript solutions
// function solution(...args) {
//   // Your plusOne function would go here
//   return (BigInt(args[0].join('')) + 1n).toString().split('').map(x=>+x);
// }

// // Read input from input.json and execute solution
// const fs = require('fs');
// const input = JSON.parse(fs.readFileSync('input.json')).input;
// const result = solution(...input);
// console.log(JSON.stringify(result));

import { NextResponse } from 'next/server';
import { DockerService } from '@/lib/code-execution/docker-service';
import { CodeSubmission, TestCase } from '@/lib/types/code';

const dockerService = new DockerService();

// Mock test cases - in a real app, these would come from a database
const mockTestCases: Record<string, TestCase[]> = {
  '1': [
    {
      input: [2, 7, 11, 15],
      expectedOutput: [0, 1],
    },
    {
      input: [3, 2, 4],
      expectedOutput: [1, 2],
    },
  ],
};

export async function POST(request: Request) {
  try {
    const submission: CodeSubmission = await request.json();
    
    const testCases = mockTestCases[submission.problemId];
    if (!testCases) {
      return NextResponse.json(
        { error: 'Problem not found' },
        { status: 404 }
      );
    }

    const result = await dockerService.executeCode(
      submission.language,
      submission.code,
      testCases
    );

    return NextResponse.json(result);
  } catch (error) {
    console.error('Code execution error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}