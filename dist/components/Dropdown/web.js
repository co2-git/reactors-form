'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = DropdownWeb;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _reactors = require('reactors');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function DropdownWeb(props) {
  var handlers = _reactors.Gesture.handlers(_extends({}, props, {
    onChange: function onChange(value) {
      if (typeof props.onChange === 'function') {
        props.onChange(value);
      }
    }
  }));
  var webProps = _lodash2.default.omit(handlers, ['data']);
  var options = props.data.map(function (d) {
    return _react2.default.createElement(
      'option',
      { value: d.key, key: d.key },
      d.label
    );
  });
  return _react2.default.createElement(
    'select',
    webProps,
    options
  );
}