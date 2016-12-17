import React from 'react';
import {TextInput} from 'react-native';

export default function TextInputMobile (props) {
  const style = [
    {borderWidth: 2, borderColor: 'black', height: 30},
    props.style,
  ];
  const mobileProps = {...props};
  if (mobileProps.onChange) {
    const onChange = mobileProps.onChange;
    mobileProps.onChangeText = onChange;
    delete mobileProps.onChange;
  }
  return <TextInput style={style} {...mobileProps} />
}
