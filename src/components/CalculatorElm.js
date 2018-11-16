import * as math from 'mathjs';
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

function calcStringController(s) {
  let str = s;
  let evalStr = '';
  const splitString = str.split('');
  const last = splitString[splitString.length - 1];
  const parseLast = parseInt(last, 10) || last === '0';

  if (!parseLast) {
    str = str.slice(0, -1);
  }

  if (str !== '') {
    evalStr = str.toString();
  }

  return evalStr;
}

function calcStringEval(s) {
  let evalStr = '';

  if (s !== '') {
    evalStr = math.eval(s);
    evalStr = evalStr.toString();
  }

  return evalStr;
}

class Calculator extends WebcomponentMaster {
  constructor() {
    super('calculator-elm');
    this.state = {
      val: '',
      digitArr: ['7', '8', '9', '4', '5', '6', '1', '2', '3', '.', '0'],
      calcArr: [
        {
          symbol: '&#x00F7',
          value: '/',
        },
        {
          symbol: '&#x00D7',
          value: '*',
        },
        {
          symbol: '-',
          value: '-',
        },
        {
          symbol: '+',
          value: '+',
        },
      ],
    };
  }

  static get observedAttributes() {
    return ['val'];
  }

  modifyValue(valNew) {
    this.state.val = valNew;
    const { val } = this.state;
    const screen = this.shadowRoot.querySelector('calc-screen');

    screen.setAttribute('val', calcStringController(val));
    screen.setAttribute('val-str', val);
  }

  calculation(e) {
    e.preventDefault();
    if (e.target) {
      const target = e.composedPath()[0];
      if (target.classList.contains('btn--digit') || target.classList.contains('btn--calc')) {
        let { val } = this.state;
        const getVal = target.getAttribute('value') || target.innerText;
        val += getVal;
        this.modifyValue(val);
      } else if (target.classList.contains('btn--del')) {
        let { val } = this.state;
        val = val.slice(0, -1);
        this.modifyValue(val);
      } else if (target.classList.contains('btn--equal')) {
        let { val } = this.state;
        val = calcStringEval(val);
        this.modifyValue(val);
      } else if (target.classList.contains('btn--clear')) {
        this.modifyValue('');
      }
    }
  }

  connectedCallback() {
    const { digitArr, calcArr, val } = this.state;
    const shadowRoot = this.attachShadow({ mode: 'open' });
    const style = `
      :host {
        display: block;
        margin: 0 auto;
        position: relative;
      }

      * {
        box-sizing: border-box;
      }

      a {
        text-decoration: none;
        color: #000;
      }

      .btn-grp {
        display: flex;
        height: 70vh;
      }

      .btn-grp__digit {
        display: flex;
        flex-wrap: wrap;
      }

      .btn-grp__calc {
        display: flex;
        flex-direction: column;
        width: 30%;
      }

      .btn {
        background-color: #f5f5f5;
        border: 1px solid #efefef;
        display: inline-block;
        font-size: 20px;
        font-weight: bold;
        letter-spacing: .4px;
        padding: 8px 10px;
      }

      .btn-grp__digit .btn {
        display: inline-block;
        width: 33.333%;
      }

      .btn-grp__calc .btn {
        height: 17%;
      }

      @media only screen 
      and (min-width: 1025px) { 
        :host {
          margin-top: 50px;
          max-width: 300px;
        }

        .btn-grp {
          height: 300px;
        }
      }
    `;
    shadowRoot.innerHTML = `
      <style>${style}</style>
      <calc-screen val="${val}"></calc-screen>
      <div class="btn-grp">
        <div class="btn-grp__digit">
          ${digitArr.map(d => `<a href="#" class="btn btn--digit">${d}</a>`).join('')}
          <a href="#" class="btn btn--del">DEL</a>
        </div>
        <div class="btn-grp__calc">
          ${calcArr.map(c => `<a href="#" class="btn btn--calc" value="${c.value}">${c.symbol}</a>`).join('')}
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
