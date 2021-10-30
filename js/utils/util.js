import {getRandomNumberFromTo} from './get-random-positive-integer.js';
import {MAX_PRICE, MinPrice} from '../data.js';

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

function disableOptions (capacitySelectOptionsArray, roomNumberValue) {

  for (let i = 0; i < capacitySelectOptionsArray.length; i++ ) {

    if (capacitySelectOptionsArray[i].value > roomNumberValue  || (roomNumberValue !== '100' && capacitySelectOptionsArray[i].value === '0')) {
      capacitySelectOptionsArray[i].disabled = true;
    } else if (roomNumberValue === '100' && capacitySelectOptionsArray[i].value !== '0') {
      capacitySelectOptionsArray[i].disabled = true;
    } else {
      capacitySelectOptionsArray[i].disabled = false;
    }

  }
}

function validatePriceInput () {
  const priceInput = document.querySelector('#price');
  const typeSelect = document.querySelector('#type');
  const valuePriceInput = priceInput.value;
  if (valuePriceInput < MinPrice[typeSelect.value.toUpperCase()]) {
    priceInput.setCustomValidity(`Значение цены должно быть не меньше ${  MinPrice[typeSelect.value.toUpperCase()]}`);
  } else if (valuePriceInput > MAX_PRICE) {
    priceInput.setCustomValidity(`Максимально допустимая цена: 1000000. Необходимо снизить цену на ${  valuePriceInput - MAX_PRICE}`);
  } else {
    priceInput.setCustomValidity('');
  }
  priceInput.reportValidity();
}

function synchronizeTimeinAndTimeout (sourse, target) {
  for (let i = 0; i < sourse.length; i++) {
    if (sourse[i].selected) {
      target[i].selected = true;
    }
  }
}

export {getRandomArrFromArr, disableOptions, validatePriceInput, synchronizeTimeinAndTimeout};
