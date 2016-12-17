import React from 'react';
import Reactors from 'reactors';

export default function Button(props) {
  switch (Reactors.platform) {
  default:
    throw new Error('Unsupported platform: ' + Reactors.platform);
  case 'mobile': {
    const ButtonMobile = require('./ButtonMobile').default;
    return (
      <ButtonMobile {...props} />
    );
  }
  case 'web':
  case 'desktop': {
    const ButtonWeb = require('./ButtonWeb').default;
    return (
      <ButtonWeb {...props} />
    );
  }
  }
}
