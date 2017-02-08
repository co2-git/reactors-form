import React from 'react';
import Reactors from 'reactors';

export default function NumberInput(props) {
  switch (Reactors.platform) {

  default:
    throw new Error('Unsupported platform: ' + Reactors.platform);

  case 'mobile': {
    const NumberInputMobile = require('./NumberInputMobile').default;
    return (
      <NumberInputMobile {...props} />
    );
  }

  case 'web':
  case 'desktop': {
    const NumberInputWeb = require('./NumberInputWeb').default;
    return (
      <NumberInputWeb {...props} />
    );
  }

  }
}
