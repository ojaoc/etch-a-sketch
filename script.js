// Select container
let container_div = document.getElementById('grid');
// Prompt size
let size_button = document.getElementById('size');

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
        color = 'black';
    }
    let gridBlockNodeList = container_div.querySelectorAll('div');
    let gridBlocksArray = Array.from(gridBlockNodeList);
    gridBlocksArray.forEach(block => {
        block.addEventListener('mouseover', (e) => e.target.style.backgroundColor = color);
    });
}

createGrid(16);
selectColor();











