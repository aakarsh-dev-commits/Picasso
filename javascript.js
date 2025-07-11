const grid = document.querySelector(".container");

grid.style.display = "flex";
grid.style.flexDirection = "row";

const squareContainers = [];
const squares = [];

for (let i = 0; i < 16; i++) {
  const sqaureContainer = document.createElement("div");
  grid.appendChild(sqaureContainer);
  sqaureContainer.style.display = "flex";
  sqaureContainer.style.flexDirection = "column";

  squareContainers.push(sqaureContainer);

  for (let j = 0; j < 16; j++) {
    const sqaure = document.createElement("div");
    sqaureContainer.appendChild(sqaure);

    sqaure.style.width = "10px";
    sqaure.style.height = "10px";
    sqaure.style.backgroundColor = "blue";
    sqaure.style.borderStyle = "solid";
    sqaure.style.borderWidth = "2px";
    sqaure.style.borderColor = "black";

    squares.push(sqaure);
  }
}
