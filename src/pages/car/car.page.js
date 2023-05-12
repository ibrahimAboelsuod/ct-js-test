/* eslint-disable no-unused-vars */
import { AppCarCard } from 'components';
import { getVehiclesData } from 'services';
import { parseQueryParams } from 'utils';

import 'style.css';

async function init() {
  const params = parseQueryParams();

  const [carsList] = await getVehiclesData();
  document.getElementById('car-card').car = carsList.find(
    (car) => car.id === params.id,
  );
}
window.onload = () => {
  init();
};
