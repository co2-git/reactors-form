import React from 'react';
import {TextInput} from 'react-native';
import Reactors from 'reactors';

export default function ReactorsFormNumberInputMobile (props) {
  const style = [
    {borderWidth: 2, borderColor: 'black', height: 30},
    props.style,
  ];

  const mobileProps = Reactors.props({...props});

  if (mobileProps.onChange) {
    const onChange = mobileProps.onChange;
    mobileProps.onChangeText = onChange;
    delete mobileProps.onChange;
  }

  if (('value') in mobileProps) {
    mobileProps.value = String(mobileProps.value);
  }

  return (
    <TextInput
      style={style}
      {...mobileProps}
      />
  );
}
