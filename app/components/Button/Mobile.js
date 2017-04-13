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
    let content;
    if (typeof this.props.children === 'string') {
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
      content = (<Text style={style}>{this.props.children}</Text>);
    } else {
      content = (
        <View>
          {this.props.children}
        </View>
      );
    }
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
        {content}
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
