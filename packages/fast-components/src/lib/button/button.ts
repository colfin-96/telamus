import {
  FASTElement,
  customElement,
  attr,
  html,
  ViewTemplate,
  css,
} from '@microsoft/fast-element';

import * as styles from './button.css';

const template: ViewTemplate<Button> = html` <button
  type="button"
  @click="${(x) => x.onClick()}"
>
  You clicked me ${(x) => x.times} times.
</button>`;

@customElement({ name: 'tlm-button', template, styles })
export class Button extends FASTElement {
  @attr greeting = 'Hello';
  @attr times = 0;

  greetingChanged() {
    this.times++;
    console.log('greeting changed');
  }

  onClick() {
    this.times++;
  }
}
