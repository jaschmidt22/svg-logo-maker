const inquirer = require("inquirer");
const fs = require("fs");
const { Circle, Square, Triangle } = require("./lib/shape"); //import shape file

async function main() {
  //prompt users for color, shape and text)
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

  //set height and width of SVG
  const svgWidth = 300;
  const svgHeight = 200;

  //based on user input -- create the desired shape (triangle, circle or square)
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

  //create the SVG string for the shape with the specified dimensions

  const svgString = `<svg xmlns="http://www.w3.org/2000/svg" width="${svgWidth}" height="${svgHeight}">
    ${shape.render()} <!-- Render the chosen shape -->
    <text x="150" y="125" font-size="60" text-anchor="middle" fill="${
      userInput.textColor
    }">${userInput.text}</text> <!-- Add text -->
  </svg>`;

  //save SVG string to a file
  fs.writeFileSync("logo.svg", svgString, "utf-8");
  console.log("Logo saved as logo.svg");
}

main().catch((error) => {
  console.error("Error:", error);
});
