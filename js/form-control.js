import {disableOptions, validatePriceInput, synchronizeTimeinAndTimeout} from './utils/util.js';
import {MIN_TITLE_LENGTH, MAX_TITLE_LENGTH, MinPrice} from './data.js';

const adForm = document.querySelector('.ad-form');
const interactiveElements = adForm.querySelectorAll('fieldset');

function deactivateForm () {
  adForm.classList.add('ad-form--disabled');
  interactiveElements.forEach((interactiveElementsItem) => {
    interactiveElementsItem.disabled = true;
  });
}

function activateForm () {
  adForm.classList.remove('ad-form--disabled');
  interactiveElements.forEach((interactiveElementsItem) => {
    interactiveElementsItem.disabled = false;
  });
}

const adTitleInput = adForm.querySelector('#title');

adTitleInput.addEventListener('input', () => {
  const valueLength = adTitleInput.value.length;

  if (valueLength < MIN_TITLE_LENGTH) {
    adTitleInput.setCustomValidity(`Минимальное количество символов: 30. Необходимо ввести ещё ${  MIN_TITLE_LENGTH - valueLength}`);
  } else if (valueLength > MAX_TITLE_LENGTH) {
    adTitleInput.setCustomValidity(`Максимальное количество символов: 100. Удалите лишние + ${  valueLength - MAX_TITLE_LENGTH}`);
  } else {
    adTitleInput.setCustomValidity('');
  }

  adTitleInput.reportValidity();
});

const priceInput = adForm.querySelector('#price');
const typeSelect = adForm.querySelector('#type');

typeSelect.addEventListener('change', () => {
  priceInput.placeholder = MinPrice[typeSelect.value.toUpperCase()];
  validatePriceInput();
});


priceInput.addEventListener('input', validatePriceInput);

const roomNumberSelect = adForm.querySelector('#room_number');
const capacitySelect = adForm.querySelector('#capacity');
const capacitySelectOptions = capacitySelect.options;

roomNumberSelect.addEventListener('change', () => {
  disableOptions(capacitySelectOptions, roomNumberSelect.value);

  for (let i = 0; i < capacitySelectOptions.length; i++) {
    if (!capacitySelectOptions[i].disabled) {
      capacitySelectOptions[i].selected = true;
    }
  }
});

const timeinSelect = adForm.querySelector('#timein');
const timeoutSelect = adForm.querySelector('#timeout');
const timeinSelectOptions = timeinSelect.options;
const timeoutSelectOptions = timeoutSelect.options;

timeinSelect.addEventListener('change', () => {
  synchronizeTimeinAndTimeout(timeinSelectOptions, timeoutSelectOptions);
});
timeoutSelect.addEventListener('change', () => {
  synchronizeTimeinAndTimeout(timeoutSelectOptions, timeinSelectOptions);
});

export {deactivateForm, activateForm};
