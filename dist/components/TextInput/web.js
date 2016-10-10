'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _reactors = require('reactors');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (props) {
  var webProps = _reactors.Gesture.handlers(_extends({}, props, {
    onChange: function onChange(event) {
      if (typeof props.onChange === 'function') {
        props.onChange(event.target.value);
      }
    }
  }));
  return _react2.default.createElement('input', _extends({
    type: 'text'
  }, webProps));
};