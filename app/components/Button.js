import Reactors from 'reactors';
import renderMobile from './Button/mobile';
import renderDOM from './Button/dom';

export default (props) => {
  switch (Reactors.platform) {
  default:
    throw new Error('Unsupported platform: ' + Reactors.platform);
  case 'mobile':
    return renderMobile(props);
  case 'web':
  case 'desktop':
    return renderDOM(props);
  }
}
