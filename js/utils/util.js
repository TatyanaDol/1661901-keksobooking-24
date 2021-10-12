import {getRandomNumberFromTo} from './get-random-positive-integer.js';

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

export {getRandomArrFromArr};
