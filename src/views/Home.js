import ExperimentsListContainer from '../containers/ExperimentsListContainer';

export default function () {
  const experimentsListContainer = ExperimentsListContainer();

  const wrapper = document.getElementById('wrapper');
  wrapper.innerHTML = experimentsListContainer;
}
