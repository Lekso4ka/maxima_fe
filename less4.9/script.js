/*
    Как работает EventLoop в js
    https://www.youtube.com/watch?v=8aGhZQkoFbQ&ab_channel=JSConf
    https://fuse8.ru/media/2876/frame-216.png

    вы не знаете js

    https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Promise

    https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Statements/async_function

    https://developer.mozilla.org/ru/docs/Web/JavaScript/Closures


    Mime https://ru.wikipedia.org/wiki/%D0%A1%D0%BF%D0%B8%D1%81%D0%BE%D0%BA_MIME-%D1%82%D0%B8%D0%BF%D0%BE%D0%B2
    Codes https://developer.mozilla.org/en-US/docs/Web/HTTP/Status

    https://fakerapi.it/en

*/

/*

    let n = 1;

    function counter() {
        n++;
        console.log(n);
    }

    console.log(n);

    setTimeout(() => {
        console.log("time 1")
        counter()
    }, 1000);

    setTimeout(() => {
        console.log("time 2")
        counter()
    }, 0);

    counter();
    counter();
    counter();
    counter();
    counter();
    counter();
    counter();
    counter();

    // queue - очередь

    function foo() {
        console.log("вызов счетчика")
        setTimeout(() => {
            console.log("time out is done!")
            if (n < 13) {
                kwa();
            }
        }, 5000);
        counter();
        console.log("вызов foo");
    }

    function bar() {
        let sum = 0;
        for (let i = 0; i < 10000000000; i++) {
            sum += i
        }
        console.log(sum);
        foo();
        console.log("вызов bar");
    }

    function kwa() {
        bar();
        console.log("вызов kwa");
    }


    kwa()

*/

// promise - обещание

let promise = new Promise(function(resolve, reject) {
    if (Math.random() < 0.8) {
        resolve("Успех! Хлеб куплен!")
    } else {
        reject("что-то пошло не так")
    }
});

let sisPromise = new Promise((resolve, reject) => {
    if (Math.random() > 0.5) {
        resolve("хлеб порезан")
    } else {
        reject("хлеб не порезан")
    }
})
let answ;

promise
    .then(function(answ) {
        answ = answ;
        console.log(answ);
        return sisPromise
    })
    .then(function(sisAnsw) {
        console.log(sisAnsw)
    })
    .catch(err => {
        console.log(err);
    })

async function getDinner() {
    console.log("dinner");
    let task1 = await promise;
    console.log(task1)
    let task2 = await sisPromise;
    console.log(task2);
    answ = task1;
    console.log("answ", answ);
}

getDinner()


console.log("answ", answ);



const body = document.body;

// AJAX Asynx JavaScript And XML

fetch("https://fakerapi.it/api/v1/custom?_quantity=10&_locale=ru_RU&login=firstName&isMale=boolean")
    .then(res => res.json())
    .then(data => {
        if (data.code === 200) {
            console.log(data.data)
            data.data.forEach(user => {
                body.innerHTML += `<div style="color: ${user.isMale ? "blueviolet" : "crimson"}">${user.login}</div>`
            })
        }
    })
    
