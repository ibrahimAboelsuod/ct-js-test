/* eslint-disable no-unused-vars */
import { AppHeader, AppLooper, AppLegend } from 'components';
import { getVehiclesData, orderVehiclesBy } from 'services';

import './style.css';

let carLooperRef;
let legendRef;
let pickupAndReturnInfo;
let carsList;

async function init() {
  carLooperRef = document.querySelector('#cars-looper');
  legendRef = document.querySelector('#cars-legend');

  [carsList, pickupAndReturnInfo] = await getVehiclesData();
  carLooperRef.list = orderVehiclesBy('price_up', carsList);

  legendRef.info = pickupAndReturnInfo;
}

function onOrderFilterChange(event) {
  carLooperRef.list = orderVehiclesBy(event.target.value, carLooperRef.list);
}

window.onload = () => {
  init();

  document
    .querySelector('#order-filter')
    .addEventListener('change', onOrderFilterChange);
};
