const AVATAR_ADRESS = [
  '01','02','03','04','05','06','07','08','09','10',
];

const TYPE = [
  'palace', 'flat', 'house', 'bungalow', 'hotel',
];
const TIME_OF_CHECKIN_AND_CHECKOUT = ['12:00', '13:00', '14:00'];

const DISCRIPTION = ['Красивое', 'Не очень красивое', 'Божественно', 'Для новобрачных', 'Подойдет одиноким котикам'];

const FEATURES = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];

const PHOTOS = ['https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg', 'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg', 'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg'];


function getRandomNumberFromTo (min, max) {
  if (min >= max) {
    throw new Error('Диапазон введен неверно');
  }
  if (min < 0 || max < 0) {
    throw new Error('Числа в диапазоне должны быть положительными');
  }

  return Math.floor(Math.random() * (max - min + 1)) + min;

}
getRandomNumberFromTo(10, 20);

function getRandomFloatFromTo (min, max, num) {
  if (min >= max) {
    throw new Error('Диапазон введен неверно');
  }
  if (min < 0 || max < 0) {
    throw new Error('Числа в диапазоне должны быть положительными');
  }
  return ((Math.random() * (max - min)) + min).toFixed(num);
}
getRandomFloatFromTo(1.1, 1.2, 2);


function getRandomArrFromArr (array, num) {

  if (num >= array.length) {
    return array;
  }
  const resultsArr = [];
  for (let ind = 0; ind < num; ind++ ) {
    const someElement = array[getRandomNumberFromTo(0, array.length -1)];
    if (!resultsArr.includes(someElement)) {
      resultsArr.push(someElement);
    }
    else {
      ind--;
      if (resultsArr.length === array.length || array.length === num) {
        break;
      }
    }
  }
  return resultsArr;
}

const createObjects = (qty) => {

  const tenObjects = [];


  for (let index = 0; index < qty; index++) {

    const avatarAdress = `img/avatars/user${  AVATAR_ADRESS[index]  }.png`;
    const proposalTitle = `Предложение № ${  index}`;
    const locationLat = getRandomFloatFromTo(35.65000, 35.70000, 5);
    const locationLng = getRandomFloatFromTo(139.70000, 139.80000, 5);
    const coordinates = `${locationLat  }, ${  locationLng}`;
    const prices = getRandomNumberFromTo(1000, 10000);
    const numberOfRooms = getRandomNumberFromTo(1, 10);
    const numberOfGuests = getRandomNumberFromTo(1, 20);


    const someOb = {
      author: {
        avatar: avatarAdress,
      },

      offer: {
        title: proposalTitle,
        address: coordinates,
        price: prices,
        type: TYPE[getRandomNumberFromTo(0, TYPE.length -1)],
        rooms: numberOfRooms,
        guests: numberOfGuests,
        checkin: TIME_OF_CHECKIN_AND_CHECKOUT[getRandomNumberFromTo(0, TIME_OF_CHECKIN_AND_CHECKOUT.length -1)],
        checkout: TIME_OF_CHECKIN_AND_CHECKOUT[getRandomNumberFromTo(0, TIME_OF_CHECKIN_AND_CHECKOUT.length -1)],
        features: getRandomArrFromArr(FEATURES, getRandomNumberFromTo(1, FEATURES.length)),
        description: DISCRIPTION[getRandomNumberFromTo(0, DISCRIPTION.length -1)],
        photos: getRandomArrFromArr(PHOTOS,  getRandomNumberFromTo(1, PHOTOS.length)),
      },

      location: {
        lat: locationLat,
        lng: locationLng,
      },

    };
    tenObjects.push(someOb);
  }
  return tenObjects;
};

createObjects(10);

