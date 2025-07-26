-- CreateTable
CREATE TABLE "Messsages" (
    "id" TEXT NOT NULL,
    "senderId" TEXT NOT NULL,
    "receiverId" TEXT NOT NULL,
    "message" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Messsages_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "Messsages_senderId_idx" ON "Messsages"("senderId");

-- CreateIndex
CREATE INDEX "Messsages_receiverId_idx" ON "Messsages"("receiverId");

-- CreateIndex
CREATE INDEX "Messsages_createdAt_idx" ON "Messsages"("createdAt");

-- AddForeignKey
ALTER TABLE "Messsages" ADD CONSTRAINT "Messsages_senderId_fkey" FOREIGN KEY ("senderId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Messsages" ADD CONSTRAINT "Messsages_receiverId_fkey" FOREIGN KEY ("receiverId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
