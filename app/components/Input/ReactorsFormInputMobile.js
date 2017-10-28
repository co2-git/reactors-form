// @flow
import React, {Component} from 'react';
import {TextInput} from 'react-native';

export default class ReactorsFormInputMobile extends Component {
  blur() {
    this.refs.__internal.blur();
  }

  focus() {
    this.refs.__internal.focus();
  }

  render() {
    const style = [
      // default style for RN so text input shows
      {borderWidth: 2, borderColor: '#444', height: 30},
      this.props.style,
    ];
    const mobileProps = {...this.props};
    if (mobileProps.onChange) {
      const onChange = mobileProps.onChange;
      mobileProps.onChangeText = onChange;
      delete mobileProps.onChange;
    }
    return (
      <TextInput
        ref="__internal"
        style={style}
        {...mobileProps}
        />
    );
  }
}
