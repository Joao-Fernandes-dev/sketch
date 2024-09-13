console.log("test")

const container = document.querySelector(".boxContainer");
const boxes = document.querySelector("boxes");

let rowNumber = 16 // default 16 boxes on each row
let size = 256 // default 256 boxes in total
let opacity = 10 // default %10 opacity

function drawBoxes(size) {
    let sqrtBox = Math.sqrt(size)
    let boxSize = Math.floor((960 / sqrtBox)) + 'px'; 
    for (let index = 0; index < size; index++) {
        let newBox = document.createElement("div")
        newBox.className = "box"
        newBox.style.height = boxSize
        newBox.style.width = boxSize
        boxContainer.appendChild(newBox)
    }
}

function randomColors() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    return `rgb(${r}, ${g}, ${b}, ${opacity}%)`;
}

document.addEventListener("mouseover", (event)=>{
    if (event.target.classList.contains('box')) {
        opacity += 0.5
        if (opacity > 100) opacity = 100;
        event.target.style.backgroundColor = randomColors()
    }
})

configBtn.addEventListener("click",() => {
    opacity = 10
    boxContainer.innerHTML = ''; 
    rowNumber = Number(prompt("Enter row size(e.g., 10 for a 10x10 grid max:16):"), 16);

    if (isNaN(rowNumber) || rowNumber <= 0 || rowNumber > 16) {
        rowNumber = 16; // Default value
    }

    size = Math.pow(rowNumber,2)
    drawBoxes(size)
})

document.addEventListener("DOMContentLoaded",() => drawBoxes(size))