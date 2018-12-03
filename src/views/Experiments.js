import renderView from '../helpers/render-view';
import experimentsList from './experiments-list';

export default function (data) {
  const exp = data && data.metadata && data.metadata.expname ? data.metadata.expname : '';
  const container = experimentsList.filter(ex => ex.path === exp);
  const error = experimentsList.filter(ex => ex.error);
  const expContainer = container && container[0] ? container[0].view() : error[0].view();

  renderView(expContainer);
}
