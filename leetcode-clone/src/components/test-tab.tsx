"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { CheckCircle, XCircle } from 'lucide-react'

export function TestTab() {
  const [testCase, setTestCase] = useState("")
  const [testResult, setTestResult] = useState<{ status: "success" | "fail" | null; output: string }>({ status: null, output: "" })

  const runTest = () => {
    // This is a mock test runner. In a real application, you'd send the test case to your backend
    // and receive the result.
    setTimeout(() => {
      const success = Math.random() > 0.5
      setTestResult({
        status: success ? "success" : "fail",
        output: success ? "Test passed successfully!" : "Test failed. Expected [1, 2], but got [2, 1]"
      })
    }, 1000)
  }

  return (
    <Tabs defaultValue="test-case" className="w-full max-w-[800px]">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="test-case">Test Case</TabsTrigger>
        <TabsTrigger value="test-result">Test Result</TabsTrigger>
      </TabsList>
      <TabsContent value="test-case">
        <Card>
          <CardHeader>
            <CardTitle>Test Case</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="test-input">Input</Label>
              <Textarea
                id="test-input"
                placeholder="Enter your test case here..."
                value={testCase}
                onChange={(e) => setTestCase(e.target.value)}
                className="font-mono"
              />
            </div>
          </CardContent>
          <CardFooter>
            <Button onClick={runTest}>Run Test</Button>
          </CardFooter>
        </Card>
      </TabsContent>
      <TabsContent value="test-result">
        <Card>
          <CardHeader>
            <CardTitle>Test Result</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            {testResult.status && (
              <div className={`flex items-center space-x-2 ${
                testResult.status === "success" ? "text-green-500" : "text-red-500"
              }`}>
                {testResult.status === "success" ? (
                  <CheckCircle className="h-5 w-5" />
                ) : (
                  <XCircle className="h-5 w-5" />
                )}
                <span>{testResult.status === "success" ? "Passed" : "Failed"}</span>
              </div>
            )}
            <div className="space-y-1">
              <Label htmlFor="test-output">Output</Label>
              <Textarea
                id="test-output"
                value={testResult.output}
                readOnly
                className="font-mono"
              />
            </div>
          </CardContent>
          <CardFooter>
            <Button onClick={runTest}>Run Again</Button>
          </CardFooter>
        </Card>
      </TabsContent>
    </Tabs>
  )
}