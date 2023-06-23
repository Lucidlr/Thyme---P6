/*
  Warnings:

  - The primary key for the `Points` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- AlterTable
ALTER TABLE "Points" DROP CONSTRAINT "Points_pkey",
ADD CONSTRAINT "Points_pkey" PRIMARY KEY ("id");
