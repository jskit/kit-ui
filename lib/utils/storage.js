"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Storage = exports.localStorage = undefined;

var _stringify = require("babel-runtime/core-js/json/stringify");

var _stringify2 = _interopRequireDefault(_stringify);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var localStorage = exports.localStorage = window.localStorage;

var Storage = exports.Storage = function () {
  function Storage() {
    (0, _classCallCheck3.default)(this, Storage);
  }

  (0, _createClass3.default)(Storage, [{
    key: "get",
    value: function get(key) {
      return JSON.parse(localStorage.getItem(key));
    }
  }, {
    key: "set",
    value: function set(key, obj) {
      localStorage.setItem(key, (0, _stringify2.default)(obj));
    }
  }, {
    key: "remove",
    value: function remove(key) {
      localStorage.removeItem(key);
    }
  }, {
    key: "clear",
    value: function clear(key) {
      localStorage.removeItem(key);
    }
  }]);
  return Storage;
}();

var storage = new Storage();
exports.default = storage;