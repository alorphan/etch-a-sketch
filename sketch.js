const slider = document.querySelector('.sizeSlider');
const sizeLabel = document.querySelector('.size');
sizeLabel.textContent = slider.value + " X " + slider.value;
let rainbowMode = false;

function createGrid(size)
{
    const board = document.querySelector('.container');
    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    const amount = size * size;
    for (let i = 0; i < amount; i++)
    {
        const square = document.createElement("div");
        square.style.backgroundColor = "white";
        square.classList.add("square");
        square.addEventListener("mouseover", changeColor);
        board.insertAdjacentElement("beforeend", square);
    }
}

// callback: change bg color
function changeColor(e)
{
    if (rainbowMode)
    {
        const randomColor = Math.floor(Math.random()*16777215).toString(16);
        e.target.style.backgroundColor = "#" + randomColor;
    }
    else
    {
        e.target.style.backgroundColor = "black";
    }
}

function updateSize(value)
{
    sizeLabel.textContent = slider.value + " X " + slider.value;
    clearGrid();
    createGrid(parseInt(value));
}

function clearGrid()
{
    const gridSquares = document.querySelectorAll(".square");
    for (const square of gridSquares)
    {
        square.style.backgroundColor = "white";
    }
}

function toggleColorMode()
{
    if (rainbowMode) rainbowMode = false;
    else rainbowMode = true;
}

createGrid(16);
