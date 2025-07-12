const grid = document.querySelector(".container");
grid.style.height = "500px";
grid.style.height = "500px";
grid.style.display = "flex";
grid.style.flexDirection = "row";

const slider = document.getElementById("myRange");
const output = document.getElementById("demo");

let sliderVal = slider.value;
output.textContent = slider.value;

slider.oninput = function () {
  output.textContent = this.value;
  sliderVal = this.value;
  grid.innerHTML = "";
  squares.length = 0;
  squareContainers.length = 0;
  updateGrid();
};

const color = document.getElementById("colorpicker");
let colorPicked = color.value;
color.oninput = function () {
  colorPicked = this.value;
  grid.innerHTML = "";
  squares.length = 0;
  squareContainers.length = 0;
  updateGrid();
};

const squareContainers = [];
const squares = [];

function updateGrid() {
  const sqaureSize = 500 / sliderVal - 2;
  for (let i = 0; i < sliderVal; i++) {
    const sqaureContainer = document.createElement("div");
    grid.appendChild(sqaureContainer);
    sqaureContainer.style.display = "flex";
    sqaureContainer.style.flexDirection = "column";

    squareContainers.push(sqaureContainer);

    for (let j = 0; j < sliderVal; j++) {
      const sqaure = document.createElement("div");
      sqaureContainer.appendChild(sqaure);

      sqaure.style.width = `${sqaureSize}px`;
      sqaure.style.height = `${sqaureSize}px`;
      sqaure.style.backgroundColor = colorPicked;
      sqaure.style.borderStyle = "solid";
      sqaure.style.borderWidth = "1px";
      sqaure.style.borderColor = "black";

      squares.push(sqaure);
    }
  }
}

updateGrid();
