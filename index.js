const inquirer = require("inquirer");
const fs = require("fs");
//const Triangle = require("./lib/Triangle");
//const Circle = require("./lib/Circle");
//const Square = require("./lib/Square");
const { Circle, Square, Triangle } = require("./lib/shape");

async function main() {
  // prompt users for input (color, shape, text)
  const userInput = await inquirer.prompt([
    {
      type: "input",
      name: "text",
      message: "Enter up to three characters:",
      validate: (input) => /^[A-Za-z0-9]{1,3}$/.test(input),
    },
    {
      type: "input",
      name: "shapeColor",
      message: "Enter shape color (keyword or hexadecimal):",
    },
    {
      type: "list",
      name: "shape",
      message: "Choose a shape:",
      choices: ["Triangle", "Circle", "Square"],
    },
    {
      type: "input",
      name: "textColor",
      message: "Enter text color (keyword or hexadecimal):",
    },
  ]);

  // Set the desired dimensions of the SVG
  const svgWidth = 300;
  const svgHeight = 200;

  // Based on user input, create the desired shape (Triangle, Circle, or Square)
  let shape;
  switch (userInput.shape) {
    case "Triangle":
      shape = new Triangle(userInput.shapeColor, userInput.text);
      break;
    case "Circle":
      shape = new Circle(userInput.shapeColor, userInput.text);
      break;
    case "Square":
      shape = new Square(userInput.shapeColor, userInput.text);
      break;
    default:
      console.log("Invalid shape selection");
      return;
  }

  // Generate the SVG string for the shape with the specified dimensions

  const svgString = `<svg xmlns="http://www.w3.org/2000/svg" width="${svgWidth}" height="${svgHeight}">
    ${shape.render()} <!-- Render the chosen shape -->
    <text x="150" y="125" font-size="60" text-anchor="middle" fill="${
      userInput.textColor
    }">${userInput.text}</text> <!-- Add text -->
  </svg>`;

  // Save the SVG string to a file
  fs.writeFileSync("logo.svg", svgString, "utf-8");
  console.log("Logo saved as logo.svg");
}

main().catch((error) => {
  console.error("Error:", error);
});
