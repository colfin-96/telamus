// import '../../../../core/src/assets/styles/components';

const attributes = [
  'width',
  'height',
  'border-radius',
  'color',
  'bg-color',
  'content',
];

export class Button extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.attachShadow({ mode: 'open' });

    const button = document.createElement('button');
    button.setAttribute('part', 'button');
    button.setAttribute('type', 'button');

    applyAttributes(this, button);
    applyDensity(this, button);

    this.shadowRoot?.append(button);
  }
}

function applyAttributes(wrapper: HTMLElement, button: HTMLButtonElement) {
  const result = [];
  for (const attribute of attributes) {
    const value = wrapper.getAttribute(attribute);
    if (value) {
      switch (attribute) {
        case 'content':
          button.innerText = value;
          break;
        default:
          break;
      }
      result.push({ attribute: attribute, value: value });
    }
  }
}

function applyDensity(wrapper: HTMLElement, button: HTMLButtonElement) {
  const density = wrapper.getAttribute('density');
  if (density) {
    button.classList.add(`density-${density}`);
  }
}

if ('customElements' in window) {
  customElements.define('tms-button', Button);
}
