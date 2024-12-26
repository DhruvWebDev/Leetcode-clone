import React from 'react'

interface Problem {
    id: string
    title: string
    difficulty: string
    description: string
    examples: {
        input: string
        output: string
        explanation: string
    }[]
    constraints: string[]
}

const sampleProblem: Problem = {
    id: '1',
    title: 'Two Sum',
    difficulty: 'Easy',
    description: 'Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.',
    examples: [
        {
            input: 'nums = [2,7,11,15], target = 9',
            output: '[0,1]',
            explanation: 'Because nums[0] + nums[1] == 9, we return [0, 1].'
        }
    ],
    constraints: [
        '2 <= nums.length <= 10^4',
        '-10^9 <= nums[i] <= 10^9',
        '-10^9 <= target <= 10^9',
        'Only one valid answer exists.'
    ]
}

const ProblemDescription: React.FC<{ problem: Problem }> = ({ problem }) => {
    return (
        <div className="space-y-6">
            <div className="border-b border-gray-700 pb-4">
                <h1 className="text-3xl font-bold text-blue-500">{problem.title}</h1>
                <p className={`text-sm mt-2 ${
                    problem.difficulty === 'Easy' ? 'text-green-500' :
                    problem.difficulty === 'Medium' ? 'text-yellow-500' : 'text-red-500'
                }`}>
                    {problem.difficulty}
                </p>
            </div>

            <div className="prose prose-invert max-w-none">
                <h2 className="text-xl font-semibold text-blue-400">Description</h2>
                <p>{problem.description}</p>

                <h2 className="text-xl font-semibold text-blue-400 mt-6">Examples</h2>
                {problem.examples.map((example, index) => (
                    <div key={index} className="bg-zinc-800 p-4 rounded-md my-4">
                        <p><strong>Input:</strong> {example.input}</p>
                        <p><strong>Output:</strong> {example.output}</p>
                        <p><strong>Explanation:</strong> {example.explanation}</p>
                    </div>
                ))}

                <h2 className="text-xl font-semibold text-blue-400 mt-6">Constraints</h2>
                <ul className="list-disc pl-5">
                    {problem.constraints.map((constraint, index) => (
                        <li key={index}>{constraint}</li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

const App: React.FC = () => {
    return <ProblemDescription problem={sampleProblem} />
}

export default App