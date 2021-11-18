import {renderCardsMarkers} from './map.js';
import {setAdFormSubmit, showSuccessMessage, showSubmitErrorMessage} from './form-control.js';
import {getData} from './api.js';
import {showErrorMessage} from './utils/util.js';
import {debounce} from './utils/debounce.js';
import {setcheckboxsContainerChange, setHousingGuestsFilterChange, setHousingRoomsFilterChange, setHousingPriceFilterChange, setHouseTypeFilterChange} from './filter.js';
import './image.js';

const RERENDER_DELAY = 500;

getData((arrayOfCards) => {
  renderCardsMarkers(arrayOfCards);

  setHouseTypeFilterChange(debounce(
    () => renderCardsMarkers(arrayOfCards), RERENDER_DELAY,
  ));
  setHousingPriceFilterChange(debounce(
    () => renderCardsMarkers(arrayOfCards), RERENDER_DELAY,
  ));
  setHousingGuestsFilterChange(debounce(
    () => renderCardsMarkers(arrayOfCards), RERENDER_DELAY,
  ));
  setHousingRoomsFilterChange(debounce(
    () => renderCardsMarkers(arrayOfCards), RERENDER_DELAY,
  ));
  setcheckboxsContainerChange(debounce(
    () => renderCardsMarkers(arrayOfCards), RERENDER_DELAY,
  ));
},
() => showErrorMessage('Не удалось загрузить объявления'),
);

setAdFormSubmit(showSuccessMessage, showSubmitErrorMessage);
