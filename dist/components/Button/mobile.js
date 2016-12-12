'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Button;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactNative = require('react-native');

var _reactors = require('reactors');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Button(props) {
  var content = void 0;
  if (typeof props.children === 'string') {
    var _style = {};
    if (props.color) {
      _style.color = props.color;
    }
    if (props.size) {
      _style.fontSize = props.size;
    }
    if (props.bold) {
      _style.fontWeight = 'bold';
    }
    content = _react2.default.createElement(
      _reactNative.Text,
      { style: _style },
      props.children
    );
  }
  return _react2.default.createElement(
    _reactNative.TouchableHighlight,
    {
      style: [styleSheet.container, props.style],
      onPress: function onPress() {
        if (typeof props.onPress === 'function') {
          props.onPress();
        }
      },
      underlayColor: props.activeBackgroundColor || '#ccc'
    },
    content
  );
}

var styleSheet = _reactors.StyleSheet.create({
  container: {
    borderWidth: 2,
    borderColor: '#ccc',
    borderRadius: 6,
    padding: 8
  }
});