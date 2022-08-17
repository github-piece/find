-- CreateTable
CREATE TABLE "Waitlist" (
    "email" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "modifiedAt" TIMESTAMP(3) NOT NULL,
    "redeemed" BOOLEAN NOT NULL DEFAULT false,
    "allowRedeem" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Waitlist_pkey" PRIMARY KEY ("email")
);
