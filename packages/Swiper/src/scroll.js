import { EventEmitter, extend } from './utils'

const setElementsStyles = (elems, styles) => {
  Array.prototype.forEach.call(elems, (item) => {
    extend(item.style, styles)
  })
}

function Scroll(wrapElem, options) {
  /* eslint prefer-rest-params: 0 */
  EventEmitter.apply(this, arguments)
  this.wrapElem = wrapElem
  this.wrapSize = {
    width: () => wrapElem.clientWidth,
    height: () => wrapElem.clientHeight,
  }

  this.options = extend({}, {
    loop: true,
    autoPlay: false,
    startIndex: 0,
  }, options)

  /* eslint prefer-spread: 0 */
  this.init.apply(this, arguments)
}

Scroll.prototype = Object.create(new EventEmitter())
extend(Scroll.prototype, {
  init() {
    this.update()
  },

  getCurrentDist() {
    return this.mCache.currentDist
  },

  update() {
    const oldPages = this.pages
    this.pages = this.wrapElem.querySelectorAll('.kit-swiper-item')
    if (oldPages && oldPages.length === this.pages.length) {
      const isSame = Array.prototype.every.call(this.pages, (elem, index) => {
        return this.pages[index] === oldPages[index]
      })
      if (isSame) {
        return
      }
    }
    const defaultStyle = {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
    }
    setElementsStyles(this.pages, defaultStyle)
    this.mCache = {
      dist: 0,
      offsetPage: 0,
    }

    this.setCurrentPage(0)
    this.movePage(this.options.startIndex * this.wrapSize.width(), true)
  },

  renderPage(dist = 0, currentOffsetPage = 0) {
    const wrapWidth = this.wrapSize.width()
    const offset = (currentOffsetPage * wrapWidth) - dist
    const leftOffset = offset - wrapWidth
    const rightOffset = offset + wrapWidth

    const leftPage = this.pages[this.mapLoopPage(currentOffsetPage - 1)]
    if (leftPage) {
      if (Math.abs(leftOffset) <= wrapWidth) {
        leftPage.style['-webkit-transform'] = 'translate3d(' + leftOffset + 'px, 0, 0)'
      } else if (this.pages.length > 2) {
        leftPage.style['-webkit-transform'] = 'translate3d(-9999px, 0, 0)'
      }
    }

    const rightPage = this.pages[this.mapLoopPage(currentOffsetPage + 1)]
    if (rightPage) {
      if (Math.abs(rightOffset) <= wrapWidth) {
        rightPage.style['-webkit-transform'] = 'translate3d(' + rightOffset + 'px, 0, 0)'
      } else if (this.pages.length > 2) {
        rightPage.style['-webkit-transform'] = 'translate3d(-9999px, 0, 0)'
      }
    }

    const page = this.getCurrentPage()
    if (page) {
      page.style['-webkit-transform'] = 'translate3d(' + offset + 'px, 0, 0)'
      page.style.display = 'block'
    }
  },

  movePage(dist, isEnd) {
    this.mCache.currentDist = dist + this.mCache.dist
    if (isEnd) {
      this.mCache.dist += dist
    }

    const currentOffsetPage = Math.round(this.mCache.currentDist / this.wrapSize.width()) || 0

    if (currentOffsetPage !== this.mCache.offsetPage) {
      this.setCurrentPage(currentOffsetPage)

      // 翻页
      this.emit(
        'pageChangeEnd', this.getCurrentPage()
        , this.currentIndex, this.mCache.offsetPage
      )
      this.mCache.offsetPage = currentOffsetPage
    }

    this.renderPage(this.mCache.currentDist, currentOffsetPage)
  },

  getCurrentPage() {
    return this.pages[this.currentIndex]
  },

  mapLoopPage(num) {
    if (this.options.loop) {
      const direction = num < 0 ? -1 : 1
      const l = this.pages.length
      return Math.abs(l + ((direction * Math.abs(num)) % l)) % l
    }
    if (num >= this.pages.length || num < 0) {
      return this.pages.length
    }
    return num
  },

  setCurrentPage(num) {
    this.currentIndex = this.mapLoopPage(num)
  },
})

export default Scroll
