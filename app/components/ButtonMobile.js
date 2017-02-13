import React from 'react';
import {
  Text,
  TouchableHighlight,
  View,
} from 'react-native';
import {StyleSheet} from 'reactors';

type $props = {
  children: string | React.Element | React.Element[],
  onPress?: Function,
  style?: Object | number,
  color?: string,
  size?: number,
  bold?: boolean,
  activeBackgroundColor?: string,
};

export default function ButtonMobile(props: $props) {
  let content;
  if (typeof props.children === 'string') {
    const style = {};
    if (props.color) {
      style.color = props.color;
    }
    if (props.size) {
      style.fontSize = props.size;
    }
    if (props.bold) {
      style.fontWeight = 'bold';
    }
    content = (<Text style={style}>{props.children}</Text>);
  } else {
    content = (<View>{content}</View>);
  }
  return (
    <TouchableHighlight
      style={[styleSheet.container, props.style]}
      onPress={() => {
        if (typeof props.onPress === 'function') {
          props.onPress();
        }
      }}
      underlayColor={props.activeBackgroundColor || '#ccc'}
      >
      {content}
    </TouchableHighlight>
  );
}

const styleSheet = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderColor: '#ccc',
    borderRadius: 6,
    padding: 8,
  },
});
