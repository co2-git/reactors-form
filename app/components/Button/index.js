import React, {Component} from 'react';
import Reactors from 'reactors';

export default class ReactorsFormButton extends Component {
  blur() {
    this.refs.__internal.blur();
  }

  focus() {
    this.refs.__internal.focus();
  }

  render() {
    const props = Reactors.props(this.props);

    if (Reactors.isMobile()) {
      const ReactorsFormButtonMobile = require('./Mobile').default;
      return (
        <ReactorsFormButtonMobile ref="__internal" {...props} />
      );
    }

    if (Reactors.isDOM()) {
      const ReactorsFormButtonDOM = require('./DOM').default;
      return (
        <ReactorsFormButtonDOM ref="__internal" {...props} />
      );
    }

    throw new Error('Unsupported platform: ' + Reactors.platform);
  }
}
