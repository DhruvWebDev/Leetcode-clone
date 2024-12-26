"use client"

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import ProblemDescription from '@/components/ProblemPage/docs/description'
import Editorial from '@/components/ProblemPage/docs/editorial'
import Submissions from '@/components/ProblemPage/docs/submission'

const CodeTab = () => {
  return (
    <div>
      <Tabs defaultValue="description" className="w-full">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="description">Description</TabsTrigger>
          <TabsTrigger value="editorial">Editorial</TabsTrigger>
          <TabsTrigger value="submissions">Submissions</TabsTrigger>
        </TabsList>
        <TabsContent value="description">
          <ProblemDescription />
        </TabsContent>
        <TabsContent value="editorial">
          <Editorial />
        </TabsContent>
        <TabsContent value="submissions">
          <Submissions />
        </TabsContent>
      </Tabs>
    </div>
  )
}

export default CodeTab
