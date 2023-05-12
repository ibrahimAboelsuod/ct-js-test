/* eslint-disable no-unused-vars */
import { AppHeader, AppLooper } from 'components';
import { getVehicles, orderVehiclesBy } from 'services';

import './style.css';

let carLooper;

async function init() {
  carLooper = document.querySelector('#cars-looper');

  carLooper.list = orderVehiclesBy('price_up', await getVehicles());
}

function onOrderFilterChange(event) {
  carLooper.list = orderVehiclesBy(event.target.value, carLooper.list);
}

window.onload = () => {
  init();

  document
    .querySelector('#order-filter')
    .addEventListener('change', onOrderFilterChange);
};
