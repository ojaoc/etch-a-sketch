let grid_div = document.getElementById('grid');

let grid_container = document.createElement('div');


grid_container.classList.add('grid_container');


grid_div.appendChild(grid_container);
grid_container.appendChild(grid_item);

function createGrid(widthAndHeight) {
    let numberOfCells = widthAndHeight ** 2;
    for (let i = 0; i < numberOfCells; i++) {
        let grid_item = document.createElement('div');
        grid_item.classList.add('grid_item');
        grid_container.appendChild(grid_item);
    }
    grid_container.setAttribute('style', `grid-template: repeat(${widthAndHeight}, 1fr) / repeat(${widthAndHeight}, 1fr);`);
}







