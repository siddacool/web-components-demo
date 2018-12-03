import WebcomponentMaster from './WebcomponentMaster';

export default class extends WebcomponentMaster {
  constructor() {
    super('star-rate-it');
    this.state = {
      rating: 0,
    };

    const shadowRoot = this.attachShadow({ mode: 'open' });

    const style = `
      :host {
        display: inline-block;
      }

      * {
        box-sizing: border-box;
      }

      .star {
        display: inline-block;
        text-decoration: none;
      }

      .star svg {
        fill: #bcbcbc;
      }

      .star.star--filled svg {
        fill: #f7b611;
      }

      .star.star--border.hover svg {
        fill: #f7b611;
      }
    `;

    shadowRoot.innerHTML = `
      <style>${style}</style>
      <div class="container"></div>
    `;

    this.makeStars();
  }

  getShadowElm() {
    return this.shadowRoot;
  }

  modifyContainer(details) {
    const target = this.getShadowElm();
    const container = target.querySelector('.container');

    container.innerHTML = details;
  }

  makeStars(number) {
    const starFilled = `
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 .288l2.833 8.718h9.167l-7.417 5.389 2.833 8.718-7.416-5.388-7.417 5.388 2.833-8.718-7.416-5.389h9.167z"/></svg>
    `;
    const starBorder = `
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 6.76l1.379 4.246h4.465l-3.612 2.625 1.379 4.246-3.611-2.625-3.612 2.625 1.379-4.246-3.612-2.625h4.465l1.38-4.246zm0-6.472l-2.833 8.718h-9.167l7.416 5.389-2.833 8.718 7.417-5.388 7.416 5.388-2.833-8.718 7.417-5.389h-9.167l-2.833-8.718z"/></svg>
    `;
    const starArr = [];

    for (let i = 0; i < 5; i++) {
      if (number && (number - 1) >= i) {
        starArr.push(`
          <a href="#" class="star star--filled" pos="${i + 1}">
            ${starFilled}
          </a>
        `);
      } else {
        starArr.push(`
          <a href="#" class="star star--border" pos="${i + 1}">
            ${starBorder}
          </a>
        `);
      }
    }

    this.modifyContainer(starArr.join(''));
  }

  getRating() {
    const { rating } = this.state;
    return rating;
  }

  changeRating(rating) {
    this.state.rating = rating;
  }

  updateImage(value) {
    this.changeRating(JSON.parse(value));
    this.makeStars(JSON.parse(value));
  }

  static get observedAttributes() {
    return ['value'];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === 'value') {
      this.updateImage(newValue);
    }
  }

  connectedCallback() {
    this.addEventListener('click', (e) => {
      e.preventDefault();

      if (e.target) {
        const target = this.shadowRoot.activeElement;

        if (target && target.classList.contains('star')) {
          const parent = target.parentElement;
          const pos = JSON.parse(target.getAttribute('pos'));
          const isFilled = target.classList.contains('star--filled');
          const filledStars = parent.querySelectorAll('.star--filled');
          let startCount = pos;

          if (pos === 1 && isFilled && filledStars.length < 2) {
            startCount = null;
          }

          this.updateImage(startCount);
        }
      }
    });

    this.addEventListener('mouseout', () => {
      const stars = this.shadowRoot.querySelectorAll('.star');

      stars.forEach((star) => {
        star.classList.remove('hover');
      });
    });

    this.addEventListener('mousemove', (e) => {
      const { path } = e;
      let anchor = '';

      path.forEach((p) => {
        if (p.classList && p.classList.contains('star')) {
          anchor = p;
        }
      });

      if (anchor) {
        const pos = JSON.parse(anchor.getAttribute('pos'));
        const parent = anchor.parentElement;
        const emptyStars = parent.querySelectorAll('.star');

        if (emptyStars && emptyStars.length) {
          emptyStars.forEach((star) => {
            const starPos = JSON.parse(star.getAttribute('pos'));

            if (starPos <= pos) {
              star.classList.add('hover');
            } else {
              star.classList.remove('hover');
            }
          });
        }
      }
    });
  }
}
