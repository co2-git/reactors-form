"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (props) {
  var webProps = _extends({}, props);
  var _onChange = webProps.onChange;
  delete webProps.onChange;
  return _react2.default.createElement("input", _extends({
    type: "text"
  }, webProps, {
    onChange: function onChange(event) {
      return _onChange(event.target.value);
    }
  }));
};