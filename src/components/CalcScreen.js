import WebcomponentMaster from './WebcomponentMaster';

function addbits(s) {
  let toReturn = '';

  if (s && s !== '') {
    const str = s.toString();
    toReturn = (str.replace(/\s/g, '')
      .match(/[+\-]?([0-9\.]+)/g) || [])
      .reduce((sum, value) => {
        return parseFloat(sum) + parseFloat(value);
      });
  }

  return toReturn.toString();
}

class CalcScreen extends WebcomponentMaster {
  constructor() {
    super('calc-screen');
    const style = `
      @media only screen and (min-width: 1025px) {
        :host {
          height: 100px;
          padding: 0;
        }
      }
      .screen__view--top {
        font-size: 2rem;
        font-weight: 600;
        height: 60px;
        overflow-x: auto;
        text-align: right;
      }

      .screen__view--bottom {
        font-weight: 600;
        overflow-x: auto;
        text-align: right;
      }
    `;
    const shadowRoot = this.attachShadow({ mode: 'open' });
    shadowRoot.innerHTML = `
      <style>${style}</style>
      <div class="screen__view--top"></div>
      <div class="screen__view--bottom"></div>
    `;
  }

  static get observedAttributes() {
    return ['val'];
  }

  updateScreen(newValue) {
    const screenTop = this.shadowRoot.querySelector('.screen__view--top');
    const screenBottom = this.shadowRoot.querySelector('.screen__view--bottom');
    const val = newValue;

    screenTop.innerText = val;
    screenBottom.innerText = addbits(val);
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === 'val') {
      this.updateScreen(newValue);
    }
  }
}

customElements.define('calc-screen', CalcScreen);
