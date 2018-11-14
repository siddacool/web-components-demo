import NoExperimentsContainer from './NoExperimentsContainer';
import CalculatorContainer from './CalculatorContainer';

const ExperimentsList = [
  {
    path: 'noexperiments',
    title: 'Noexperiments',
    view: NoExperimentsContainer,
    error: true,
  },
  {
    path: 'calculator',
    title: 'Calculator',
    view: CalculatorContainer,
  },
];

export default ExperimentsList;
