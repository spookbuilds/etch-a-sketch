const container = document.querySelector("#container");

const resizeButton = document.querySelector("#resizeButton");

resizeButton.addEventListener("click", function () {

    const newSize = Number(prompt("How many squares per side?"));

    if (isNaN(newSize) || newSize > 100 || newSize < 1) {

        alert("Go for a number between 1 and 100");

    }

    else {

     container.innerHTML = "";

     createGrid(newSize);

    };
});


function randomColor() {

    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);

    return `rgb(${red}, ${green}, ${blue})`;

}


function createGrid(size) {

    const squareSize = 960 / size;

    for (let i = 0; i < size * size; i++) {

        const square = document.createElement("div");

        square.style.width = `${squareSize}px`;
        square.style.height = `${squareSize}px`;

        square.addEventListener("mouseover", function () {

        square.style.backgroundColor = randomColor();

    });

    container.appendChild(square);
    }
}

createGrid(16);