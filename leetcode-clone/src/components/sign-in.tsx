'use client'

import { signIn, useSession } from "next-auth/react"
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Github } from 'lucide-react'

export default function SignIn() {
  const { data: session, status } = useSession()
  const router = useRouter()

  useEffect(() => {
    if (session) {
      router.push('/problems') // Redirect to dashboard if signed in
    }
  }, [session, router])

  if (status === "loading") {
    return <div className="flex justify-center items-center min-h-screen bg-gray-900">Loading...</div>
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <Card className="w-[350px] bg-gray-800 text-white border-gray-700">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold text-center">Sign in</CardTitle>
          <CardDescription className="text-center text-gray-400">
            Choose your preferred sign-in method
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <Button 
            variant="outline" 
            className="bg-gray-700 hover:bg-gray-600 text-white border-gray-600"
            onClick={() => signIn("google")}
          >
            <svg className="mr-2 h-4 w-4" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              />
              <path
                fill="currentColor"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                fill="currentColor"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
              />
              <path
                fill="currentColor"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
              />
            </svg>
            Sign in with Google
          </Button>
          <Button 
            variant="outline" 
            className="bg-gray-700 hover:bg-gray-600 text-white border-gray-600"
            onClick={() => signIn("github")}
          >
            <Github className="mr-2 h-4 w-4" />
            Sign in with GitHub
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}

