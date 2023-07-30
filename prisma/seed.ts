/* eslint-disable no-restricted-syntax */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-await-in-loop */
import { PrismaClient } from '@prisma/client';
import { faker } from '@faker-js/faker/locale/ru';

const prisma = new PrismaClient();

async function main() {
  // Universities
  // const universities = [];
  // for (let i = 0; i < 10; i += 1) {
  //   universities.push(
  //     await prisma.university.create({
  // data: {
  //   photo: faker.image.url(),
  //   name: faker.company.name(),
  //   detail: faker.lorem.sentence(),
  //   city: faker.location.city(),
  //   description: faker.lorem.paragraph(),
  //   address: faker.location.streetAddress(),
  // },
  //     })
  //   );
  // }
  const universities = [];
  const universitiesData = [
    {
      photo: faker.image.url(),
      name: 'Московский институт технологий и управления',
      detail: faker.lorem.sentence(),
      city: faker.location.city(),
      description: faker.lorem.paragraph(),
      address: faker.location.streetAddress(),
    },
    {
      photo: faker.image.url(),
      name: 'Санкт-Петербургский государственный университет',
      detail: faker.lorem.sentence(),
      city: faker.location.city(),
      description: faker.lorem.paragraph(),
      address: faker.location.streetAddress(),
    },
    {
      photo: faker.image.url(),
      name: 'Санкт-Петербургский реставрационно-строительный институт',
      detail: faker.lorem.sentence(),
      city: faker.location.city(),
      description: faker.lorem.paragraph(),
      address: faker.location.streetAddress(),
    },
    {
      photo: faker.image.url(),
      name: 'Московский финансово-юридический университет',
      detail: faker.lorem.sentence(),
      city: faker.location.city(),
      description: faker.lorem.paragraph(),
      address: faker.location.streetAddress(),
    },
    {
      photo: faker.image.url(),
      name: 'Институт общественных наук РАНХиГС',
      detail: faker.lorem.sentence(),
      city: faker.location.city(),
      description: faker.lorem.paragraph(),
      address: faker.location.streetAddress(),
    },
    {
      photo: faker.image.url(),
      name: 'Российский государственный университет им. А.Н. Косыгина (Технологии. Дизайн. Искусство)',
      detail: faker.lorem.sentence(),
      city: faker.location.city(),
      description: faker.lorem.paragraph(),
      address: faker.location.streetAddress(),
    },
    {
      photo: faker.image.url(),
      name: 'Нижегородский филиал Национального исследовательского университета «Высшая школа экономики»',
      detail: faker.lorem.sentence(),
      city: faker.location.city(),
      description: faker.lorem.paragraph(),
      address: faker.location.streetAddress(),
    },
    {
      photo: faker.image.url(),
      name: 'Северо-Кавказский филиал Московского технического университета связи и информатики',
      detail: faker.lorem.sentence(),
      city: faker.location.city(),
      description: faker.lorem.paragraph(),
      address: faker.location.streetAddress(),
    },
    {
      photo: faker.image.url(),
      name: 'Санкт-Петербургский государственный электротехнический университет «ЛЭТИ» им. В.И. Ульянова (Ленина)',
      detail: faker.lorem.sentence(),
      city: faker.location.city(),
      description: faker.lorem.paragraph(),
      address: faker.location.streetAddress(),
    },
    {
      photo: faker.image.url(),
      name: 'Московский технический университет связи и информатики',
      detail: faker.lorem.sentence(),
      city: faker.location.city(),
      description: faker.lorem.paragraph(),
      address: faker.location.streetAddress(),
    },
  ];
  for (const type of universitiesData) {
    const createdUniversity = await prisma.university.create({
      data: type,
    });
    universities.push(createdUniversity);
  }

  // // Education Directions
  // const educationDirections = await prisma.educationDirection.createMany({
  //   data: [
  //     { name: 'Engineering', type: 'Bachelor' },
  //     { name: 'Business', type: 'Master' },
  //     // Add more as needed
  //   ],
  // });

  const programTypes = [];
  const programTypeData = [
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
  ];

  for (const type of programTypeData) {
    const createdProgramType = await prisma.programType.create({
      data: type,
    });
    programTypes.push(createdProgramType);
  }

  // Programs
  for (const programType of programTypes) {
    // Select a random university
    const randomUniversity =
      universities[Math.floor(Math.random() * universities.length)];

    // Determine the name and code based on the program type code
    let programName = '';
    let programCode = '';
    switch (programType.code) {
      case '01.03.00': {
        programName = 'Прикладная математика и информатика';
        programCode = '01.03.02';
        break;
      }
      case '02.03.00':
        programName = 'Компьютерные и информационные науки';
        programCode = '02.03.01';
        break;
      case '03.03.00':
        programName = 'Физика и астрономия';
        programCode = '03.03.01';
        break;
      case '04.03.00':
        programName = 'Химия';
        programCode = '04.03.01';
        break;
      case '05.03.00':
        programName = 'Науки о земле';
        programCode = '05.03.01';
        break;
      case '06.03.00':
        programName = 'Биологические науки';
        programCode = '06.03.01';
        break;
      case '07.03.00':
        programName = 'Архитектура';
        programCode = '07.03.01';
        break;
      case '08.03.00':
        programName = 'Техника и технологии строительства';
        programCode = '08.03.01';
        break;
      case '09.03.00':
        programName = 'Информатика и вычислительная техника';
        programCode = '09.03.01';
        break;
      case '10.03.00':
        programName = 'Информационная безопасность';
        programCode = '10.03.01';
        break;
      case '11.03.00':
        programName = 'Электроника, радиотехника и системы связи';
        programCode = '11.03.01';
        break;
      case '12.03.00':
        programName =
          'Фотоника, приборостроение, оптические и биотехнические системы и технологии';
        programCode = '12.03.01';
        break;
      case '13.03.00':
        programName = 'Электро- и теплоэнергетика';
        programCode = '13.03.01';
        break;
      case '14.03.00':
        programName = 'Ядерная энергетика и технологии';
        programCode = '14.03.01';
        break;
      case '15.03.00':
        programName = 'Математика и механика';
        programCode = '15.03.01';
        break;
      case '16.03.00':
        programName = 'Физико-технические науки и технологии';
        programCode = '16.03.01';
        break;
      case '17.03.00':
        programName = 'Оружие и системы вооружения';
        programCode = '17.03.01';
        break;
      case '18.03.00':
        programName = 'Химические технологии';
        programCode = '18.03.01';
        break;
      case '19.03.00':
        programName = 'Промышленная экология и биотехнологии';
        programCode = '19.03.01';
        break;
      case '20.03.00':
        programName = 'Техносферная безопасность и природообустройство';
        programCode = '20.03.01';
        break;
      case '21.03.00':
        programName =
          'Прикладная геология, горное дело, нефтегазовое дело и геодезия';
        programCode = '21.03.01';
        break;
      case '22.03.00':
        programName = 'Технологии материалов';
        programCode = '22.03.01';
        break;
      case '23.03.00':
        programName = 'Техника и технологии наземного транспорта';
        programCode = '23.03.01';
        break;
      case '24.03.00':
        programName = 'Авиационная и ракетно-космическая техника';
        programCode = '24.03.01';
        break;
      case '25.03.00':
        programName =
          'Аэронавигация и эксплуатация авиационной и ракетно-космической техники';
        programCode = '25.03.01';
        break;
      case '26.03.00':
        programName =
          'Техника и технологии кораблестроения и водного транспорта';
        programCode = '26.03.01';
        break;
      case '27.03.00':
        programName = 'Управление в технических системах';
        programCode = '27.03.01';
        break;
      case '28.03.00':
        programName = 'Нанотехнологии и наноматериалы';
        programCode = '28.03.01';
        break;
      case '29.03.00':
        programName = 'Технологии легкой промышленности';
        programCode = '29.03.01';
        break;
      case '34.03.00':
        programName = 'Сестринское дело';
        programCode = '34.03.01';
        break;
      case '35.03.00':
        programName = 'Сельское, лесное и рыбное хозяйство';
        programCode = '35.03.01';
        break;
      case '36.03.00':
        programName = 'Ветеринария и зоотехния';
        programCode = '36.03.01';
        break;
      case '37.03.00':
        programName = 'Психологические науки';
        programCode = '37.03.01';
        break;
      case '38.03.00':
        programName = 'Экономика и управление';
        programCode = '38.03.01';
        break;
      case '39.03.00':
        programName = 'Социология и социальная работа';
        programCode = '39.03.01';
        break;
      case '40.03.00':
        programName = 'Юриспруденция';
        programCode = '40.03.01';
        break;
      case '41.03.00':
        programName = 'Политология и регионоведение';
        programCode = '41.03.01';
        break;
      case '42.03.00':
        programName = 'Реклама и связи с общественностью';
        programCode = '42.03.01';
        break;
      case '43.03.00':
        programName = 'Сервис и туризм';
        programCode = '43.03.01';
        break;
      case '44.03.00':
        programName = 'Образование и педагогические науки';
        programCode = '44.03.01';
        break;
      case '45.03.00':
        programName = 'Филология и искусствоведение';
        programCode = '45.03.01';
        break;
      case '46.03.00':
        programName = 'Исторические науки и археология';
        programCode = '46.03.01';
        break;
      case '47.03.00':
        programName = 'Философия, этика и религиоведение';
        programCode = '47.03.01';
        break;
      case '48.03.00':
        programName = 'Теология';
        programCode = '48.03.01';
        break;
      case '49.03.00':
        programName = 'Физическая культура и спорт';
        programCode = '49.03.01';
        break;
      case '50.03.00':
        programName = 'Искусство и искусствознание';
        programCode = '50.03.01';
        break;
      case '51.03.00':
        programName = 'Культуроведение и социокультурные проекты';
        programCode = '51.03.01';
        break;
      case '52.03.00':
        programName = 'Журналистика, издательское дело и медиакоммуникации';
        programCode = '52.03.01';
        break;
      case '53.03.00':
        programName = 'Музыкальное искусство';
        programCode = '53.03.01';
        break;
      case '54.03.00':
        programName = 'Изобразительное и прикладное искусство, дизайн';
        programCode = '54.03.01';
        break;
      case '55.03.00':
        programName = 'Сценическое искусство';
        programCode = '55.03.01';
        break;
      case '56.03.00':
        programName = 'Кинематография и медиапродакшн';
        programCode = '56.03.01';
        break;
      case '57.03.00':
        programName = 'Фольклористика и этнокультурология';
        programCode = '57.03.01';
        break;
      case '58.03.00':
        programName = 'Востоковедение и африканистика';
        programCode = '58.03.01';
        break;
      default:
        programName = faker.lorem.sentence();
        programCode = '00.00.01';
        break;
    }
    // Add more conditions for other codes as needed

    const commercial = faker.datatype.boolean();
    // Create the program
    await prisma.program.create({
      data: {
        name: programName,
        code: programCode,
        university: {
          connect: {
            id: randomUniversity.id,
          },
        },
        type: {
          connect: {
            id: programType.id,
          },
        },
        is_commercial: commercial,
        cost: commercial
          ? faker.number.int({ min: 10000, max: 3000000 })
          : undefined,
        photo: faker.image.url(),
        period: 60,
        detail: faker.lorem.sentence(),
      },
    });
  }

  // Banks
  // const banks = [];
  // for (let i = 0; i < 5; i += 1) {
  //   banks.push(
  //     await prisma.bank.create({
  //       data: {
  //         photo: faker.image.url(),
  //         name: faker.company.name(),
  //       },
  //     })
  //   );
  // }
  await prisma.bank.createMany({
    data: [
      { photo: faker.image.url(), name: 'Тинькофф Банк' },
      { photo: faker.image.url(), name: 'Совкомбанк' },
      { photo: faker.image.url(), name: 'Инвест Кредит' },
      { photo: faker.image.url(), name: 'Сбербанк' },
      { photo: faker.image.url(), name: 'Хоум Кредит Банк' },

      // Add more as needed
    ],
  });
  // You can continue seeding other models in a similar way...
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
