export default class TemplatedHTMLElement extends HTMLElement {
  scope = {};

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
    template.innerHTML = this.passScopeToTemplate(templateHTML.trim());
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

  passScopeToTemplate(template) {
    return template.replace(
      /\${(.*?)}/g,
      (expression, key) => this.scope[key] || expression,
    );
  }
}
