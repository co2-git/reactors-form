import React, {Component} from 'react';
import Reactors from 'reactors';

export default class ReactorsFormInput extends Component {

  input: ReactComponent;

  blur() {
    this.input.blur();
  }

  focus() {
    this.input.focus();
  }

  validate = () => this.input.validate();

  render() {
    const props = Reactors.props(this.props);

    if (Reactors.isMobile()) {
      const ReactorsFormInputMobile = require('./ReactorsFormInputMobile').default;
      return (
        <ReactorsFormInputMobile
          ref={(input) =>{
            this.input = input;
          }}
          {...props}
        />
      );
    }

    if (Reactors.isWeb()) {
      const ReactorsFormInputWeb = require('./ReactorsFormInputWeb').default;
      return (
        <ReactorsFormInputWeb
          ref={(input) =>{
            this.input = input;
          }}
          {...props}
        />
      );
    }

    if (Reactors.isDesktop()) {
      const ReactorsFormInputDesktop = require('./ReactorsFormInputDesktop').default;
      return (
        <ReactorsFormInputDesktop
          ref={(input) =>{
            this.input = input;
          }}
          {...props}
        />
      );
    }

    throw new Error(`Unsupported platform: ${Reactors.platform}`);
  }
}
