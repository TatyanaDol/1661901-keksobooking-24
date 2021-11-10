import {disableOptions, validatePriceInput, synchronizeTimeinAndTimeout} from './utils/util.js';
import {MIN_TITLE_LENGTH, MAX_TITLE_LENGTH, MinPrice} from './data.js';
import {resetMap} from './map.js';
import {sendData} from './api.js';


const adForm = document.querySelector('.ad-form');
const interactiveElements = adForm.querySelectorAll('fieldset');
const mapFilters = document.querySelector('.map__filters');
const interactiveElementsFilters = mapFilters.children;
const resetButton = adForm.querySelector('.ad-form__reset');


function deactivateForm () {
  adForm.classList.add('ad-form--disabled');
  interactiveElements.forEach((interactiveElementsItem) => {
    interactiveElementsItem.disabled = true;
  });
  mapFilters.classList.add('map__filters--disabled');
  for (let i = 0; i < interactiveElementsFilters.length; i++) {
    interactiveElementsFilters[i].disabled = true;
  }
}

function activateForm () {
  adForm.classList.remove('ad-form--disabled');
  interactiveElements.forEach((interactiveElementsItem) => {
    interactiveElementsItem.disabled = false;
  });
  mapFilters.classList.remove('map__filters--disabled');
  for (let i = 0; i < interactiveElementsFilters.length; i++) {
    interactiveElementsFilters[i].disabled = false;
  }
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

const resetFormAndMap = () => {
  adForm.reset();
  resetMap();
  mapFilters.reset();
};

resetButton.addEventListener('click', () => {
  resetFormAndMap();
});

const setAdFormSubmit = (onSuccess) => {
  adForm.addEventListener('submit', (evt) => {
    evt.preventDefault();
    sendData(
      () => onSuccess(),
      () => showSubmitErrorMessage(),
      new FormData(evt.target),
    );
  });
};

const successTemplate = document.querySelector('#success').content.querySelector('.success');
const success = successTemplate.cloneNode(true);
success.classList.add('hidden');
document.body.append(success);

const errorTemplate = document.querySelector('#error').content.querySelector('.error');
const errorContainer = errorTemplate.cloneNode(true);
errorContainer.classList.add('hidden');
document.body.append(errorContainer);

const isEscapeKey = (evt) => evt.key === 'Escape';

const onEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeSuccessMessage();
    closeSubmitErrorMessage();
  }
};

function showSuccessMessage () {
  resetFormAndMap();
  success.classList.remove('hidden');
  document.addEventListener('keydown', onEscKeydown);
  success.addEventListener('click', () => {
    closeSuccessMessage();
  });
}

function closeSuccessMessage () {
  success.classList.add('hidden');
  document.removeEventListener('keydown', onEscKeydown);
  success.removeEventListener('click', () => {
    closeSuccessMessage();
  });
}

function showSubmitErrorMessage () {
  errorContainer.classList.remove('hidden');
  document.addEventListener('keydown', onEscKeydown);
  errorContainer.addEventListener('click', () => {
    closeSubmitErrorMessage();
  });
}

function closeSubmitErrorMessage () {
  errorContainer.classList.add('hidden');
  document.removeEventListener('keydown', onEscKeydown);
  errorContainer.removeEventListener('click', () => {
    closeSubmitErrorMessage();
  });
}


export {deactivateForm, activateForm, setAdFormSubmit, resetFormAndMap, showSuccessMessage, closeSuccessMessage, showSubmitErrorMessage, closeSubmitErrorMessage};
