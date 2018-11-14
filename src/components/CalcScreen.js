import WebcomponentMaster from './WebcomponentMaster';

class CalcScreen extends WebcomponentMaster {
  constructor() {
    super('calc-screen');
  }
}

customElements.define('calc-screen', CalcScreen);
