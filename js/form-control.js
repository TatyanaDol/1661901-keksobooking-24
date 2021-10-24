
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


export {deactivateForm, activateForm};
