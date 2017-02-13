import React, {Component} from 'react';
import omit from 'lodash/omit';
import {Gesture} from 'reactors';

export default class ReactorsFormTextInputDOM extends Component {
  static omit = [
    'autoCapitalize',
    'autoCorrect',
    'blurOnSubmit',
    'keyboardType',
    'multiline',
    'onChangeText',
    'placeholderTextColor',
    'throttle',
    'underlineColorAndroid',
  ];

  render() {
    const gestures = Gesture.handlers({
      ...this.props,
      onChange: (event) => {
        if (typeof this.props.onChange === 'function') {
          this.props.onChange(event.target.value);
        }
      },
    });
    const webProps = omit(gestures, ReactorsFormTextInputDOM.omit);
    return (
      <input
        type="text"
        {...webProps}
        style={{
          display: 'block',
          width: '100%',
          ...webProps.style,
        }}
        />
    );
  }
}
