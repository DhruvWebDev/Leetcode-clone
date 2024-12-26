import React from 'react'

const Submissions: React.FC = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-blue-500">Submissions</h2>
      <div className="prose prose-invert max-w-none">
        <p>This section would typically show:</p>
        <ul>
          <li>A list of recent submissions</li>
          <li>Submission status (Accepted, Wrong Answer, Time Limit Exceeded, etc.)</li>
          <li>Runtime and memory usage for each submission</li>
          <li>Language used for each submission</li>
          <li>Date and time of submission</li>
        </ul>
        <p>For this example, we're using placeholder content. In a real application, this would be dynamically populated with the user's actual submission history for the problem.</p>
      </div>
    </div>
  )
}

export default Submissions