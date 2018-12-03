export default class extends HTMLElement {
  constructor(webcomponentName) {
    super();
    this._whatTheHellisThis = 'Webcomponent Master';
    this._webcomponentName = webcomponentName || 'No name';
  }
}
