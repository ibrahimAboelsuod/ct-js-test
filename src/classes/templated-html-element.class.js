// if use import, it will be error :)
const lodashGet = require('lodash/get');

export default class TemplatedHTMLElement extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
  }

  // eslint-disable-next-line class-methods-use-this
  getTemplateContent(templateHTML) {
    const template = document.createElement('template');
    template.innerHTML = this.bindDataToTemplate(templateHTML.trim());
    return {
      css: template.content.firstChild,
      html: template.content.lastChild,
    };
  }

  render(template) {
    const { css, html } = this.getTemplateContent(template);
    this.shadowRoot.innerHTML = '';
    this.shadowRoot.appendChild(css);
    this.shadowRoot.appendChild(html);
  }

  bindDataToTemplate(template) {
    return template.replace(
      /\{{(.*?)}}/g,
      (expression, key) => lodashGet(this, key.trim(), expression),
      // eslint-disable-next-line function-paren-newline
    );
  }
}
