import Reactors from 'reactors';
import renderMobile from './Button/mobile';
import renderWeb from './Button/web';

export default function ReactorsFormButtom(props) {
  console.log(Reactors.platform);
  switch (Reactors.platform) {
  default:
    throw new Error('Unsupported platform: ' + Reactors.platform);
  case 'mobile':
    return renderMobile(props);
  case 'web':
  case 'desktop':
    return renderWeb(props);
  }
}
