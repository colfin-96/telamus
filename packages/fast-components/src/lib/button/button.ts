import {
  FASTElement,
  customElement,
  attr,
  html,
  ViewTemplate,
} from '@microsoft/fast-element';

const template: ViewTemplate<Button> = html` <button
  type="button"
  @click="${(x) => x.onClick()}"
>
  You clicked me ${(x) => x.times} times.
</button>`;

@customElement({ name: 'tlm-button', template })
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
