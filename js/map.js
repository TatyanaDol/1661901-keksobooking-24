import {constructOnePopupCard} from './popup-constructor.js';
import {activateForm} from './form-control.js';
import {createObjects} from './data.js';
const tenObj = createObjects(10);


const addressInput = document.querySelector('#address');

const map = L.map('map-canvas')
  .on('load', () => {
    activateForm();
  })
  .setView({
    lat: 35.68950,
    lng: 139.69171,
  }, 10);

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(map);

const mainPinIcon = L.icon({
  iconUrl: 'leaflet/images/main-pin.svg',
  iconSize: [52, 52],
  iconAnchor: [26, 52],
});

const marker = L.marker(
  {
    lat: 35.69522,
    lng: 139.77218,
  },
  {
    draggable: true,
    icon: mainPinIcon,
  },
);
marker.addTo(map);

marker.on('moveend', (evt) => {
  const { lat, lng } = evt.target.getLatLng();

  addressInput.value = `${lat.toFixed(5)}, ${lng.toFixed(5)}`;
});

const createMarker = (obj) => {
  const {location: { lat, lng } } = obj;
  const everageMarkerIcon = L.icon({
    iconUrl: 'leaflet/images/pin.svg',
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  });

  const markerEverage = L.marker({
    lat,
    lng,
  },
  {
    icon: everageMarkerIcon,
  },
  );

  markerEverage
    .addTo(map)
    .bindPopup(constructOnePopupCard(obj));
};

tenObj.forEach((obj) => {
  createMarker(obj);
});
