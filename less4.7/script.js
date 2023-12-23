
const wrap = document.querySelector(".wrapper");

const square = document.createElement("div");
square.className = "square";
square.innerText = "@";

const square2 = document.createElement("div");
square2.className = "square";
square2.innerText = "%";
square2.style.outlineColor = "violet";

/*
    wrapper.appendChild(square)
    wrapper.append(square)
*/

// wrap.appendChild(square);
// wrap.appendChild(square2);

wrap.append(square2, square);

const square3 = document.createElement("div");
square3.className = "square";
square3.innerText = "&";
square3.style.outlineColor = "orange";

wrap.insertBefore(square3, square);

wrap.insertBefore(square, square2);

const redClone = square.cloneNode(true);

wrap.append(redClone);

square3.remove();
redClone.append(square3);

// wrap.append(square);


/*
    document.createElement("tag")
    parent.append(tag)
    parent.appendChild(tag)
    parent.insertBefore(tag, beforeTag)
    tag.remove()
    tag.cloneNode(true/false)
*/

console.log(square);