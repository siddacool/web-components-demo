class BlaWebcomponent extends HTMLElement {
  constructor() {
    super();
    this.defaultMarkup = `
      <div>bla, bla, bla</div>
    `;
    this.markup = '';
  }

  connectedCallback() {
    if (this.markup && this.markup !== '') {
      this.innerHTML = `
        <div>${this.markup.userId}</div>
        <div>${this.markup.title}</div>
        <div>${this.markup.completed}</div>
      `;
    } else {
      this.innerHTML = this.defaultMarkup;
    }

    this.addEventListener('click', (e) => {
      console.log(e.target);
    });
  }
}

customElements.define('bla-bla', BlaWebcomponent);
