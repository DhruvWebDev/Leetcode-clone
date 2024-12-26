/*
  Warnings:

  - Added the required column `testCases` to the `UserCode` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "UserCode" ADD COLUMN     "testCases" TEXT NOT NULL;
