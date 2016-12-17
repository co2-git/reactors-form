import React from 'react';
import Reactors from 'reactors';

export default function TextInput(props) {
  switch (Reactors.platform) {
  default:
    throw new Error('Unsupported platform: ' + Reactors.platform);
  case 'mobile': {
    const TextInputMobile = require('./TextInputMobile').default;
    return (
      <TextInputMobile {...props} />
    );
  }
  case 'web':
  case 'desktop': {
    const TextInputWeb = require('./TextInputWeb').default;
    return (
      <TextInputWeb {...props} />
    );
  }
  }
}
