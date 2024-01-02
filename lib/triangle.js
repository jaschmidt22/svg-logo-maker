const Shape = require("./shape");

class Triangle extends Shape {
  constructor(color = "black") {
    super(color);
  }

  setColor(color) {
    this.color = color;
  }

  render() {
    const { color } = this;
    return `<polygon points="150,18 244,182 56,182" fill="${color}" />`;
  }
}

module.exports = Triangle;
