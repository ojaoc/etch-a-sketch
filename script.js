// Select container
let container_div = document.getElementById('grid');
// Style container
container_div.classList.add('grid_container'); 
// Prompt size
let size_button = document.getElementById('size');
// Prompt answer
size_button.addEventListener('click', function () {
        let size = prompt('Set the size of the Etch-a-Sketch! It is a square, so the height and width are the same.', 16);
        let widthAndHeight = size;
        
        function createGrid(widthAndHeight) {
            let numberOfCells = widthAndHeight * widthAndHeight;
            for (let i = 0; i < numberOfCells; i++) {
                let grid_item = document.createElement('div');
                grid_item.setAttribute('class', 'grid_item');
                container_div.appendChild(grid_item);
            }
        
            container_div.setAttribute('style', `grid-template-rows: repeat(${widthAndHeight}, 1fr); grid-template-columns: repeat(${widthAndHeight}, 1fr);`);
        }
});












