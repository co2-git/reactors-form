'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Dropdown;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactors = require('reactors');

var _reactors2 = _interopRequireDefault(_reactors);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _web = require('./Dropdown/web');

var _web2 = _interopRequireDefault(_web);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Dropdown(props) {
  switch (_reactors2.default.platform) {
    default:
      throw new Error('Unsupported platform: ' + _reactors2.default.platform);
    // case 'mobile':
    //   return renderMobile(props);
    case 'web':
    case 'desktop':
      return (0, _web2.default)(props);
  }
}
// import renderMobile from './Dropdown/mobile';