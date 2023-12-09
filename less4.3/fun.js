let a = 5;
let b = 3;

console.log(a + b);

a = 3;
b *= 3;

console.log(a + b);

function sum(a = 0, b = 0) {
    // let a = 2;
    // let b = 3;
    console.log("sum", a + b);
}

function powSum(a, b) {
    let aSq = a ** 2;
    let bSq = b ** 2;
    console.log(`${a}^2 + ${b}^2 = ${aSq + bSq}`);
}

// sum(1, 2);
// sum(5, 8);
// sum(1, 2);
// sum(2, 3);
// powSum(2, 2);


let ax = 3, ay = 2, bx = 6, by = 3;

// Посчитать длину отрезка

function line(a1, a2, b1, b2, mini = true) {
    let length1 = Math.abs(a1 - b1);
    let length2 = Math.abs(a2 - b2);
    let result = (length1 ** 2 + length2 ** 2) ** (1 / 2);
    result = mini ? +result.toFixed(2) : result;
    console.log(`Длина отрезка между точками A{${a1},${a2}} и B{${b1},${b2}} - ${result}`)
}

line(3, 2, 6, 3);
line(1, -2, -3, 4);


function getRandom(max, min = 0) {
    // каждая функция должна возвращать результат ее работы
    return Math.floor(Math.random() * (max - min) + min);
    console.log("=)")
}

line(getRandom(11, -10), getRandom(11, -10), getRandom(11, -10), getRandom(11, -10));