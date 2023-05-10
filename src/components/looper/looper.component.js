import { TemplatedHTMLElement } from 'classes';

import HTMLTemplate from './looper.component.html';

export default class Looper extends TemplatedHTMLElement {
  render(template = HTMLTemplate) {
    super.render(template);
  }
}
