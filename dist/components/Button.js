'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactors = require('reactors');

var _reactors2 = _interopRequireDefault(_reactors);

var _mobile = require('./Button/mobile');

var _mobile2 = _interopRequireDefault(_mobile);

var _web = require('./Button/web');

var _web2 = _interopRequireDefault(_web);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (props) {
  switch (_reactors2.default.platform) {
    default:
      throw new Error('Unsupported platform: ' + _reactors2.default.platform);
    case 'mobile':
      return (0, _mobile2.default)(props);
    case 'web':
    case 'desktop':
      return (0, _web2.default)(props);
  }
};