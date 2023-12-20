function getNumber(max = 101, min = 0) {
    return Math.floor(Math.random() * (max - min) + min);
}
function getRGB(a = 1) {
    const RED = getNumber(256);
    const GREEN = getNumber(256);
    const BLUE = getNumber(256);
    return `rgba(${RED},${GREEN},${BLUE},${a})`;
}

// class => className
// for => htmlFor
let n = 0;

function addNewTag (n) {
    return `<div style="border: 1px solid ${getRGB()}">${n}</div>`
}

wrap.style.alignContent = "stretch";

document.body.onclick = function() {
    console.log("clock");
    wrap.innerHTML += addNewTag(++n);
    /*
        3-4 col = 2 row - 2
        5-9 col = 3 row = 3
        10-16
    */
    // if (n > 2 && n <= 2 ** 2) {
    //     wrap.style.gridTemplateColumns = "repeat(2, 1fr)";
    // } else if (n > 2 ** 2 && n <= 3 ** 2) {
    //     wrap.style.gridTemplateColumns = "repeat(3, 1fr)";
    // } else if (n > 3 ** 2 && n <= 4 ** 2) {
    //     wrap.style.gridTemplateColumns = "repeat(4, 1fr)";
    // } else if (n > 4 ** 2 && n <= 5 ** 2) {
    //     wrap.style.gridTemplateColumns = "repeat(5, 1fr)";
    // }
    wrap.style.gridTemplateColumns = `repeat(${Math.floor(n ** (1/2)) || 1 }, 1fr)`;

}



console.log(wrap);