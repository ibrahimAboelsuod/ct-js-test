import { TemplatedHTMLElement } from 'classes';

import HTMLTemplate from './header.component.html';

export default class AppHeader extends TemplatedHTMLElement {
  render(template = HTMLTemplate) {
    super.render(template);
    this.shadowRoot.querySelector('.title').innerHTML = 'Marvelius 1.0';
  }
}

customElements.define('app-header', AppHeader);
