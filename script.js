"use strict;";

///////////////////////////////////////
// dom variables

const gridSquare = document.createElement("div");
const sketchContainer = document.querySelector(".sketch-container");
const btnClear = document.querySelector(".btn-clear");
const inputGridSize = document.querySelector(".input-gridsize");
const btnGenerate = document.querySelector(".btn-generate");
const spanGrid = document.querySelector(".span-gridsize");
const btnRadios = document.querySelectorAll(".btnRadio");

///////////////////////////////////////
// global variables

const containerSize = sketchContainer.clientHeight;
let areWeDrawing = false;
let mode = "black";
let allSquares;

///////////////////////////////////////
// functions

const createGrid = function (gridSize) {
  for (let i = 0; i < gridSize; i++) {
    const col = document.createElement("div");
    const squareSize = containerSize / gridSize;
    col.style.width = `${squareSize}px`;
    col.style.height = `${containerSize}px`;
    col.style.display = "flex";
    col.style.flexDirection = "column";
    col.classList.add(`col`);
    sketchContainer.appendChild(col);

    for (let i = 0; i < gridSize; i++) {
      const gridSquare = document.createElement("div");
      gridSquare.style.width = `${containerSize / gridSize}`;
      gridSquare.style.flex = 1;
      //   gridSquare.style.outline = "1px solid var(--color1)";
      //   gridSquare.style.backgroundColor = "white";
      gridSquare.style.background = "white";
      gridSquare.classList.add("gridsquare");
      col.appendChild(gridSquare);
    }
  }
};

const setupSquares = function () {
  allSquares = document.querySelectorAll(".gridsquare");
  allSquares.forEach((square) => {
    square.addEventListener("mouseenter", highlightSquare);
    square.addEventListener("mousedown", () => {
      areWeDrawing = true;
    });
    square.addEventListener("mouseup", () => {
      areWeDrawing = false;
    });

    square.addEventListener("dragstart", (event) => {
      event.preventDefault();
    });

    square.addEventListener("drop", (event) => {
      e.preventDefault();
    });
  });
};

const highlightSquare = function (e) {
  if (!areWeDrawing) return;
  e.stopPropagation();
  if (mode == "rainbow") {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    this.style.backgroundColor = "#" + randomColor;
    // this.style.outline = "0px";
  }

  if (mode == "grey") {
    let currentBackground = this.style.background;
    if (currentBackground == "white") {
      this.style.backgroundColor = "black";
      this.style.background = "rgba(0, 0, 0, .09)";
    } else {
      currentBackground = this.style.background.match(/[^,\s]*(?=\)$)/, "");
      this.style.background = this.style.background.replace(
        /[^,\s]*(?=\)$)/,
        Number(currentBackground) + 0.09
      );
      console.log(this.style.background);
    }
    // this.style.outline = "0px";
  }
  if (mode == "black") {
    this.style.backgroundColor = "black";
    // this.style.outline = "0px";
  }
};

const generateGrid = function () {
  const userGridSize = Number(inputGridSize.value);
  console.log(userGridSize);
  allSquares.forEach((square) => {
    square.remove();
  });

  const allCols = document.querySelectorAll(".col");
  allCols.forEach((col) => {
    col.remove();
  });

  createGrid(userGridSize);

  setupSquares();
  //   createGrid(userGridSize);
};

const toggleDraw = function () {
  areWeDrawing = areWeDrawing ? false : true;
};

const updateMode = function () {
  mode = this.value;
  console.log(mode);
};

///////////////////////////////////////
// Main Program

createGrid(16);
setupSquares();

///////////////////////////////////////
// event listeners

btnClear.addEventListener("click", () => {
  allSquares.forEach((square) => {
    square.style.backgroundColor = "white";
    // square.style.outline = "1px solid var(--color1)";
    console.log("hello");
  });
});

inputGridSize.addEventListener("input", () => {
  spanGrid.textContent = `${inputGridSize.value}x${inputGridSize.value}`;
});

btnGenerate.addEventListener("click", generateGrid);

btnRadios.forEach((radio) => {
  radio.addEventListener("input", updateMode);
});
