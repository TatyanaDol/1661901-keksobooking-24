import {createMarker} from './map.js';
import {setAdFormSubmit, showSuccessMessage, showSubmitErrorMessage} from './form-control.js';
import {getData} from './api.js';
import {showErrorMessage} from './utils/util.js';

const EVAREGE_MARKERS_COUNT = 10;

getData((arrayOfCards) => {
  arrayOfCards.slice(0, EVAREGE_MARKERS_COUNT).forEach((obj) => {
    createMarker(obj);
  });
},
() => showErrorMessage('Не удалось загрузить объявления'),
);

setAdFormSubmit(showSuccessMessage, showSubmitErrorMessage);

