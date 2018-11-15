import WebcomponentMaster from './WebcomponentMaster';
import './CalcScreen';

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

class Calculator extends WebcomponentMaster {
  constructor() {
    super('calculator-elm');
    this.state = {
      val: '',
      digitArr: ['7', '8', '9', '4', '5', '6', '1', '2', '3', '.', '0'],
      calcArr: ['&#x00F7', '&#x00D7', '-', '+'],
    };
  }

  static get observedAttributes() {
    return ['val'];
  }

  modifyValue(valNew) {
    this.state.val = valNew;
    const { val } = this.state;
    const screen = this.querySelector('calc-screen');

    screen.setAttribute('val', val);
  }

  updateScreen() {
    const screen = this.querySelector('calc-screen');
    const screenTop = screen.querySelector('.screen__view--top');
    const screenBottom = screen.querySelector('.screen__view--bottom');
    const { val } = this.state;

    screenTop.innerText = val;
    screenBottom.innerText = addbits(val);
  }

  calculation(e) {
    e.preventDefault();
    if (e.target) {
      const { target } = e;
      if (target.classList.contains('btn--digit') || target.classList.contains('btn--calc')) {
        let { val } = this.state;
        val += target.innerText;
        this.modifyValue(val);
      } else if (target.classList.contains('btn--del')) {
        let { val } = this.state;
        val = val.slice(0, -1);
        this.modifyValue(val);
      } else if (target.classList.contains('btn--equal')) {
        let { val } = this.state;
        val = addbits(val);
        this.modifyValue(val);
      } else if (target.classList.contains('btn--clear')) {
        this.modifyValue('');
      }
    }
  }

  connectedCallback() {
    const { digitArr, calcArr, val } = this.state;
    this.innerHTML = `
      <calc-screen val="${val}"></calc-screen>
      <div class="btn-grp">
        <div class="btn-grp__digit">
          ${digitArr.map(d => `<a href="#" class="btn btn--digit">${d}</a>`).join('')}
          <a href="#" class="btn btn--del">DEL</a>
        </div>
        <div class="btn-grp__calc">
          ${calcArr.map(c => `<a href="#" class="btn btn--calc">${c}</a>`).join('')}
          <a href="#" class="btn btn--equal">=</a>
          <a href="#" class="btn btn--clear">C</a>
        </div>
      </div>
    `;

    this.addEventListener('click', (e) => {
      this.calculation(e);
    });
  }
}

customElements.define('calculator-elm', Calculator);
