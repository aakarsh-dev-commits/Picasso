const grid = document.querySelector(".container");
grid.style.height = "500px";
grid.style.height = "500px";
grid.style.display = "flex";
grid.style.flexDirection = "row";

const slider = document.getElementById("myRange");
const output = document.getElementById("demo");

let sliderVal = slider.value;
output.textContent = `${slider.value} X ${slider.value} `;

slider.oninput = function () {
  output.textContent = `${slider.value} X ${slider.value} `;
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
};

function randomColor() {
  return Math.floor(Math.random() * 256);
}

const normal = document.querySelector(".Normal");
const clear = document.querySelector(".Clear");
const grey = document.querySelector(".GrayScale");
const rainbow = document.querySelector(".Rainbow");

const squareContainers = [];
const squares = [];

let opaque;

function updateGrid() {
  const sqaureSize = 500 / sliderVal - 1;
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
      sqaure.style.backgroundColor = "#041729";
      sqaure.style.borderStyle = "solid";
      sqaure.style.borderWidth = "0.5px";
      sqaure.style.borderColor = "white";

      squares.push(sqaure);
    }
  }

  squares.forEach((sqaure) => {
    let currentopacity = 0;

    sqaure.addEventListener("mousedown", () => {
      isMouseDown = true;
      currentopacity = Math.min(currentopacity + 0.1, 1);
      sqaure.style.backgroundColor = colorPicked;
      sqaure.style.opacity = currentopacity;
    });

    sqaure.addEventListener("mouseup", () => {
      isMouseDown = false;
    });

    sqaure.addEventListener("mousemove", () => {
      if (isMouseDown) {
        currentopacity = Math.min(currentopacity + 0.1, 1);
        sqaure.style.backgroundColor = colorPicked;
        sqaure.style.opacity = currentopacity;
      }
    });
  });

  normal.addEventListener("click", () => {
    squares.forEach((sqaure) => {
      let currentopacity = 0;

      sqaure.addEventListener("mousedown", () => {
        isMouseDown = true;
        currentopacity = Math.min(currentopacity + 0.1, 1);
        sqaure.style.backgroundColor = colorPicked;
        sqaure.style.opacity = currentopacity;
      });

      sqaure.addEventListener("mouseup", () => {
        isMouseDown = false;
      });

      sqaure.addEventListener("mousemove", () => {
        if (isMouseDown) {
          currentopacity = Math.min(currentopacity + 0.1, 1);
          sqaure.style.backgroundColor = colorPicked;
          sqaure.style.opacity = currentopacity;
        }
      });
    });
  });

  clear.addEventListener("click", () => {
    grid.innerHTML = "";
    squares.length = 0;
    squareContainers.length = 0;
    updateGrid();
  });

  grey.addEventListener("click", () => {
    squares.forEach((sqaure) => {
      let currentopacity = 0;

      sqaure.addEventListener("mousedown", () => {
        isMouseDown = true;
        currentopacity = Math.min(currentopacity + 0.1, 1);
        sqaure.style.backgroundColor = "#BEBEBE";
        sqaure.style.opacity = currentopacity;
      });

      sqaure.addEventListener("mouseup", () => {
        isMouseDown = false;
      });

      sqaure.addEventListener("mousemove", () => {
        if (isMouseDown) {
          currentopacity = Math.min(currentopacity + 0.1, 1);
          sqaure.style.backgroundColor = "#BEBEBE";
          sqaure.style.opacity = currentopacity;
        }
      });
    });
  });

  rainbow.addEventListener("click", () => {
    squares.forEach((sqaure) => {
      sqaure.addEventListener("mousedown", () => {
        isMouseDown = true;
        sqaure.style.backgroundColor = `rgb(${randomColor()},${randomColor()},${randomColor()})`;
        sqaure.style.opacity = 1;
      });

      sqaure.addEventListener("mouseup", () => {
        isMouseDown = false;
      });

      sqaure.addEventListener("mousemove", () => {
        if (isMouseDown) {
          sqaure.style.backgroundColor = `rgb(${randomColor()},${randomColor()},${randomColor()})`;
          sqaure.style.opacity = 1;
        }
      });
    });
  });
}

updateGrid();
