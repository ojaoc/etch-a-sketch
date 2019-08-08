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
    let selected_size = prompt('How many squares would you like? Minimum size: 8; W=H; Default= 16x16');
    
    if (Math.pow(selected_size, 2) == container_div.childElementCount) {
        alert('That size is already set.');
        return resizeGrid();
    }

    if (selected_size < 8 && selected_size != null) {
        alert ('Invalid size.');
        return resizeGrid();
    
    } else if (selected_size === null) {
        return;
    
    } else {
        resetGrid();
        createGrid(selected_size);
        selectColor();
    }
}

function toggleRainbow() {
    let rainbowArray = ['#9400D3', '#4B0082', '#0000FF', '#00FF00', '#FFFF00', '#FF7F00', '#FF0000'];
    let gridSize = container_div.childElementCount;
    
    resetGrid();
    createGrid(Math.sqrt(gridSize));
    
    let gridBlockNodeList = container_div.querySelectorAll('div');
    let gridBlocksArray = Array.from(gridBlockNodeList);
    
    gridBlocksArray.forEach(block => {
        block.addEventListener('mouseover', (e) => {
            let randomNumber = Math.floor(Math.random() * (rainbowArray.length-1));
            e.target.style.backgroundColor = rainbowArray[randomNumber];
        });
    });
}

createGrid(16);
selectColor();

reset_button.addEventListener('click', (e) => restoreGrid());
size_button.addEventListener('click', (e) => resizeGrid());
rainbow_button.addEventListener('click', (e) => toggleRainbow());