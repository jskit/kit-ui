'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _assign = require('babel-runtime/core-js/object/assign');

var _assign2 = _interopRequireDefault(_assign);

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

var _packages = require('../packages');

var _packages2 = _interopRequireDefault(_packages);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var install = function install(Vue) {
  var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  /* istanbul ignore if */
  if (install.installed) return;
  // locale.use(opts.locale)
  // locale.i18n(opts.i18n)
  (0, _keys2.default)(_packages2.default).forEach(function (key) {
    var item = _packages2.default[key];
    if (item.name) {
      Vue.component(item.name, item);
    }
  });
  // packages.map(Component => {
  //   Vue.component(Component.name, Component)
  // })
  // Vue.prototype.$loading = packages.Loading
  // Vue.$toast = Vue.prototype.$toast = packages.Toast
};

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
};

var version = '1.0.0';

exports.default = (0, _assign2.default)({}, _packages2.default, {
  install: install,
  version: version
});
module.exports = exports['default'];