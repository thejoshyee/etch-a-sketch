// Random RGB mouseover
function randomRGB () {
    while (true) {
        const randomBetween = (min, max) => min + Math.floor(Math.random() * (max - min + 1));
        const r = randomBetween(0, 255);
        const g = randomBetween(0, 255);
        const b = randomBetween(0, 255);
        const rgb = `rgb(${r},${g},${b})`; 
    return rgb;
    }
}

// Create Div grid and mouseover effect
const container = document.getElementById("container");
function makeGrid(rows, cols) {
    
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);
    for (i = 0; i < (rows * cols); i++) {
        let gridItem = document.createElement("div");
        gridItem.classList.add("gridItem");
        gridItem.style.backgroundColor = 'white';
        document.querySelector("#container").appendChild(gridItem);
        gridItem.addEventListener("mouseover", function (e) {
            gridItem.style.backgroundColor = randomRGB();
        });
    };
};



// Default Reset Setting
document.onload = makeGrid(20, 20);

//Reset Button - reset grid colors
const clearButton = document.querySelector(".clear");
clearButton.addEventListener("click", function() {
    const allDivs = document.querySelectorAll('.gridItem')
    .forEach(e => e.style.backgroundColor = 'white'); 
});


//Slider to adjust size 

var slider = document.getElementById("mySize");
var output = document.getElementById("number");
output.innerHTML = slider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
    const newSize = slider.value;
    output.innerHTML = this.value;
    removeAllChildNodes(container);
    makeGrid(newSize, newSize);
}


// Remove Child Nodes
function removeAllChildNodes(parent) {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
}


