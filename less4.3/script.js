let word = "tomato";
// console.log(word.indexOf("o"));
/*
    .indexOf("char") - порядковый номер соответствующего символа (первое совпадение)
     Если в строке такой символ отсутствует, его индекс всегда будет -1
*/
// console.log(word.indexOf("T"));
// console.log(word.indexOf(("T").toLowerCase()));
// console.log(word.lastIndexOf(("T").toLowerCase()));
// console.log(word.charAt(3));
// console.log(word.charAt(word.length - 1));
// console.log(word[0]);


/*
    Циклы - повтор одного и того же действия до наступления какой-то точки остановки
*/
let n = 14;

/*
    n = n + 2
    n += 2 => n = n + 2
    n /= 2 => n = n / 2
    n %= 2 => n = n % 2

    n = n + 1 => n += 1 => n++ => ++n
    ++ - инкремент (увеличение числа на 1)
    n = n - 1 => n -=1 => n-- => --n
    -- - дектремент (уменьшение числа на 1)


    Итерация - один круг выполнения цикла
    Итератор - значение, которое изменяется с каждым тактом цикла
*/

/*

while (n < 18) { // false
    console.log(`Вам ${n} лет и работать еще рано!`);
    n = n + 1;
}

console.log("Цикл закончился");


n = 10;

while (n >= 0) {
    console.log(n);
    n--;
}


let a = 2;
let b = a++;
console.log(a, b); // 3, 2


// a = 2;
let c = ++a;
console.log(a, c); // 3, 3

*/

// Родители купили на день рождения ребенка 100 свечек
// Каждый год из набора уходило столько свечек, сколько исполнилось лет ребенку
// На сколько лет хватит набора??
const START = Math.floor(Math.random() * 1000);
let candles = START;
let age = 0;

while (candles >= age) {
    age++;
    candles -= age;
    // console.log(`В ${age} лет осталось ${candles} свечек`);
}
console.log(`${START} свечек хватит на ${age} лет`);

/*
    1 99
    2 97
    3 94
*/

/*
    Если вы не знаете что деать - скорее всего нужен цикл!
*/

let charIndex = 0;
while(charIndex < word.length) {
    let char = word[charIndex];
    console.log(char);
    charIndex++;
}
console.log("index", charIndex);
console.log("------------")
while(charIndex--) {
    console.log(word[charIndex]);
}