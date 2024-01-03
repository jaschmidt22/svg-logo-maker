//define the base class of shape
class Shape {
  constructor(color) {
    this.color = color;
  }

  //all child classes must use the render method
  render() {
    throw new Error("The render method must be used in child classes.");
  }
}

//define the triangle class that extends shape
class Triangle extends Shape {
  render() {
    //return an SVG representation of a triangle with the specified color
    return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`;
  }
}

//define the circle class that extends shape
class Circle extends Shape {
  render() {
    //return an SVG representation of a circle with the specified color
    return `<circle cx="150" cy="100" r="75" fill="${this.color}" />`;
  }
}

//define the square class that extends shape
class Square extends Shape {
  render() {
    //return an SVG representation of a square with the specified color
    return `<rect x="56" y="18" width="188" height="164" fill="${this.color}" />`;
  }
}

//export the use of triangle, circle and sqaure classes
module.exports = { Triangle, Circle, Square };
