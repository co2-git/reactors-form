import React, {Component} from 'react';
import {TextInput} from 'react-native';

export default class ReactorsFormTextInputMobile extends Component {
  blur() {
    this.refs.__internal.blur();
  }

  focus() {
    this.refs.__internal.focus();
  }

  render() {
    const style = [
      {borderWidth: 2, borderColor: 'black', height: 30},
      this.props.style,
    ];
    const mobileProps = {...this.props};
    if (mobileProps.onChange) {
      const onChange = mobileProps.onChange;
      mobileProps.onChangeText = onChange;
      delete mobileProps.onChange;
    }
    return <TextInput ref="__internal" style={style} {...mobileProps} />;
  }
}
