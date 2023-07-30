/*
  Warnings:

  - You are about to drop the column `loan_id` on the `applications` table. All the data in the column will be lost.
  - The `status` column on the `applications` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Added the required column `type` to the `education_directions` table without a default value. This is not possible if the table is not empty.
  - Added the required column `amount` to the `loans` table without a default value. This is not possible if the table is not empty.
  - Added the required column `application_id` to the `loans` table without a default value. This is not possible if the table is not empty.
  - Added the required column `payment` to the `loans` table without a default value. This is not possible if the table is not empty.
  - Added the required column `period` to the `loans` table without a default value. This is not possible if the table is not empty.
  - Added the required column `code` to the `program_type` table without a default value. This is not possible if the table is not empty.
  - Added the required column `code` to the `programs` table without a default value. This is not possible if the table is not empty.
  - Added the required column `is_commercial` to the `programs` table without a default value. This is not possible if the table is not empty.
  - Added the required column `period` to the `programs` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "LoanStatus" AS ENUM ('DRAFT', 'SENT', 'ACCEPTED', 'REJECTED');

-- CreateEnum
CREATE TYPE "ApplicationStatus" AS ENUM ('DRAFT', 'SENT', 'REVIEWED', 'PAYED', 'FINISHED');

-- CreateEnum
CREATE TYPE "ApplicationType" AS ENUM ('CREDIT', 'DEFAULT');

-- CreateEnum
CREATE TYPE "TestStatus" AS ENUM ('IN_PROCESS', 'ERROR', 'SUCCESS');

-- DropForeignKey
ALTER TABLE "applications" DROP CONSTRAINT "applications_loan_id_fkey";

-- AlterTable
ALTER TABLE "applications" DROP COLUMN "loan_id",
ADD COLUMN     "type" "ApplicationType" NOT NULL DEFAULT 'DEFAULT',
DROP COLUMN "status",
ADD COLUMN     "status" "ApplicationStatus" NOT NULL DEFAULT 'DRAFT';

-- AlterTable
ALTER TABLE "education_directions" ADD COLUMN     "type" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "loans" ADD COLUMN     "amount" INTEGER NOT NULL,
ADD COLUMN     "application_id" TEXT NOT NULL,
ADD COLUMN     "payment" INTEGER NOT NULL,
ADD COLUMN     "period" INTEGER NOT NULL,
ADD COLUMN     "status" "LoanStatus" NOT NULL DEFAULT 'DRAFT',
ALTER COLUMN "precentage" SET DEFAULT 3;

-- AlterTable
ALTER TABLE "program_type" ADD COLUMN     "code" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "programs" ADD COLUMN     "code" TEXT NOT NULL,
ADD COLUMN     "cost" INTEGER,
ADD COLUMN     "is_commercial" BOOLEAN NOT NULL,
ADD COLUMN     "period" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "Test" (
    "id" TEXT NOT NULL,
    "student_id" TEXT,
    "status" "TestStatus" NOT NULL DEFAULT 'IN_PROCESS',
    "result" JSONB,

    CONSTRAINT "Test_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Test" ADD CONSTRAINT "Test_student_id_fkey" FOREIGN KEY ("student_id") REFERENCES "students"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "loans" ADD CONSTRAINT "loans_application_id_fkey" FOREIGN KEY ("application_id") REFERENCES "applications"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
