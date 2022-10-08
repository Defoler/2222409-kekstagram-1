const getRandomNumber = function (lowerLimit, upperLimit) {
  if (lowerLimit >= 0 && upperLimit >= lowerLimit) {
    return Math.floor(Math.random() * (upperLimit - lowerLimit + 1) + lowerLimit);
  }
  return 'Введите положительные значения.';
};

const getRandomArrayIndex = function (index) {
  return index[getRandomNumber(0, index.length - 1)];
};

const NUMBER_OF_LIKES = getRandomNumber(15, 200);
const ID = getRandomNumber(1, 1000);
const RANDOM_AVATAR = getRandomNumber(1, 6);
const PHOTO_DESCRIPTIONS = ['Мы с кентами под хардбас тусим в шмотках адидас.',
  'Серёжа любил петь, но все Пети были натуралами.',
  'Штирлиц долго смотрел на хозяйственное мыло. На мыле было написано 70%. "Зависло", - подумал Штирлиц.',
  'Дагестанский суд не смог продолжаться, так как адвокату запретили говорить слово "брат."'];
const COMMENTS = ['Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'];
const NAMES = ['Иван', 'Иаков', 'Ной', 'Варлаам', 'X Æ A-12', 'Сократ', 'Петрович', 'Гайдай', 'Гай Фокс'];

const PHOTO_COUNT = 25;
const userPhotos = [];

for (let i = 1; i <= PHOTO_COUNT; i++) {
  userPhotos.push({
    id: i,
    url: `photos/${i}.jpg`,
    description: getRandomArrayIndex(PHOTO_DESCRIPTIONS),
    likes: NUMBER_OF_LIKES,
    comments: [{
      id: i * ID,
      avatar: `img/avatar-${RANDOM_AVATAR}.svg`,
      message: getRandomArrayIndex(COMMENTS),
      name: getRandomArrayIndex(NAMES)
    }]
  });
}


