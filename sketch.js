console.log("test")

const container = document.querySelector(".container");
const head = document.querySelector("head");

const itemStyle = document.createElement("style");
itemStyle.textContent = `
    .items {
        flex-basis: calc(100% / 16);
    }`
head.appendChild(itemStyle);

for (let i = 0; i < 256; i++) {
    const newDiv = document.createElement("div");
    newDiv.setAttribute("class", "items");
    container.appendChild(newDiv);
} 

const itemList = document.querySelectorAll(".items");
itemList.forEach(modifyColor);

function modifyColor(item) {
    item.addEventListener("mouseover", (e) => {
        item.style.backgroundColor = randomRGB();
    })
};


function randomRGB() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    return `rgba(${r}, ${g}, ${b}, .1)`
}

