const PopupContext = {
  idSeed: 1,
  zIndex: 2000,
  instances: {},
  stack: [],

  plusKeyByOne(key) {
    /* eslint no-plusplus: 0 */
    return this[key]++
  },

  get top() {
    return this.stack[this.stack.length - 1]
  },
}

export default PopupContext

