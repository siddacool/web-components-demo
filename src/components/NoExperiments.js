import WebcomponentMaster from './WebcomponentMaster';

class NoExperiments extends WebcomponentMaster {
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

customElements.define('no-experiments', NoExperiments);
