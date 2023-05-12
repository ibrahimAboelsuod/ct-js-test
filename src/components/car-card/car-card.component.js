import { TemplatedHTMLElement } from 'classes';

import HTMLTemplate from './car-card.component.html';

export default class AppCarCard extends TemplatedHTMLElement {
  static name = 'app-car-card';

  scope = {
    title: 'Carzzzz Card',
  };

  get car() {
    return this.innerCar;
  }

  set car(newCar) {
    this.innerCar = newCar;
    this.render();
  }

  render(template = HTMLTemplate) {
    super.render(template);
    console.log('CAR:', this.car);
  }
}

customElements.define(AppCarCard.name, AppCarCard);