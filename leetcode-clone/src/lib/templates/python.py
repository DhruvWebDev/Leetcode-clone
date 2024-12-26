# Template for Python solutions
def solution(*args):
    # Your code here
    pass

# Read input from input.json and execute solution
import json
import sys

with open('input.json', 'r') as f:
    input_data = json.load(f)
    result = solution(*input_data['input'])
    print(json.dumps(result))