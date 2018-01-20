import React, {Component} from 'react';
import {
  Text,
  TouchableHighlight,
  View,
} from 'react-native';
import {StyleSheet} from 'reactors';

type $props = {
  activeBackgroundColor?: string,
  align?: 'left' | 'center' | 'right',
  bold?: boolean,
  children: string | React.Element | React.Element[],
  color?: string,
  onPress?: Function,
  size?: number,
  style?: Object | number,
};

export default class ButtonMobile extends Component {
  props: $props;
  render() {
    const content = React.Children.toArray(this.props.children).map((child) => {
      if (typeof child === 'string') {
        const style = {};
        if (this.props.color) {
          style.color = this.props.color;
        }
        if (this.props.size) {
          style.fontSize = this.props.size;
        }
        if (this.props.bold) {
          style.fontWeight = 'bold';
        }
        if (this.props.align) {
          style.textAlign = this.props.align;
        }
        return <Text style={style}>{child}</Text>;
      }
      return child;
    });
    return (
      <TouchableHighlight
        style={[styleSheet.container, this.props.style]}
        onPress={() => {
          if (typeof this.props.onPress === 'function') {
            this.props.onPress();
          }
        }}
        underlayColor={this.props.activeBackgroundColor || '#ccc'}
        >
        <View>
          {content}
        </View>
      </TouchableHighlight>
    );
  }
}

const styleSheet = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderColor: '#ccc',
    borderRadius: 6,
    padding: 8,
  },
});
