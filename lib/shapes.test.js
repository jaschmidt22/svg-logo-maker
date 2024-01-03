//import the shape file
const { Triangle, Circle, Square } = require("../lib/shape");

//test for rendering a triangle with a specified color
test("Example Test: Render Triangle with color", () => {
  const shape = new Triangle("blue");

  //confirm the rendered SVG matches the expectations of a blue triangle
  expect(shape.render()).toEqual(
    '<polygon points="150, 18 244, 182 56, 182" fill="blue" />'
  );
});

//test for rendering a circle with specified color
test("Example Test: Render Circle with color", () => {
  const shape = new Circle("red");

  //confirm the rendered SVG matches the expectations of a red circle
  expect(shape.render()).toEqual(
    '<circle cx="150" cy="100" r="75" fill="red" />'
  );
});

//test for rendering a square with specified color
test("Example Test: Render Square with color", () => {
  const shape = new Square("green");

  //confirm the rendered SVG matches the expectations of a green square
  expect(shape.render()).toEqual(
    '<rect x="56" y="18" width="188" height="164" fill="green" />'
  );
});
