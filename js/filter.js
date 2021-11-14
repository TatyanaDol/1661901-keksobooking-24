const Prices = {
  MIDDLE: {
    from: 10000,
    to: 50000,
  },
  LOW: {
    from: 0,
    to: 10000,
  },
  HIGH: {
    from: 50000,
    to: 1000000,
  },
  ANY: {
    from: 0,
    to: 1000000,
  },
};

const mapFilters = document.querySelector('.map__filters');
const houseTypeFilter = mapFilters.querySelector('#housing-type');
const housingPriceFilter = mapFilters.querySelector('#housing-price');
const housingRoomsFilter = mapFilters.querySelector('#housing-rooms');
const housingGuestsFilter = mapFilters.querySelector('#housing-guests');

const objOfPersonalFilterValues = {
  type: 'any',
  price: 'any',
  rooms: 'any',
  guests: 'any',
};

const setHouseTypeFilterChange = (cb) => {
  houseTypeFilter.addEventListener('change', (evt) => {
    objOfPersonalFilterValues.type = evt.target.value;
    cb();
  });
};

const setHousingPriceFilterChange = (cb) => {
  housingPriceFilter.addEventListener('change', (evt) => {
    objOfPersonalFilterValues.price = evt.target.value;
    cb();
  });
};

const setHousingRoomsFilterChange = (cb) => {
  housingRoomsFilter.addEventListener('change', (evt) => {
    objOfPersonalFilterValues.rooms = evt.target.value;
    cb();
  });
};

const setHousingGuestsFilterChange = (cb) => {
  housingGuestsFilter.addEventListener('change', (evt) => {
    objOfPersonalFilterValues.guests = evt.target.value;
    cb();
  });
};

function filterArrayOfCards (arrayElement) {

  if ((objOfPersonalFilterValues.type === arrayElement.offer.type || objOfPersonalFilterValues.type === 'any') && (arrayElement.offer.price > Prices[objOfPersonalFilterValues.price.toUpperCase()].from && arrayElement.offer.price < Prices[objOfPersonalFilterValues.price.toUpperCase()].to) && (objOfPersonalFilterValues.rooms === arrayElement.offer.rooms.toString() || objOfPersonalFilterValues.rooms === 'any') && (objOfPersonalFilterValues.guests === arrayElement.offer.guests.toString() || objOfPersonalFilterValues.guests === 'any')) {
    return true;
  }
  return false;
}

const featuresList = {
  wifi: false,
  dishwasher: false,
  parking: false,
  washer: false,
  elevator: false,
  conditioner: false,
};

const checkboxsContainer = mapFilters.querySelector('#housing-features');

function onCheckboxsContainerChange (evt) {
  if (evt.target.matches('input[type="checkbox"]')) {
    if(featuresList[evt.target.value] === false) {
      featuresList[evt.target.value] = true;
    }
    else {
      featuresList[evt.target.value] = false;
    }
  }
}

const setcheckboxsContainerChange = (cb) => {
  checkboxsContainer.addEventListener('change', (evt) => {
    onCheckboxsContainerChange(evt);
    cb();
  });
};

const getCardRank = (card) => {
  let rank = 0;
  if (card.offer.features) {
    card.offer.features.forEach((feature) => {

      if (featuresList[feature] === true) {
        rank++;
      }
    });
  }
  return rank;
};


function compareCards (cardA, cardB) {
  const rankA = getCardRank(cardA);
  const rankB = getCardRank(cardB);

  return rankB - rankA;
}

export {setcheckboxsContainerChange, filterArrayOfCards, compareCards, getCardRank, setHousingGuestsFilterChange, setHousingRoomsFilterChange, setHousingPriceFilterChange, setHouseTypeFilterChange};
