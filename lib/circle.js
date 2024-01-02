const Shape = require("./shape");

class Circle extends Shape {
  constructor(color = "black", radius = 50) {
    super(color);
    this.radius = radius;
  }

  setRadius(radius) {
    this.radius = radius;
  }

  render() {
    const { color, radius } = this;
    return `<circle cx="150" cy="150" r="${radius}" fill="${color}" />`;
  }
}

module.exports = Circle;
