const gridContainer = document.querySelector(".gridContainer");
const createGridButton = document.querySelector(".createGrid");
const eraserButton = document.querySelector("#eraser");
const clearButton = document.querySelector("#clear");
const rainbowButton = document.querySelector("#rainbow");
const customButton = document.querySelector("#custom");
const colorPicker = document.querySelector("#customColor");
const gridInput = document.querySelector("#gridSize");
const blackButton = document.querySelector("#black");

/**
 * An array representing hexadecimal characters.
 * Contains numeric values from 0 to 9 and string representations
 * of uppercase letters from A to F, which together are used
 * in hexadecimal numeral systems.
 *
 * @type {(number|string)[]}
 */
const hexCharacters = [
  0,
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
];

/**
 * Retrieves a character from the hexCharacters string based on the provided index.
 *
 * @param {number} index - The position in the hexCharacters string to retrieve the character from.
 * @returns {string} The character at the specified index in the hexCharacters string.
 */
const getCharacter = (index) => hexCharacters[index];

/**
 * Generates a random hexadecimal color code.
 * The color code is in the format '#RRGGBB', where RR, GG, and BB are hexadecimal values.
 *
 * @return {string} A randomly generated hexadecimal color string.
 */
function getRandomColor() {
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += getCharacter(Math.floor(Math.random() * 16));
  }
  return color;
}

/**
 * Creates default 16x16 grid on page load
 */
document.addEventListener("DOMContentLoaded", () => {
  createGrid(16);
});

/**
 * Creates a grid layout inside the grid container with the specified size.
 * The grid will be displayed as a flexible square layout with equally sized cells.
 *
 * @param {number} size - The number of rows and columns for the grid (e.g., a value of 4 generates a 4x4 grid).
 * @return {void} This function does not return anything. It modifies the DOM by populating the grid container with cells.
 */
function createGrid(size) {
  // Reset the grid
  gridContainer.innerHTML = "";

  gridContainer.style.flexWrap = "wrap";
  gridContainer.style.display = "flex";

  const maxCellSize = 20;

  const containerSize = Math.min(size * maxCellSize, 1000);
  gridContainer.style.width = containerSize + "px";
  gridContainer.style.height = containerSize + "px";

  const cellSize = containerSize / size;

  for (let i = 0; i < size * size; i++) {
    let gridCell = document.createElement("div");
    gridCell.classList.add("gridCell");
    gridCell.style.width = cellSize + "px";
    gridCell.style.height = cellSize + "px";
    gridContainer.appendChild(gridCell);
  }
}

createGridButton.addEventListener("click", () => {
  gridContainer.innerHTML = "";
  let gridSize = gridInput.value;

  if (gridSize > 0 && gridSize <= 100) {
    createGrid(gridSize);
  } else {
    alert("Please enter a valid number between 1 and 100");
  }
});

eraserButton.addEventListener("click", () => {
  const erase = document.querySelectorAll(".gridCell");

  erase.forEach(function (item) {
    item.addEventListener("mouseover", () => {
      item.style.backgroundColor = "white";
    });
  });
});

rainbowButton.addEventListener("click", () => {
  const cells = document.querySelectorAll(".gridCell");

  cells.forEach((cell) => {
    cell.addEventListener("mouseover", () => {
      cell.style.backgroundColor = getRandomColor();
    });
  });
});

clearButton.addEventListener("click", () => {
  const cells = document.querySelectorAll(".gridCell");

  cells.forEach((cell) => {
    cell.style.backgroundColor = "white";
  });
});

customButton.addEventListener("click", () => {
  const cells = document.querySelectorAll(".gridCell");
  colorPicker.click();

  colorPicker.addEventListener("input", () => {
    const colorChoice = colorPicker.value;
    cells.forEach((cell) => {
      cell.addEventListener("mouseover", () => {
        cell.style.backgroundColor = colorChoice;
      });
    });
  });
});

blackButton.addEventListener("click", () => {
  const cells = document.querySelectorAll(".gridCell");
  cells.forEach((cell) => {
    cell.addEventListener("mouseover", () => {
      cell.style.backgroundColor = "black";
    });
  });
});
