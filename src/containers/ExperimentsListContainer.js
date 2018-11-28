import '../components/WebcomponentDempApp';
import ExperimentsList from './ExperimentsList';

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
  return `
    <webcomponent-demp-app class="home-container">
      <div class="container">
        <h1>Experiments in WebComponent</h1>
        <p class="small">* Please enable ShadowDOM display in your browser for advanced element inspection</p>
      </div>
      <div class="container">
        <p>Here is a list of Experiments created to demonstrate the power of webComponents.</p>
        <ul>
          ${ExperimentsList.map(r => makeListFromRoutes(r)).join('')}
        </ul>
      </div>
    </webcomponent-demp-app>
  `;
}
