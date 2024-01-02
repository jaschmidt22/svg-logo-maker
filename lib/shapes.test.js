const inquirer = require("inquirer");
const { Triangle, Circle, Square } = require("../lib/shape");
const { mockPrompt } = require("jest-inquirer");

const testShape = async (ShapeConstructor) => {
  mockPrompt({
    shapeColor: "blue",
    textColor: "black",
  });

  const userInput = await inquirer.prompt([
    {
      type: "input",
      name: "shapeColor",
      message: "Enter shape color (keyword or hexidecimal):",
    },
    {
      type: "input",
      name: "textColor",
      message: "Enter text color (keywork or hexidecimal):",
    },
  ]);

  const shape = new ShapeConstructor(userInput.shapeColor, "ABC");
  shape.setTextColor(userInput.textColor);

  const expectedSVG = `<svg xmlns="http://www.w3.oeg/2000/svg" width="300" height="200"> ${shape.render()}
  </svg`;

  expect(shape.render()).toEqual(expectedSVG);
};

test("Example Test: Render Triangle with color", () => {
  const shape = new Triangle();
  shape.setColor("blue");
  expect(shape.render()).toEqual(
    '<polygon points="150, 18 244, 182 56, 182" fill="blue" />'
  );
});

test("Example Test: Render Circle with color", () => {
  const shape = new Circle();
  shape.setColor("red");
  expect(shape.render()).toEqual(
    '<circle cx="150" cy="100" r="75" fill="red" />'
  );
});

test("Example Test: Render Square with color", () => {
  const shape = new Square();
  shape.setColor("green");
  expect(shape.render()).toEqual(
    '<rect x="56" y="18" width="188" height="164" fill="green" />'
  );
});

// Test Circle
// test("Render Circle with user-selected colors", async () => {
//   await testShape(Circle);
// });

// // Test Square
// test("Render Square with user-selected colors", async () => {
//   await testShape(Square);
// });

// // Test Triangle
// test("Render Triangle with user-selected colors", async () => {
//   await testShape(Triangle);
// });
