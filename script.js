"use strict;";

console.log("hello wrodl");

///////////////////////////////////////
// let's make the grid

const gridSquare = document.createElement("div");
const sketchContainer = document.querySelector(".sketch-container");

for (let i = 0; i < 16; i++) {
  const col = document.createElement("div");
  col.style.width = "35px";
  col.style.height = "561px";
  col.style.display = "flex";
  col.style.flexDirection = "column";
  col.style.outline = "1px solid blue";
  col.style.flex = 1;
  col.classList.add(`col${i + 1}`);
  col.style.boxSizing = "border-box";
  sketchContainer.appendChild(col);

  for (let i = 0; i < 16; i++) {
    const gridSquare = document.createElement("div");
    gridSquare.style.width = "35px";
    // gridSquare.style.height = "20px";
    gridSquare.style.flex = 1;
    gridSquare.style.outline = "1px solid red";
    gridSquare.style.boxSizing = "border-box";
    gridSquare.classList.add("gridsquare");
    col.appendChild(gridSquare);
  }
}

///////////////////////////////////////
// highlight grid on mouseover

const highlightSquare = function (e) {
  console.log("hovered a square");
  e.stopPropagation();
  this.style.backgroundColor = "black";
};

///////////////////////////////////////
// event listeners

const allSquares = document.querySelectorAll(".gridsquare");
allSquares.forEach((square) => {
  square.addEventListener("mouseover", highlightSquare);
});

const btnReset = document.querySelector(".btn-reset");
btnReset.addEventListener("click", () => {
  allSquares.forEach((square) => {
    square.style.backgroundColor = "white";
    console.log("hello");
  });
});

// for (let i = 0; i < 16; i++) {
//   const gridSquare = document.createElement("div");
//   gridSquare.style.height = "50px";
//   gridSquare.style.flex = "1";
//   gridSquare.style.border = "1px solid black";
//   firstCol.appendChild(gridSquare);

//   const newRow = document.createElement("div");

//   if (i % 16 === 0) {
//     sketchContainer.appendChild(newRow);
//   }
