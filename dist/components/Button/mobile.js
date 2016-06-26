'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactNative = require('react-native');

var _reactors = require('reactors');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (props) {
  var rootProps = _extends({}, props);
  var style = _extends({}, rootProps.style);
  var textStyle = {};
  if (style.color) {
    textStyle.color = style.color;
    delete style.color;
  }
  rootProps.style = style;

  var content = void 0;
  if (typeof props.children === 'string') {
    content = _react2.default.createElement(
      _reactors.Text,
      { style: textStyle },
      props.children
    );
  } else if (Array.isArray(props.chidlren)) {
    content = _react2.default.createElement(
      _reactors.View,
      null,
      props.chidlren
    );
  } else {
    content = props.children;
  }
  console.log({ rootProps: rootProps });
  return _react2.default.createElement(_reactors.View, null);
};