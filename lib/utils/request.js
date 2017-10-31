'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _kitFetch = require('kit-fetch');

var _kitFetch2 = _interopRequireDefault(_kitFetch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// 此文件建议跟着项目走，可随时变更修改、扩展定制

require('es6-promise').polyfill();


// function parseJSON(response) {
//   return response.json()
// }

function checkStatus(response) {
  // response.status >= 200 && response.status < 300
  if (response.ok) {
    return response;
  }

  var status = response.status,
      statusText = response.statusText;

  var error = new Error(statusText);
  error.response = response;
  error.status = status;
  error.statusText = statusText;
  // 不能给 error.message 字段赋值，这是只读属性，参见[Error对象](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Error)
  throw error;
}

/**
 * Requests a URL, returning a promise.
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 * @return {object}           An object containing either "data" or "err"
 */

exports.default = function () {
  var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(url, options) {
    var response, data;
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return (0, _kitFetch2.default)(url, options);

          case 2:
            response = _context.sent;


            checkStatus(response);

            _context.next = 6;
            return response.json();

          case 6:
            data = _context.sent;
            return _context.abrupt('return', data);

          case 8:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  function request(_x, _x2) {
    return _ref.apply(this, arguments);
  }

  return request;
}();

module.exports = exports['default'];