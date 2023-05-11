/* eslint-disable class-methods-use-this */
/* eslint-disable no-underscore-dangle */
import { TemplatedHTMLElement } from 'classes';

import HTMLTemplate from './looper.component.html';

export default class AppLooper extends TemplatedHTMLElement {
  static name = 'app-looper';

  static get observedAttributes() {
    return ['itemDataKey'];
  }

  attributesCallbacks = {
    itemDataKey: (oldValue, newValue) => {
      this.itemDataKey = newValue;
    },
  };

  get list() {
    return this._list || [];
  }

  set list(newList) {
    if (!Array.isArray(newList)) {
      throw new Error(`${AppLooper.name} list must be an array!}`);
    }
    this._list = newList;
    this.render();
  }

  render(template = HTMLTemplate) {
    super.render(template);

    if (!this.startingInnerHTML && this.children.length > 1) {
      throw new Error(`${AppLooper.name} can only have one child!`);
    }

    this.startingInnerHTML = this.children[0].cloneNode();

    if (this.list.length) {
      // ToDo: track items so we can reuse them instead of re-creating
      const contentFrag = document.createDocumentFragment();
      this.list.forEach((dataItem) => {
        const newItem = this.startingInnerHTML.cloneNode();
        newItem[this.itemDataKey] = dataItem;
        contentFrag.appendChild(newItem);
      });
      this.innerHTML = '';
      this.appendChild(contentFrag);
    }
  }
}

customElements.define(AppLooper.name, AppLooper);
