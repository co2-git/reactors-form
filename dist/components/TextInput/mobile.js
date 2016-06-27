'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactNative = require('react-native');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (props) {
  var style = [{ borderWidth: 2, borderColor: 'black', height: 30 }, props.style];
  var mobileProps = _extends({}, props);
  if (mobileProps.onChange) {
    var onChange = mobileProps.onChange;
    mobileProps.onChangeText = onChange;
    delete mobileProps.onChange;
  }
  return _react2.default.createElement(_reactNative.TextInput, _extends({ style: style }, mobileProps));
};