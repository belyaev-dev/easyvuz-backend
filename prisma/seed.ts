// prisma/seed.js
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  const student = await prisma.student.create({
    data: {
      email: 'student@example.com',
      phone: '1234567890',
      password: 'studentpassword',
      education_profile: 'Computer Science',
      data: JSON.stringify({
        passport_id: '123456',
        city_of_live: 'Moscow',
        parents: ['parent1', 'parent2'],
      }),
    },
  });

  const university = await prisma.university.create({
    data: {
      photo: 'https://cdn2.postupi.online/images/images335x232/94/875.jpg',
      name: 'Институт международных экономических связей',
      detail: '',
      city: 'Москва',
      description:
        'Институт международных экономических связей (ИМЭС) был основан в 1995 г. и готовит высококлассных специалистов в области экономики, менеджмента, государственного и муниципального управления, психологии и юриспруденции.',
      address: 'г. Москва, ул. Мосфильмовская, д. 35',
    },
  });

  const educationDirection = await prisma.educationDirection.create({
    data: {
      name: 'Engineering and Technology',
      type: 'Undergraduate',
      photo: 'https://cdn2.postupi.online/images/imagesSVG/90023.svg',
    },
  });

  const programType = await prisma.programType.create({
    data: {
      name: 'Online',
      code: 'ONLINE',
    },
  });

  const program = await prisma.program.create({
    data: {
      name: 'Computer Science',
      code: 'CS',
      is_commercial: true,
      cost: 10000,
      photo: 'program_photo_url',
      detail:
        'A comprehensive program focusing on computer science and software development.',
      university_id: university.id,
      direction_id: educationDirection.id,
      type_id: programType.id,
    },
  });

  const bank = await prisma.bank.create({
    data: {
      photo: 'bank_photo_url',
      name: 'Bank Name',
    },
  });

  const loan = await prisma.loan.create({
    data: {
      status: 'DRAFT',
      precentage: 3,
      detail: 'Detail about the loan',
      bank_id: bank.id,
    },
  });

  const application = await prisma.application.create({
    data: {
      status: 'DRAFT',
      type: 'DEFAULT',
      student_id: student.id,
      loan_id: loan.id,
    },
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
