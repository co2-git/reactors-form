'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = ReactorsFormWebButton;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactors = require('reactors');

var _reactors2 = _interopRequireDefault(_reactors);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ReactorsFormWebButton(props) {
  var webProps = _reactors2.default.props(props);
  return _react2.default.createElement(
    'button',
    _extends({}, webProps, {
      style: _extends({
        display: 'block',
        padding: 10
      }, webProps.style)
    }),
    props.children
  );
}