import WebcomponentMaster from './WebcomponentMaster';

export default class extends WebcomponentMaster {
  constructor() {
    super('responsive-image');

    const shadowRoot = this.attachShadow({ mode: 'open' });

    const style = `
      :host {
        display: inline-block;
      }

      * {
        box-sizing: border-box;
      }

      .container {
        display: inline-block;
        max-width: 600px;
      }

      .img {
        display: block;
        height: auto;
        width: 100%;
      }
    `;

    shadowRoot.innerHTML = `
      <style>${style}</style>
      <div class="container">
        <img class="img img--main" src="data:image/gif;base64,R0lGODlhAQABAAAAACwAAAAAAQABAAA=" alt="" />
      </div>
    `;
  }

  getShadowElm() {
    return this.shadowRoot;
  }

  updateImage(src) {
    const target = this.getShadowElm();
    const img = target.querySelector('.img--main');

    img.src = src;
  }

  updateSize(size, setter = 'max') {
    const target = this.getShadowElm();
    const container = target.querySelector('.container');

    container.style[`${setter}-width`] = `${size}px`;
  }

  static get observedAttributes() {
    return ['src', 'max', 'min'];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === 'src') {
      this.updateImage(newValue);
    } else if (name === 'max') {
      this.updateSize(newValue, 'max');
    } else if (name === 'min') {
      this.updateSize(newValue, 'min');
    }
  }
}
