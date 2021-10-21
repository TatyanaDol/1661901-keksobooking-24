import {createObjects} from './data.js';
import {TYPES} from './data.js';
const popupTemplate = document.querySelector('#card').content.querySelector('.popup');

export function constructPopupCard (NumberOfCards) {

  const randomOjects = createObjects(NumberOfCards);
  const popupArr = [];

  randomOjects.forEach((obj) => {

    const objPopup = popupTemplate.cloneNode(true);
    obj.author.avatar ? objPopup.querySelector('.popup__avatar').src = obj.author.avatar : objPopup.querySelector('.popup__avatar').classList.add('hidden');
    obj.offer.title ? objPopup.querySelector('.popup__title').textContent = obj.offer.title : objPopup.querySelector('.popup__title').classList.add('hidden');
    obj.offer.address ? objPopup.querySelector('.popup__text--address').textContent = obj.offer.address : objPopup.querySelector('.popup__text--address').classList.add('hidden');
    obj.offer.price ? objPopup.querySelector('.popup__text--price').textContent = `${obj.offer.price  } ₽/ночь` : objPopup.querySelector('.popup__text--price').classList.add('hidden');
    obj.offer.price ? objPopup.querySelector('.popup__text--price').textContent = `${obj.offer.price  } ₽/ночь`: objPopup.querySelector('.popup__text--price').classList.add('hidden');
    obj.offer.type ? objPopup.querySelector('.popup__type').textContent = TYPES[obj.offer.type] : objPopup.querySelector('.popup__type').classList.add('hidden');
    obj.offer.rooms && obj.offer.guests  ? objPopup.querySelector('.popup__text--capacity').textContent = `${obj.offer.rooms  } комнаты для ${  obj.offer.guests  } гостей` : objPopup.querySelector('.popup__text--capacity').classList.add('hidden');
    obj.offer.checkin && obj.offer.checkout ? objPopup.querySelector('.popup__text--time').textContent = `Заезд после ${  obj.offer.checkin  }, выезд до ${  obj.offer.checkout}` : objPopup.querySelector('.popup__text--time').classList.add('hidden');

    if (obj.offer.features) {
      const featuresListOfObject = obj.offer.features;
      const featuresListFragment = document.createDocumentFragment();
      featuresListOfObject.forEach((feature) => {
        const featureListItem = objPopup.querySelector(`.popup__feature--${feature}`);
        if (featureListItem) {
          featuresListFragment.append(featureListItem);
        }
      });

      const featuresConteiner = objPopup.querySelector('.popup__features');
      featuresConteiner.innerHTML = '';
      featuresConteiner.append(featuresListFragment);
    }
    else {
      objPopup.querySelector('.popup__features').classList.add('hidden');
    }

    obj.offer.description ? objPopup.querySelector('.popup__description').textContent = obj.offer.description : objPopup.querySelector('.popup__description').classList.add('hidden');

    if (obj.offer.photos) {
      const photosListOfObject = obj.offer.photos;
      const photosListFragment = document.createDocumentFragment();
      photosListOfObject.forEach((photo) => {
        const photoListItem = objPopup.querySelector('.popup__photo').cloneNode(true);
        photoListItem.src = photo;
        photosListFragment.append(photoListItem);
      });

      const photosConteiner = objPopup.querySelector('.popup__photos');
      photosConteiner.innerHTML = '';
      photosConteiner.append(photosListFragment);
    }
    else {
      objPopup.querySelector('.popup__photos').classList.add('hidden');
    }

    popupArr.push(objPopup);
  });
  return popupArr;
}
