function makeGrid(rows, cols) {
    const mainContainer = document.querySelector(".main-container");
    mainContainer.style.setProperty('--grid-rows', rows);
    mainContainer.style.setProperty('--grid-cols', cols);
    for (c = 0; c < (rows * cols); c++) {
      let cell = document.createElement("div");
      mainContainer.appendChild(cell).className = "grid-item";
    };
}
  
function colorDiv() {
    const grid = document.querySelectorAll(".grid-item");
    grid.forEach((grid) => {
    grid.addEventListener("mouseenter", () => {
        grid.classList.add("mouse-target");
        });
    });
}

function reset() {
    const grid = document.querySelectorAll(".grid-item");
    grid.forEach((grid) => {
        grid.classList.remove("mouse-target");
    });
    const mainContainer = document.querySelector(".main-container");
    grid.forEach((grid) => {
    mainContainer.removeChild(grid).className = "grid-item";
    });
    };

function gridSizeInput() {
    let gridsize = window.prompt("What size gris would you like? (max of 100)", "16");
        if (isNaN(gridsize) || gridsize > 100 || gridsize <= 0) {
        alert("Invalid Input!");
        return makeGrid(16, 16);
        } makeGrid(gridsize, gridsize);
}

function playGame() {
    makeGrid(16, 16);
    colorDiv();
    const resetButton = document.querySelector(".reset");
    resetButton.addEventListener("click", () => {
        reset();
        gridSizeInput()
        colorDiv()
    });
}
playGame();
