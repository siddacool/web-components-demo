import NoExperimentsContainer from './NoExperimentsContainer';
import CalculatorContainer from './CalculatorContainer';
import ResponsiveImageContainer from './ResponsiveImageContainer';

const ExperimentsList = [
  {
    path: 'noexperiments',
    title: 'Noexperiments',
    view: NoExperimentsContainer,
    error: true,
  },
  {
    path: 'calculator',
    title: 'Imperfect Calculator',
    view: CalculatorContainer,
  },
  {
    path: 'responsiveimage',
    title: 'Responsive Image',
    view: ResponsiveImageContainer,
  },
];

export default ExperimentsList;
