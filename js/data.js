import {getRandomFloatFromTo} from './utils/get-random-positive-float.js';
import {getRandomNumberFromTo} from './utils/get-random-positive-integer.js';
import {getRandomArrFromArr} from './utils/util.js';

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

const Types = {
  FLAT: 'Квартира',
  BUNGALOW: 'Бунгало',
  HOUSE: 'Дом',
  PALACE: 'Дворец',
  HOTEL: 'Отель',
};

const MIN_TITLE_LENGTH = 30;
const MAX_TITLE_LENGTH = 100;
const MAX_PRICE = 1000000;
const MinPrice = {
  BUNGALOW: 0,
  FLAT: 1000,
  HOTEL: 3000,
  HOUSE: 5000,
  PALACE: 10000,
};


const createObjects = (qty) => {

  const objectsArr = [];

  for (let index = 0; index < qty; index++) {

    const avatarAdress = `img/avatars/user${AVATAR_ADRESS[index]}.png`;
    const proposalTitle = `Предложение № ${index}`;
    const locationLat = getRandomFloatFromTo(35.65000, 35.70000, 5);
    const locationLng = getRandomFloatFromTo(139.70000, 139.80000, 5);
    const coordinates = `${locationLat}, ${locationLng}`;
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
    objectsArr.push(someOb);
  }
  return objectsArr;
};

export {createObjects, Types, MIN_TITLE_LENGTH, MAX_TITLE_LENGTH, MAX_PRICE, MinPrice};
