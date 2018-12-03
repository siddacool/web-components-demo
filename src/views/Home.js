import renderView from '../helpers/render-view';
import experimentsList from './experiments-list';

function makeListFromRoutes(route) {
  let toReturn = '';

  if (!route.error) {
    toReturn = `
      <li><a href="#/exp/${route.path}">${route.title}</a></li>
    `;
  }
  return toReturn;
}

export default function () {
  renderView(`
    <webcomponent-demp-app class="home-container">
      <div class="container">
        <h1>Experiments in WebComponent</h1>
        <p class="small">* Please enable ShadowDOM display in your browser for advanced element inspection</p>
      </div>
      <div class="container">
        <p>These components utilizes fullpage so click to check em'</p>
        <ul>
          ${experimentsList.map(r => makeListFromRoutes(r)).join('')}
        </ul>
      </div>
      <div class="container">
        <p>The little ones</p>
        <ul>
          <li>
            <section>Star Rate It</section>
            <star-rate-it value="2"></star-rate-it>
          </li>
        </ul>
      </div>
    </webcomponent-demp-app>
  `);
}
