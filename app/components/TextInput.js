import React, {Component} from 'react';
import Reactors from 'reactors';

export default class ReactorsFormTextInput extends Component {
  blur() {
    this.refs.__internal.blur();
  }

  focus() {
    this.refs.__internal.focus();
  }

  render() {
    const props = Reactors.props(this.props);

    switch (Reactors.platform) {

    default:
      throw new Error('Unsupported platform: ' + Reactors.platform);

    case 'mobile': {
      const TextInputMobile = require('./TextInputMobile').default;
      return (
        <TextInputMobile ref="__internal" {...props} />
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
}
