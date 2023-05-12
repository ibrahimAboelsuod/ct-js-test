import { TemplatedHTMLElement } from 'classes';

import HTMLTemplate from './car-card.component.html';

export default class AppCarCard extends TemplatedHTMLElement {
  static name = 'app-car-card';

  get car() {
    return this.innerCar;
  }

  set car(newCar) {
    this.innerCar = newCar;
    this.render();
  }

  render(template = HTMLTemplate) {
    if (this.car) {
      super.render(template);
    }
  }
}

customElements.define(AppCarCard.name, AppCarCard);
