"use strict;";

console.log("hello wrodl");

///////////////////////////////////////
// let's make the grid

const gridSquare = document.createElement("div");
const sketchContainer = document.querySelector(".sketch-container");
for (let i = 0; i < 16; i++) {
  const gridSquare = document.createElement("div");
  gridSquare.style.height = "20px";
  sketchContainer.appendChild(gridSquare);
}
