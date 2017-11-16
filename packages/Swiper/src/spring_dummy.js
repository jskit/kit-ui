import {
  requestAnimationFrame,
  cancelAnimationFrame,
  EventEmitter,
  extend,
} from './utils'

function SpringDummy(scroll, input, options) {
  const self = this
  const { wrapElem } = scroll
  /* eslint prefer-rest-params: 0 */
  EventEmitter.apply(this, arguments)

  this.scroll = scroll
  this.input = input
  this.input.on('move', this.movementReact.bind(this))
  this.wrapSize = {
    width: () => wrapElem.clientWidth,
    height: () => wrapElem.clientHieght,
  }

  this.options = extend({
    intervalTween: 3000,
    threshold: 20,
  }, options)

  if (this.scroll.options.autoPlay) {
    this.initMove()
  }

  this.on('bounceEnd', () => {
    if (self.scroll.options.autoPlay) {
      self.initMove()
    }

    self.input.undeaf()
  }).on('bounceStart', () => {
    self.input.deaf()
  })
}

SpringDummy.prototype = Object.create(new EventEmitter())
extend(SpringDummy.prototype, {

  clearTransition() {
    cancelAnimationFrame(this.transitionReq)
  },

  movementReact(pt, isEnd, e, extra) {
    if (isEnd) {
      this.launch(extra.orgDirection ? pt.x : 0)
    }
    this.clearMove()
  },

  launch(dist) {
    let addition = 0
    const self = this
    const direction = dist / Math.abs(dist)
    const w = self.wrapSize.width()
    const tempOffsetPage = Math.round(dist / w)
    const { offsetPage } = this.scroll.mCache

    // 翻到对应页
    addition = w * tempOffsetPage

    // addition为0是原位置
    if (addition === 0) {
      if (Math.abs(dist) > self.options.threshold) {
        // 翻到下一页
        addition = w * direction
      }
    }

    if (!self.scroll.options.loop) {
      if (offsetPage <= 0) {
        if (Math.abs(dist) > self.options.threshold && direction > 0) {
          addition = w * direction
        } else {
          addition = w * (tempOffsetPage - offsetPage)
        }
      }

      if (this.scroll.pages.length === 1) {
        addition = 0
      } else if (offsetPage >= this.scroll.pages.length - 1) {
        if (Math.abs(dist) > self.options.threshold && direction < 0) {
          addition = w * direction
        } else {
          addition = w * ((tempOffsetPage - offsetPage) + (this.scroll.pages.length - 1))
        }
      }
    }

    this.initTween(addition - dist, 150, 'bounce')
  },

  initTween(dist, duration, eventName) {
    if (dist === 0) {
      return
    }
    let elapse
    const self = this
    const startTime = new Date()

    this.cancelTween()
    this.emit(eventName + 'Start')

    function round() {
      elapse = new Date() - startTime
      if (elapse > duration) {
        self.emit(eventName, { x: dist }, true)
        self.emit(eventName + 'End')
        return
      }

      self.emit(eventName, { x: (dist / duration) * elapse }, false)
      self.tweenRid = requestAnimationFrame(round)
    }
    round()
  },

  cancelTween() {
    cancelAnimationFrame(this.tweenRid)
  },

  initMove() {
    const self = this
    const { scroll } = this
    const { intervalTween } = self.options

    this.clearMove()

    function round() {
      if ((scroll.currentIndex === scroll.pages.length - 1) && !scroll.options.loop) {
        self.initTween(-self.wrapSize.width() * (scroll.pages.length - 1), 200, 'autoPlay')
      } else {
        self.initTween(self.wrapSize.width(), 200, 'autoPlay')
      }
      self.moveTid = setTimeout(round, intervalTween)
    }
    self.moveTid = setTimeout(round, intervalTween)
  },

  clearMove() {
    clearTimeout(this.moveTid)
  },
})

export default SpringDummy

