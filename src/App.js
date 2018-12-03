import { Router } from 'domr-framework';
import Home from './views/Home';
import Experiments from './views/Experiments';

const routes = [
  {
    path: '/',
    view: Home,
    title: 'homepage',
    isDefault: true,
  },
  {
    path: '/exp/:expname',
    view: Experiments,
    title: 'experiments',
  },
];

const router = new Router(routes);

router.Start();
