const box = document.querySelector(".sky");

const domStars = document.getElementsByClassName("star");
const activeStars = document.getElementsByClassName("star active");

//console.log(box.getBoundingClientRect()); // информация о позиции и размерах конкретного тега

const bounds = box.getBoundingClientRect();

const center = {
    x: Math.floor(bounds.width / 2),
    y: Math.floor(bounds.height / 2)
}

let centerPoint = document.createElement("div");
// centerPoint.className = "star active";
centerPoint.style.left = center.x + "px";
centerPoint.style.top = center.y + "px";

box.append(centerPoint);

centerPoint.style.top = center.y - centerPoint.offsetHeight / 2 + "px";
centerPoint.style.left = center.x - centerPoint.offsetWidth / 2 + "px";

let size = 20;
let maxX = Math.floor(center.x / size), 
maxY = Math.floor(center.y / size);

const showStar = (obj) => {
    const tag = document.createElement("div");
    tag.className = "star";
    tag.style.width = obj.size + "px";
    tag.style.height = obj.size + "px";
    const pos = obj.getPosition(center, size);
    tag.style.left = pos.left + "px";
    tag.style.top = pos.top + "px";
    box.append(tag);
}

class Star {
    constructor(x, y, size = 30) {
        this.x = x;
        this.y = y;
        this.size = size;
    }
    getPosition(center, size = 20) {
        let result = {
            left: center.x + (size * this.x) - this.size / 2,
            top: center.y + (size * this.y) - this.size / 2
        }
        return result
    }
}

async function getData() {
    const response = await fetch("https://fakerapi.it/api/v1/custom?_quantity=1000&x=number&y=number&size=number");
    const data = await response.json();
    let stars = data.data.filter(point => point.size <= 100 && point.x <= 100 && point.y <= 100);
    stars.forEach(s => showStar(new Star(s.x, s.y, s.size)))
    setInterval(() => {
        for (let i = 0; i < activeStars.length; i++) {
            activeStars[i].classList.remove("active");
        }
        domStars[getRandom(length)].classList.add("active");
    }, 1000);
}

// getData();




let cnt = Math.ceil(Math.random() * 400, 50);
let starsData = [];
while (cnt--) {
    let sz = getRandom(4, 30);
    starsData.push(new Star(
        getRandom(maxX, -maxX), 
        getRandom(maxY, -maxY),
        sz % 2 ? sz + 1 : sz
    ))
}


starsData.forEach(star => showStar(star));

let length = starsData.length;
setInterval(() => {
    for (let i = 0; i < activeStars.length; i++) {
        activeStars[i].classList.remove("active");
    }
    domStars[getRandom(length)].classList.add("active");
}, 100);





// https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API
// https://habr.com/ru/articles/342106/