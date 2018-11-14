import { Router } from 'domr-framework';
import Home from './views/Home';
import Compo from './views/Compo';
import Experiments from './views/Experiments';

const routes = [
  {
    path: '/',
    view: Home,
    title: 'homepage',
    isDefault: true,
  },
  {
    path: '/compo',
    view: Compo,
    title: 'compo',
  },
  {
    path: '/exp/:expname',
    view: Experiments,
    title: 'experiments',
  },
];

const router = new Router(routes);

router.Start();
