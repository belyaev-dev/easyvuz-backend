-- CreateTable
CREATE TABLE "students" (
    "id" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "education_profile" TEXT NOT NULL,
    "data" TEXT NOT NULL,

    CONSTRAINT "students_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "sms_codes" (
    "id" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "used" BOOLEAN NOT NULL DEFAULT false,
    "student_id" TEXT,

    CONSTRAINT "sms_codes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "universities" (
    "id" TEXT NOT NULL,
    "photo" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "detail" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "address" TEXT NOT NULL,

    CONSTRAINT "universities_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "education_directions" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "education_directions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "program_type" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "program_type_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "programs" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "photo" TEXT NOT NULL,
    "detail" TEXT NOT NULL,
    "university_id" TEXT NOT NULL,
    "direction_id" TEXT,
    "type_id" TEXT,

    CONSTRAINT "programs_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "banks" (
    "id" TEXT NOT NULL,
    "photo" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "banks_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "loans" (
    "id" TEXT NOT NULL,
    "precentage" INTEGER NOT NULL,
    "detail" TEXT NOT NULL,
    "bank_id" TEXT NOT NULL,

    CONSTRAINT "loans_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "applications" (
    "id" TEXT NOT NULL,
    "student_id" TEXT NOT NULL,
    "loan_id" TEXT NOT NULL,
    "status" TEXT NOT NULL,

    CONSTRAINT "applications_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "students_email_key" ON "students"("email");

-- AddForeignKey
ALTER TABLE "sms_codes" ADD CONSTRAINT "sms_codes_student_id_fkey" FOREIGN KEY ("student_id") REFERENCES "students"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "programs" ADD CONSTRAINT "programs_university_id_fkey" FOREIGN KEY ("university_id") REFERENCES "universities"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "programs" ADD CONSTRAINT "programs_direction_id_fkey" FOREIGN KEY ("direction_id") REFERENCES "education_directions"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "programs" ADD CONSTRAINT "programs_type_id_fkey" FOREIGN KEY ("type_id") REFERENCES "program_type"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "loans" ADD CONSTRAINT "loans_bank_id_fkey" FOREIGN KEY ("bank_id") REFERENCES "banks"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "applications" ADD CONSTRAINT "applications_student_id_fkey" FOREIGN KEY ("student_id") REFERENCES "students"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "applications" ADD CONSTRAINT "applications_loan_id_fkey" FOREIGN KEY ("loan_id") REFERENCES "loans"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
