import React from 'react';
import Reactors from 'reactors';
import _ from 'lodash';
import renderMobile from './TextInput/mobile';
import renderWeb from './TextInput/web';

export default (props) => {
  switch (Reactors.platform) {
  default:
    throw new Error('Unsupported platform: ' + Reactors.platform);
  case 'mobile':
    return renderMobile(props);
  case 'web':
  case 'desktop':
    return renderWeb(props);
  }
};
