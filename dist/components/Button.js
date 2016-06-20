'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactNative = require('react-native');

var _reactors = require('reactors');

var _reactors2 = _interopRequireDefault(_reactors);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ReactorsButton = function (_Component) {
  _inherits(ReactorsButton, _Component);

  function ReactorsButton() {
    _classCallCheck(this, ReactorsButton);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(ReactorsButton).apply(this, arguments));
  }

  _createClass(ReactorsButton, [{
    key: 'render',
    value: function render() {
      switch (_reactors2.default.platform) {
        default:
          throw new Error('Unsupported platform: ' + _reactors2.default.platform);
        case 'mobile':
          return _react2.default.createElement(
            _reactNative.TouchableHighlight,
            _extends({}, this.props, {
              underlayColor: '#ccc'
            }),
            _react2.default.createElement(
              _reactors.View,
              null,
              this.props.children
            )
          );
        case 'web':
        case 'desktop':
          return _react2.default.createElement(
            'button',
            _extends({}, this.props, _reactors.Gesture.handlers(this.props), {
              style: [{ display: 'block' }, this.props.style]
            }),
            this.props.children
          );
      }
    }
  }]);

  return ReactorsButton;
}(_react.Component);

exports.default = ReactorsButton;