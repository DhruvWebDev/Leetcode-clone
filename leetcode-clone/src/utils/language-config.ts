export const languageConfigs = {
  javascript: {
    image: 'node:18-alpine',
    extension: 'js',
    executeCmd: ['node', 'solution.js'],
  },
  python: {
    image: 'python:3.9-alpine',
    extension: 'py',
    executeCmd: ['python', 'solution.py'],
  },
  cpp: {
    image: 'gcc:latest',
    extension: 'cpp',
    compileCmd: ['g++', '-o', 'solution', 'solution.cpp'],
    executeCmd: ['./solution'],
  },
  java: {
    image: 'openjdk:11-jdk-slim',
    extension: 'java',
    compileCmd: ['javac', 'Solution.java'],
    executeCmd: ['java', 'Solution'],
  },
};
