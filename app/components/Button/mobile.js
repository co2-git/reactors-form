import React from 'react';
import {TouchableHighlight} from 'react-native';
import {View, Text} from 'reactors';

export default (props) => {
  const rootProps = {...props};
  let style = {...rootProps.style};
  let textStyle = {};
  if (style.color) {
    textStyle.color = style.color;
    delete style.color;
  }
  rootProps.style = style;

  let content;
  if (typeof props.children === 'string') {
    content = <Text style={textStyle}>{props.children}</Text>;
  } else if (Array.isArray(props.chidlren)) {
    content = <View>{props.chidlren}</View>;
  } else {
    content = props.children;
  }
  console.log({rootProps});
  return (
    <View>
      
    </View>
  );
};
