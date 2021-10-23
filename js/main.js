import {constructPopupCard} from './popup-constructor.js';

const mapCanvas = document.querySelector('.map__canvas');
const popupCards = constructPopupCard(10);

mapCanvas.appendChild(popupCards[0]);

