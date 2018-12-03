import WebcomponentMaster from './WebcomponentMaster';

export default class extends WebcomponentMaster {
  constructor() {
    super('no-experiments');
  }

  connectedCallback() {
    this.innerHTML = `
      <style>
        span {
          color: red;
        }
      </style>
      <span>Error No Expriments found</span>
    `;
  }
}
