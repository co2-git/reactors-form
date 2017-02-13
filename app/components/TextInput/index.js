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

    if (Reactors.isMobile()) {
      const ReactorsFormTextInputMobile = require('./Mobile').default;
      return (
        <ReactorsFormTextInputMobile ref="__internal" {...props} />
      );
    }

    if (Reactors.isDOM()) {
      const ReactorsFormTextInputDOM = require('./DOM').default;
      return (
        <ReactorsFormTextInputDOM ref="__internal" {...props} />
      );
    }

    throw new Error('Unsupported platform: ' + Reactors.platform);
  }
}
