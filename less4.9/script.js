/*
    Как работает EventLoop в js
    https://www.youtube.com/watch?v=8aGhZQkoFbQ&ab_channel=JSConf
    
    вы не знаете js
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



