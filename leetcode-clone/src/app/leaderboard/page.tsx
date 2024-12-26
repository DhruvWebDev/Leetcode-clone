"use client";

import { TrendingUp } from "lucide-react";
import { Bar, BarChart, CartesianGrid, XAxis, Tooltip, Legend } from "recharts";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

// Sample chart data (can be dynamic)
const chartData = [
  { month: "Jan", desktop: 300, mobile: 150 },
  { month: "Feb", desktop: 350, mobile: 200 },
  { month: "Mar", desktop: 280, mobile: 180 },
  { month: "Apr", desktop: 400, mobile: 250 },
  { month: "May", desktop: 450, mobile: 300 },
  { month: "Jun", desktop: 500, mobile: 350 },
];

// Sample leaderboard data (can be dynamic)
const leaderboardData = [
  { rank: 1, username: "CoderPro", problemsSolved: 250, score: 1280 },
  { rank: 2, username: "CodeMaster", problemsSolved: 240, score: 1250 },
  { rank: 3, username: "AlgoExpert", problemsSolved: 230, score: 1220 },
  { rank: 4, username: "BugSquasher", problemsSolved: 220, score: 1200 },
  { rank: 5, username: "DevWizard", problemsSolved: 210, score: 1180 },
  { rank: 6, username: "ProblemSolver", problemsSolved: 200, score: 1150 },
];

export default function LeaderboardPage() {
  return (
    <div className="container mx-auto p-6">
      {/* Page Header */}
      <Card className="mb-6">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">Leaderboard</CardTitle>
          <CardDescription>Top users and their performance</CardDescription>
        </CardHeader>
      </Card>

      {/* Chart Section */}
      <div className="mb-6">
        <Card>
          <CardHeader>
            <CardTitle>Performance Overview</CardTitle>
            <CardDescription>Desktop vs Mobile Activity (Jan - Jun 2024)</CardDescription>
          </CardHeader>
          <CardContent>
            <BarChart width={600} height={300} data={chartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <Tooltip />
              <Legend />
              <Bar dataKey="desktop" fill="#8884d8" />
              <Bar dataKey="mobile" fill="#82ca9d" />
            </BarChart>
          </CardContent>
          <CardFooter className="flex-col items-start gap-2 text-sm">
            <div className="flex gap-2 font-medium leading-none">
              Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
            </div>
            <div className="leading-none text-muted-foreground">
              Showing total visitors for the last 6 months
            </div>
          </CardFooter>
        </Card>
      </div>

      {/* Leaderboard Table */}
      <Card>
        <CardHeader>
          <CardTitle>Top Performers</CardTitle>
        </CardHeader>
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Rank</TableHead>
                <TableHead>Username</TableHead>
                <TableHead>Problems Solved</TableHead>
                <TableHead>Score</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {leaderboardData.map((user) => (
                <TableRow key={user.rank}>
                  <TableCell>{user.rank}</TableCell>
                  <TableCell>{user.username}</TableCell>
                  <TableCell>{user.problemsSolved}</TableCell>
                  <TableCell>{user.score}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </Card>
    </div>
  );
}
