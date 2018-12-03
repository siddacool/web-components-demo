import NoExperiments from './NoExperiments';
import Calculator from './Calculator';
import ResponsiveImage from './ResponsiveImage';

const experimentsList = [
  {
    path: 'noexperiments',
    title: 'Noexperiments',
    view: NoExperiments,
    error: true,
  },
  {
    path: 'calculator',
    title: 'Imperfect Calculator',
    view: Calculator,
  },
  {
    path: 'responsiveimage',
    title: 'Responsive Image',
    view: ResponsiveImage,
  },
];

export default experimentsList;
