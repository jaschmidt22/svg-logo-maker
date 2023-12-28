class Shape {
  constructor(color) {
    this.color = color;
  }

  render() {
    throw new Error("The render method must be implemented in child classes.");
  }
}

module.exports = Shape;
// class Triangle extends Shape {
//   render() {
//     return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`;
//   }
// }

// class Circle extends Shape {
//   render() {
//     return `<circle cx="150" cy="100" r="75" fill="${this.color}" />`;
//   }
// }

// class Square extends Shape {
//   render() {
//     return `<rect x="56" y="18" width="188" height="164" fill="${this.color}" />`;
//   }
// }

// module.exports = { Triangle, Circle, Square };
