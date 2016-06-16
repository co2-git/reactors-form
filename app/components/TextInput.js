import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {TextInput} from 'react-native';
import Reactors from 'reactors';
import _ from 'lodash';

export default class ReactorsTextInput extends Component {
  render() {
    switch (Reactors.platform) {
    default:
      throw new Error('Unsupported platform: ' + Reactors.platform);
    case 'mobile':
      return <TextInput {...this.props} />;
    case 'web':
    case 'desktop':
      return this._renderWeb();
    }
  }

  _renderWeb() {
    const props = _.omit(this.props, ['onChange']);

    return <input
      type="text"
      {...props}
      ref="textInput"
      onKeyUp={this.onWebChange}
      />;
  }

  getWebValue() {
    return ReactDOM.findDOMNode(this.refs.textInput).value;
  }

  onWebChange = () => {
    if (typeof this.props.onChange === 'function') {
      this.props.onChange(this.getWebValue());
    }
  };
}
