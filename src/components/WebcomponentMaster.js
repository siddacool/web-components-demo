export default class extends HTMLElement {
  constructor(webcomponentName) {
    super();
    this._whatTheHellisThis = 'Webcomponent Master';
    this._webcomponentName = webcomponentName || 'No name';
  }

  connectedCallback() {
    console.log(`created a new ${this._whatTheHellisThis}, ${this._webcomponentName}`);
  }

  disconnectedCallback() {
    console.log(`removed component ${this._webcomponentName}`);
  }
}
