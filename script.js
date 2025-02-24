const gridContainer = document.querySelector(".gridContainer");
const createGridButton = document.querySelector(".createGrid");
const eraserButton = document.querySelector("#eraser");
const clearButton = document.querySelector("#clear");
const rainbowButton = document.querySelector("#rainbow");
const customButton = document.querySelector("#custom");
const colorPicker = document.querySelector("#customColor");
const gridInput = document.querySelector("#gridSize");
const blackButton = document.querySelector("#black");

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

const getCharacter = (index) => hexCharacters[index];

function getRandomColor() {
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += getCharacter(Math.floor(Math.random() * 16));
  }
  return color;
}

document.addEventListener("DOMContentLoaded", () => {
  createGrid(16);
});

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

    gridCell.addEventListener("mouseover", () => {
      gridCell.style.backgroundColor = "black";
    });
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
