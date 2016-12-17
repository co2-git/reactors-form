import React from 'react';
import Reactors from 'reactors';
import _ from 'lodash';

export default function Dropdown(props) {
  switch (Reactors.platform) {
  default:
    throw new Error('Unsupported platform: ' + Reactors.platform);
  case 'mobile': {
    const DropdownMobile = require('./DropdownMobile').default;
    return (
      <DropdownMobile {...props} />
    );
  }
  case 'web':
  case 'desktop': {
    const DropdownWeb = require('./DropdownWeb').default;
    return (
      <DropdownWeb {...props} />
    );
  }
  }
}
