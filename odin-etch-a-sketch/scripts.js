const container = document.querySelector(".main-container");
// const subContainer = document.querySelector(".sub-container");
const mainContainer = document.querySelector(".main-container");
const rainbowBtn = document.querySelector("#rainbowBtn");
const blackBtn = document.querySelector("#blackBtn");
const gridSizeBtn = document.querySelector("#gridSizeBtn");

let test;

const rainbow = function () {
  let colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];

  let random = Math.floor(Math.random() * 7);
  return colors[random];
};

const clearBoard = function () {
  div.forEach();
};

const BOARD = function (GRID_SIZE) {
  let rainbowMode = false;
  rainbowBtn.addEventListener("click", (e) => {
    rainbowMode = true;
  });

  blackBtn.addEventListener("click", (e) => {
    rainbowMode = false;
  });
  const subContainer = document.createElement("div");
  subContainer.classList.add("sub-container");
  mainContainer.append(subContainer);

  for (x = 0; x < GRID_SIZE; x++) {
    const columnContainer = document.createElement("div");
    columnContainer.classList.add("column-container");
    subContainer.append(columnContainer);

    for (y = 0; y < GRID_SIZE; y++) {
      const div = document.createElement("div");
      div.classList.add("grid");
      columnContainer.append(div);
      div.addEventListener("mouseover", (e) => {
        if (rainbowMode == false) {
          div.style.backgroundColor = "black";
        } else {
          div.style.backgroundColor = rainbow();
        }
      });
      gridSizeBtn.addEventListener("click", (e) => {
        subContainer.remove();
        columnContainer.remove();
        div.remove();
      });
    }
  }
};
gridSizeBtn.addEventListener("click", (e) => {
  let gridSize = prompt();
  gridSizeBtn.textContent = `${gridSize} x ${gridSize}`;
  BOARD(gridSize);
});

BOARD(16);
