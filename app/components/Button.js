import React, {Component} from 'react';
import {TouchableHighlight} from 'react-native';
import Reactors, {Gesture, View} from 'reactors';

export default class ReactorsButton extends Component {
  render() {
    switch (Reactors.platform) {
    default:
      throw new Error('Unsupported platform: ' + Reactors.platform);
    case 'mobile':
      return (
        <TouchableHighlight
          {...this.props}
          underlayColor="#ccc"
          >
          <View>
            {this.props.children}
          </View>
        </TouchableHighlight>
      );
    case 'web':
    case 'desktop':
      return (
        <button
          {...this.props}
          {...Gesture.handlers(this.props)}
          style={[
            {display: 'block'},
            this.props.style,
          ]}
          >
          {this.props.children}
        </button>
      );
    }
  }
}
