class Rectangle {
  constructor(w, h) {
    if (
      w <= 0 ||
      h <= 0 ||
      typeof w !== 'number' ||
      typeof h !== 'number' ||
      !Number.isInteger(w) ||
      !Number.isInteger(h)
    ) {
      return {}
    }

    this.width = w
    this.height = h
  }
}

module.exports = Rectangle
