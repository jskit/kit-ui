
/* eslint wrap-iife: 0 */
/* eslint no-var: 0 */
/* eslint no-underscore-dangle: 0 */
/* eslint semi-style: 0 */
/* eslint func-names: 0 */
/* eslint vars-on-top: 0 */
var _hmt = _hmt || []
;(function () {
  window._hmt = window._hmt || _hmt
  var hm = document.createElement('script')
  hm.src = 'https://hm.baidu.com/hm.js?97185224affb9782323dfcb8c919d612'
  var s = document.getElementsByTagName('script')[0]
  s.parentNode.insertBefore(hm, s)
  if (window.location.origin !== 'https://devnode.cn') {
    _hmt.push(['_setAutoPageview', false])
  }
})()

export default {
  googleAnalyticsId: 'UA-XXXXX-X',
  baiduAnalyticsId: 'UA-XXXXX-X',
}
