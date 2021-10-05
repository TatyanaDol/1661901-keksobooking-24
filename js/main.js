
function getRandomNumberFromTo (min, max) {
  if (min >= max) {
    return 'Диапазон введен неверно';
  }
  if (min < 0 || max < 0) {
    return 'Числа в диапазоне должны быть положительными';
  }

  return Math.floor(Math.random() * (max - min + 1)) + min;

}
getRandomNumberFromTo(10, 20);

function getRandomFloatFromTo (min, max, num) {
  if (min >= max) {
    return 'Диапазон введен неверно';
  }
  if (min < 0 || max < 0) {
    return 'Числа в диапазоне должны быть положительными';
  }
  return ((Math.random() * (max - min)) + min).toFixed(num);
}
getRandomFloatFromTo(1.1, 1.2, 2);

