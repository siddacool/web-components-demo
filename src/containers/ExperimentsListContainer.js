import Logo from '../components/Logo';
import ExperimentsList from './ExperimentsList';
import { title } from '../project.json';

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
    <div class="home-container">
      ${Logo()}
      <h2>This is</h3>
      <h1>${title}</h1>
      <ul>
        ${ExperimentsList.map(r => makeListFromRoutes(r)).join('')}
      </ul>
    </div>
  `;
}
