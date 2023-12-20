let w = [];
let up = 0;
let left = 0;
let win;
function clickEvent () {
    const sizes = {
        w: screen.availWidth,
        h: screen.availHeight
    }
    win = window.open("", "title", `width=${sizes.w / 2}, height=${sizes.h}, top=${up}, left=${left}`);
    up += 100;
    left += 200;
    w.push(win)
    console.log(w);
}
function clickEvent2 () {
    if (w.length) {
        w.pop().close();
    }
}

/*
    innerHeight - 100vh
    innerWidth - 100vw

    screen - экран пользователя
    location - адресная строка браузера
    navigator - о систтеме пользователя (язык)
    history - история переходов внутри вкладки


    BOM - Browser Object Model
*/

/*
    DOM - documnet object model

    document.body
    document.head
    document.forms - список всех форм на странице

    document.getElementById("id")
*/

let first = document.getElementById("first");
if (first) {
    first.style.color = "lightblue";
    console.log(first);
}

let span = document.getElementsByTagName("span");
console.log(span);

// document.getElementsByName("...") - поиск по атрибуту name

let wrap = document.getElementsByClassName("wrapper")[0];
console.log(wrap);

let superTag = document.querySelector("span:last-child");
if (superTag) {
    console.log(superTag);
    superTag.style.color = "violet";
}

let second = document.querySelector("#second");
if (second) {
    second.style.color = "orangered";

    let secondSpan = second.querySelectorAll("span");
    secondSpan[0].style.color = "orange";
    console.log(secondSpan);



    // span.forEach((tag) => {
    //     console.log(tag);
    // })

    for (let i = 0; i < span.length; i++) {
        console.log(i, span[i]);
    }

    secondSpan.forEach((tag) => {
        console.log(tag);
    })

    // first.innerText += " Oooops";

    first.innerHTML += " <span><b>Oooops</b></span>"

    let content = first.innerHTML;
    content = content.replace(/span/g, "b");
    console.log(content);
    first.innerHTML = content;
}


