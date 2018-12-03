import WebcomponentDempApp from './WebcomponentDempApp';
import NoExperiments from './NoExperiments';
import CalculatorElm from './CalculatorElm';
import ResponsiveImage from './ResponsiveImage';
import StarRateIt from './StarRateIt';

const dir = [
  {
    body: WebcomponentDempApp,
    name: 'webcomponent-demp-app',
  },
  {
    body: NoExperiments,
    name: 'no-experiments',
  },
  {
    body: CalculatorElm,
    name: 'calculator-elm',
  },
  {
    body: ResponsiveImage,
    name: 'responsive-image',
  },
  {
    body: StarRateIt,
    name: 'star-rate-it',
  },
];

dir.forEach((component) => {
  const { body, name } = component;
  customElements.define(name, body);
});
