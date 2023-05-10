import html from "./header.component.html";

export default class AppHeader extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    const { shadowRoot } = this;

    const { cssContent, htmlContent } = this.htmlToElement(html);
    shadowRoot.innerHTML = "";
    shadowRoot.appendChild(cssContent);
    shadowRoot.appendChild(htmlContent);

    shadowRoot.querySelector(".title").innerHTML = "Marvelius 1.0";
  }

  htmlToElement(html) {
    const template = document.createElement("template");
    template.innerHTML = html.trim();
    return {
      cssContent: template.content.firstChild,
      htmlContent: template.content.lastChild,
    };
  }
}

customElements.define("app-header", AppHeader);
