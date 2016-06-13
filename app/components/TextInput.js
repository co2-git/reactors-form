import React, {Component} from 'react';
import {TextInput} from 'react-native';
import Reactors from 'reactors';

export default class ReactorsTextInput extends Component {
  render() {
    switch (Reactors.platform) {
    default:
      throw new Error('Unsupported platform: ' + Reactors.platform);
    case 'mobile':
      return <TextInput {...this.props} />;
    case 'web':
    case 'desktop':
      return <input type="text" {...this.props} />;
    }
  }
}
