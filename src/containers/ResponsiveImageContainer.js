import '../components/WebcomponentDempApp';
import '../components/ResponsiveImage';
import photo from '../images/DSC_7865-edit-c.jpg';
import photo2 from '../images/DSC_1173-Edit-tagged.jpg';

export default function () {
  return `
    <webcomponent-demp-app style="display: block;">
      <responsive-image src="${photo}" max="800" min="200">
      </responsive-image>
      <responsive-image src="${photo2}" max="500" min="100">
      </responsive-image>
    </webcomponent-demp-app>
  `;
}
