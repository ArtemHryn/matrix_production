import {
  card1,
  card2,
  card3,
  card4,
  card5,
  card1Tab,
  card2Tab,
  card3Tab,
  card4Tab,
  card5Tab,
  card1Desc,
  card2Desc,
  card3Desc,
  card4Desc,
  card5Desc,
} from './';

const textBeforeCard1a =
  'Определяется состояние каждой энергии в матрице на данный момент. Подойдёт для тех, кто раньше уже был на консультации (у меня или другого мастера), находится в трансформации или же разбирал свою матрицу самостоятельно и желает узнать в каком состоянии находятся энергии исходя из запроса. ';

const textBeforeCard1b =
  'Также вы получите рекомендации для гармонизации данных энергий.';

const textBeforeCard3a =
  'Подбор даты или периода для важного события в вашей жизни (открытие бизнеса, важная встреча, подписание договоров, запуск своего проекта, дата знакомства с родителями, дата свадьбы и т.д.)';

const textBeforeCard3b = 'Красивая дата ≠ благоприятная дата';

const textBeforeCard3c =
  'Разберем какие задачи, препятствия, усиления несёт желаемая дата или период. Подберём лучшую дату исходя из запроса.';

const textBeforeCard2a =
  'Данная консультация быстрый и удобный инструмент для определения:';
const textBeforeCard2b =
  'Поможет понять, наладить и гармонизировать отношения с любым партнёром (родители, дети, друзья, знакомые, коллеги, начальник, вторая половинка)';

const textBeforeCard4a =
  'Числа окружают нас всюду, влияют на нас, так как несут в себе определённые энергии, и могут помогать нам и нашим близким, если правильно их использовать.';

const textBeforeCard4b =
  'Подбор благоприятной энергии для номера авто, квартиры, дома, телефона, банковской карты и т.д. для точечного улучшения и влияния на качество вашей жизни.';

const textBeforeCard5a = 'Экстренный разбор запроса в день обращения.';
const textBeforeCard5b =
  'Поможет вам рассмотреть ситуацию с нескольких сторон, понять причинно-следственные связи и принять верное решение.';
const textBeforeCard5c = 'Включает в себя:';

export const cards = [
  {
    img: card1,
    text: 'Диагностика состояния матрицы',
    imgTab: card1Tab,
    imgDesc: card1Desc,
    price: '$21',
    info: {
      textBefore: [textBeforeCard1a, textBeforeCard1b],
      meeting: 'Видеовстреча или аудиосообщения в телеграмм',
      additionInfo: [
        '*Данная консультация не подразумевает трактовку вашей матрицы и энергий в ней.',
        '*Проводиться с помощью карт Метода или карт Таро.',
      ],
    },
  },
  {
    img: card3,
    text: 'Подбор благоприятной даты, периода',
    imgTab: card3Tab,
    imgDesc: card3Desc,
    price: '$17',
    info: {
      textBefore: [textBeforeCard3a, textBeforeCard3b, textBeforeCard3c],
      meeting: 'Видеовстреча 30 минут',
    },
  },
  {
    img: card2,
    text: 'Совместимость',
    imgTab: card2Tab,
    imgDesc: card2Desc,
    price: '$21',
    info: {
      textBefore: [textBeforeCard2a],
      list: [
        'задач в паре; какой формат связи в партнёрстве; ',
        'что ожидать от партнёра и как с ним правильно взаимодействовать;',
        'из-за чего чаще всего могут возникать конфликты и как их решать эффективно; ',
        'как вывести данное партнёрство в плюс и получить нужные результаты',
      ],
      textAfter: [textBeforeCard2b],
      meeting: 'видеовстреча 30 минут',
    },
  },

  {
    img: card4,
    text: 'Энергии длительного действия',
    imgTab: card4Tab,
    imgDesc: card4Desc,
    price: '$7',
    info: {
      textBefore: [textBeforeCard4a, textBeforeCard4b],
      meeting: 'видеовстреча или аудиосообщения в телеграмм',
    },
  },
  {
    img: card5,
    text: 'SOS - помощь',
    imgTab: card5Tab,
    imgDesc: card5Desc,
    price: '$28',
    info: {
      textBefore: [textBeforeCard5a, textBeforeCard5b, textBeforeCard5c],
      list: [
        'экспресс разбор матрицы',
        'дополнительную консультацию таролога по ситуации на данный момент.',
      ],
      meeting: 'видеовстреча с 2 мастерами',
    },
  },
];
