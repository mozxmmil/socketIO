/*
  Warnings:

  - You are about to drop the column `passwrod` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "passwrod",
ADD COLUMN     "password" TEXT;

-- CreateTable
CREATE TABLE "Twitt" (
    "id" TEXT NOT NULL,
    "twitt" TEXT NOT NULL,
    "image" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "Twitt_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Twitt" ADD CONSTRAINT "Twitt_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
