/*
    локальное хранилище
    GET
*/

/*
    ООП
    - инкапсуляция
    - полиморфизм
    - наследование
*/

function sum(a, b, c) {
    return a + b + c;
}

/*
    Animal
        type
        eatMeat
        fourLegs
        say()

        Dog
            type: "dog"
            eatMeat
            fourLegs
            say: "Гав"
            bestFriend: "ppl"
            move: "Виляет хвостом"
            bread

            Corgi
                bread: "Corgi"
                legstLength: 10
                color: "orange"

*/

let pointA = {
    x: 2,
    y: 3
}

let pointB = {
    x: 4,
    y: -1
}

let pointC = {
    x: 10,
    y: 0
}

class Point {
    constructor(xN, yN) {
        this.x = xN;
        this.y = yN
    }
    getInfo() {
        return `Точка с координатами {${this.x}, ${this.y}}`;
    }
}

let cnt = getRandom(11);

new Point(1, 3); // экземпляр класса

let arr = [];
while(cnt--) {
    arr.push(new Point(
        getRandom(11, -10),
        getRandom(11, -10),
    ));
}

arr.forEach(el => console.log(el.getInfo()))

class Poin3d extends Point {
    constructor(xN = 0, yN = 0, zN = 0) {
        super(xN, yN); // родительский конструктор
        this.z = zN;
    }
    getInfo() {
        return `3d точка с координатами {${this.x}, ${this.y}, ${this.z}}`
    }
}

// let ppp = new Poin3d(1,1,1);

