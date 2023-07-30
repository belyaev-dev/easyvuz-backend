/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-await-in-loop */
import { PrismaClient } from '@prisma/client';
import { faker } from '@faker-js/faker/locale/ru';

const prisma = new PrismaClient();

async function main() {
  // Universities
  const universities = [];
  for (let i = 0; i < 10; i += 1) {
    universities.push(
      await prisma.university.create({
        data: {
          photo: faker.image.url(),
          name: faker.company.name(),
          detail: faker.lorem.sentence(),
          city: faker.location.city(),
          description: faker.lorem.paragraph(),
          address: faker.location.streetAddress(),
        },
      })
    );
  }

  // // Education Directions
  // const educationDirections = await prisma.educationDirection.createMany({
  //   data: [
  //     { name: 'Engineering', type: 'Bachelor' },
  //     { name: 'Business', type: 'Master' },
  //     // Add more as needed
  //   ],
  // });

  // Program Types
  const programTypes = await prisma.programType.createMany({
    data: [
      {
        name: 'Математика и механика',
        code: '01.03.00',
      },
      {
        name: 'Компьютерные и информационные науки',
        code: '02.03.00',
      },
      {
        name: 'Физика и астрономия',
        code: '03.03.00',
      },
      {
        name: 'Химия',
        code: '04.03.00',
      },
      {
        name: 'Науки о земле',
        code: '05.03.00',
      },
      {
        name: 'Биологические науки',
        code: '06.03.00',
      },
      {
        name: 'Архитектура',
        code: '07.03.00',
      },
      {
        name: 'Техника и технологии строительства',
        code: '08.03.00',
      },
      {
        name: 'Информатика и вычислительная техника',
        code: '09.03.00',
      },
      {
        name: 'Информационная безопасность',
        code: '10.03.00',
      },
      {
        name: 'Электроника, радиотехника и системы связи',
        code: '11.03.00',
      },
      {
        name: 'Фотоника, приборостроение, оптические и биотехнические системы и технологии',
        code: '12.03.00',
      },
      {
        name: 'Электро- и теплоэнергетика',
        code: '13.03.00',
      },
      {
        name: 'Ядерная энергетика и технологии',
        code: '14.03.00',
      },
      {
        name: 'Машиностроение',
        code: '15.03.00',
      },
      {
        name: 'Физико-технические науки и технологии',
        code: '16.03.00',
      },
      {
        name: 'Оружие и системы вооружения',
        code: '17.03.00',
      },
      {
        name: 'Химические технологии',
        code: '18.03.00',
      },
      {
        name: 'Промышленная экология и биотехнологии',
        code: '19.03.00',
      },
      {
        name: 'Техносферная безопасность и природообустройство',
        code: '20.03.00',
      },
      {
        name: 'Прикладная геология, горное дело, нефтегазовое дело и геодезия',
        code: '21.03.00',
      },
      {
        name: 'Технологии материалов',
        code: '22.03.00',
      },
      {
        name: 'Техника и технологии наземного транспорта',
        code: '23.03.00',
      },
      {
        name: 'Авиационная и ракетно-космическая техника',
        code: '24.03.00',
      },
      {
        name: 'Аэронавигация и эксплуатация авиационной и ракетно-космической техники',
        code: '25.03.00',
      },
      {
        name: 'Техника и технологии кораблестроения и водного транспорта',
        code: '26.03.00',
      },
      {
        name: 'Управление в технических системах',
        code: '27.03.00',
      },
      {
        name: 'Нанотехнологии и наноматериалы',
        code: '28.03.00',
      },
      {
        name: 'Технологии легкой промышленности',
        code: '29.03.00',
      },
      {
        name: 'Сестринское дело',
        code: '34.03.00',
      },
      {
        name: 'Сельское, лесное и рыбное хозяйство',
        code: '35.03.00',
      },
      {
        name: 'Ветеринария и зоотехния',
        code: '36.03.00',
      },
      {
        name: 'Психологические науки',
        code: '37.03.00',
      },
      {
        name: 'Экономика и управление',
        code: '38.03.00',
      },
      {
        name: 'Социология и социальная работа',
        code: '39.03.00',
      },
      {
        name: 'Юриспруденция',
        code: '40.03.00',
      },
      {
        name: 'Политические науки и регионоведение',
        code: '41.03.00',
      },
      {
        name: 'Средства массовой информации и информационно-библиотечное дело',
        code: '42.03.00',
      },
      {
        name: 'Сервис и туризм',
        code: '43.03.00',
      },
      {
        name: 'Образование и педагогические науки',
        code: '44.03.00',
      },
      {
        name: 'Языкознание и литературоведение',
        code: '45.03.00',
      },
      {
        name: 'История и археология',
        code: '46.03.00',
      },
      {
        name: 'Философия, этика и религиоведение',
        code: '47.03.00',
      },
      {
        name: 'Теология',
        code: '48.03.00',
      },
      {
        name: 'Физическая культура и спорт',
        code: '49.03.00',
      },
      {
        name: 'Искусствознание',
        code: '50.03.00',
      },
      {
        name: 'Культуроведение и социокультурные проекты',
        code: '51.03.00',
      },
      {
        name: 'Сценические искусства и литературное творчество',
        code: '52.03.00',
      },
      {
        name: 'Музыкальное искусство',
        code: '53.03.00',
      },
      {
        name: 'Изобразительное и прикладные виды искусства',
        code: '54.03.00',
      },
      {
        name: 'Востоковедение и африканистика',
        code: '58.03.00',
      },
    ],
  });

  // Banks
  const banks = [];
  for (let i = 0; i < 5; i += 1) {
    banks.push(
      await prisma.bank.create({
        data: {
          photo: faker.image.url(),
          name: faker.company.name(),
        },
      })
    );
  }

  // You can continue seeding other models in a similar way...
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
