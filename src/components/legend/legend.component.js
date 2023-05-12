import { TemplatedHTMLElement } from 'classes';

import HTMLTemplate from './legend.component.html';

export default class AppLegend extends TemplatedHTMLElement {
  static name = 'app-legend';

  get info() {
    return this.innerInfo;
  }

  set info(newInfo) {
    this.innerInfo = newInfo;
    this.innerInfo['@PickUpDateTime'] = new Date(
      this.innerInfo['@PickUpDateTime'],
    ).toLocaleString();
    this.innerInfo['@ReturnDateTime'] = new Date(
      this.innerInfo['@ReturnDateTime'],
    ).toLocaleString();
    this.render();
  }

  render(template = HTMLTemplate) {
    super.render(template);
  }
}

customElements.define(AppLegend.name, AppLegend);
