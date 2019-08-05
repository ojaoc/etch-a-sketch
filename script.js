// Grid container
let container_div = document.getElementById('grid');
// Button reset
let reset_button = document.getElementById('reset');
// Button size
let size_button = document.getElementById('size');
// Button rainbow
let rainbow_button = document.getElementById('rainbow');

function createGrid(widthAndHeight) {
    let numberOfCells = widthAndHeight * widthAndHeight;
    for (let i = 0; i < numberOfCells; i++) {
        let grid_item = document.createElement('div');
        grid_item.setAttribute('class', 'grid_item');
        container_div.appendChild(grid_item);
    }

    container_div.setAttribute('style', `grid-template-rows: repeat(${widthAndHeight}, 1fr); grid-template-columns: repeat(${widthAndHeight}, 1fr);`);
}

function selectColor(color) {
    if (!color) {
        color = '#191919';
    }
    let gridBlockNodeList = container_div.querySelectorAll('div');
    let gridBlocksArray = Array.from(gridBlockNodeList);
    gridBlocksArray.forEach(block => {
        block.addEventListener('mouseover', (e) => e.target.style.backgroundColor = color);
    });
}

function resetGrid() {
    while (container_div.firstChild) {
        container_div.removeChild(container_div.firstChild);
    }
}

function restoreGrid() {
    resetGrid();
    createGrid(16);
    selectColor();
    return;
}

function resizeGrid() {
    let selected_size = prompt('How many squares would you like? W=H; Default= 16x16', 16);
    resetGrid();
    createGrid(selected_size);
    selectColor();
}

createGrid(16);
selectColor();

reset_button.addEventListener('click', (e) => restoreGrid());
size_button.addEventListener('click', (e) => resizeGrid());












