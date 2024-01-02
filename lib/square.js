const Shape = require("./shape");

class Square extends Shape {
  constructor(color = "black", sideLength = 100) {
    super(color);
    this.sideLength = sideLength;
  }

  setSideLength(sideLength) {
    this.sideLength = sideLength;
  }

  render() {
    const { color, sideLength } = this;
    return `<rect x="50" y="50" width="${sideLength}" height="${sideLength}" fill="${color}" />`;
  }
}

module.exports = Square;
