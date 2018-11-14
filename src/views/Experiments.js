import ExperimentsList from '../containers/ExperimentsList';

export default function (data) {
  const exp = data && data.metadata && data.metadata.expname ? data.metadata.expname : '';
  const container = ExperimentsList.filter(ex => ex.path === exp);
  const error = ExperimentsList.filter(ex => ex.error);
  const expContainer = container && container[0] ? container[0].view() : error[0].view();

  console.log(container);

  const wrapper = document.getElementById('wrapper');
  wrapper.innerHTML = expContainer;
  /*wrapper.appendChild(expContainer);*/
}
