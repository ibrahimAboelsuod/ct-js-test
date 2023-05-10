/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import { AppHeader } from 'components';
import 'assets/data/cars.json';

import './style.css';

const fetchCars = async () => {
  try {
    const response = await fetch('assets/cars.json');

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    return error;
  }
};

const init = async () => {
  const cars = await fetchCars();
  console.log(cars);
  // create card component
  // bind data?
  // render
};

window.onload = () => {
  init();
};
