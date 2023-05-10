import { getTemplateContent } from 'utils';

import HTMLTemplate from './header.component.html';

export default class AppHeader extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    const { shadowRoot } = this;

    const { cssContent, htmlContent } = getTemplateContent(HTMLTemplate);
    shadowRoot.innerHTML = '';
    shadowRoot.appendChild(cssContent);
    shadowRoot.appendChild(htmlContent);

    shadowRoot.querySelector('.title').innerHTML = 'Marvelius 1.0';
  }
}

customElements.define('app-header', AppHeader);
