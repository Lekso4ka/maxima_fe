// console.log(name + " like " + FAVORITE_NUMBER + " in binary code");

/*
    Boolean (логический тип)
        true (1)
        false (0)
    Операторы сравнения
        >
        <
        >=
        <=
        == (сравнение значений не зависимо от типов данных)
        !=
        === (строгое сравнение - сравнивает сначала типы данных, а потом значение)
        !==
*/

let a = 2;
let b = 23;

console.log(`${a} == ${b}`, a == b);
console.log(`${a} > ${b}`, a > b);
console.log(`${a} < ${b}`, a < b);

let fruit1 = "auto21"; // 41
let fruit2 = "auto"; // 97

console.log(fruit1 > fruit2);

let str1 = 20;
let str2 = "20";

console.log(str1 !== str2);

let secretNumber = Math.round(Math.random());

// const ANSWER = prompt("Угадай число от 0 до 1", 0);

// console.log("Угадайка: ", secretNumber === +ANSWER);
// console.log(secretNumber, +ANSWER);

/*
    Number
        to String
            1 + ""
            (1).toString()
        to Boolean
            любое число, кроме 0 - true (0.12, -5, 1)
            0 - false


    String
        to Number
            "2" * 1 => 2
            "2" / 1 => 2
            "2" - 0 => 2
            "2" + 0 => "20" - ooops. not worked =)
            +"2" => 2 
            parseInt("123.999") => 123
            parseFloat("123.999") => 123.999
        toBoolean
            "" - false
            " " любпя не пустая строка - true
            "2"
            "."
    null - false
    undefined - false
    toBoolean
        !!2
        !!"hello"
*/

let fruit = "Orange";
let fruitCntSelf = +(Math.random() * 3).toFixed(3);
let fruitCntKids = parseFloat((Math.random() * 3).toFixed(3));
let totalFruitCnt = +(fruitCntSelf + fruitCntKids).toFixed(3);
let fruitPrice = 65.50;
let cash = (totalFruitCnt * fruitPrice).toFixed(2);
console.log(`${totalFruitCnt}kg ${fruit} cost ${cash}`);

console.log(1000);
console.log("1 000");
console.log(+(0.1 + 0.2).toFixed(1) == 0.3);


/*
    Логические операторы
        ! - отрицание (НЕ)
        || - сложение (ИЛИ)
        && - умножение (И)

        0 - false
        1 - true

        !1 => 0
        !0 => true


        ||
            желаемый результат - я пойду гулять
            a) на улице хорошая погода
            б) у меня есть зонт

            a\b 1   0    
            1   1   1
            0   1   0

        Результат логического сложения истин всегда, когда хотя бы одно из условий истино


        a || b

        1 + 1 => >0
        1 + 0 => 1
        0 + 1 => 1
        0 + 0 => 0

        &&
            a && b

            я хочу есть суп
            а) у меня есть тарелка
            б) у меня есть ложка

            a\b 1   0
            1   1   0
            0   0   0

            Результатом логического умножения будет истина только тогда, когда все условия истины!

        1 * 1 => 1
        1 * 0 => 0
        0 * 1 => 0
        0 * 0 => 0
*/


let n = Number("0");
console.log("n", n)


/*
    Преобразовать многозначное число с пробелами
    Посчитать сколько цифр в числе
    
    https://i.stack.imgur.com/T9M2J.png
*/


/*

        5 <= x < 7 (удов)
        x < 5 (неуд)
        7 <= x <= 8 (7 <= x < 9) (хор)
        x >= 9 (отл)
*/

let x = Math.round(Math.random() * 10);
console.log(x);
// console.log(5 <= x);
// console.log(x < 7);
// console.log( 5 <= x < 7); // Не правильно!!!
console.log( (5 <= x && x < 7) || (x >= 7 && x <= 8), "Среднее значение"); // Не правильно!!!
console.log( x < 5 || x > 8, "Граничащие значения"); // Не правильно!!!


/*
    Если (истина) => результат
*/
let str = "ololo"
if (x === 8) {
    str = `${x} - символ бесконечности"`
    console.log(str);
} else {
    str = `${x} не является символом как 8`
    console.log(str);
}

if (x >= 5 && x < 8 ) {
    console.log(`${x} - средний балл`);
} else {
    console.log(`${x} - крайний балл`);
}

if (x >= 5 && x < 7 ) {
    console.log(`${x} - удовлетворительно`);
} else if (x >= 7 && x < 9) {
    console.log(`${x} - хорошо`);
} else if (x >= 9) {
    console.log(`${x} - отлично!!!`);
} else {
    console.log(`${x} - не очень хорошо...`);
}


console.log("Go next");

// x = prompt("Дай число!");
if (x >= 9) {
    console.log(`${x} - отлично!!!`);
} else if (x >= 7) {
    console.log(`${x} - хорошо`);
} else if (x >= 5) {
    console.log(`${x} - удовлетворительно`);
} else if (x >= 0) {
    console.log(`${x} - не очень хорошо...`);
} else {
    console.log(typeof x); 
    console.log("Сам такой!")
}

str = "Apple";
console.log(str.length) // длина строки
console.log(str.toLowerCase()) // длина строки
console.log(str.toUpperCase()) // длина строки

str = "";
n = Math.floor(Math.random() * 90000 + 10000)
let end = n % 1000;
console.log(n.toString().length);
if (end === 0) {
    str = n / 1000 + " 000"
} else if (end !== 0) {
    console.log(n / 1000);
    let ln = (end + "").length;
    if (ln === 1) {
        str = " 00" + end
    } else if (ln === 2) {
        str = " 0" + end
    } else {
        str = " " + end;
    }
    str = Math.floor(n / 1000) + str;
}
console.log(str);


/*
    Дано случайное число в диапазоне от 0 до 10000

    есть существительное "ворона"
    есть глагол (не обязательно) "сидела"
    есть фраза

    "На ветке сидели 50 ворон"
    "На ветке сидела 21 ворона"
    "На ветке сидели 1143 вороны"


    Посчитать от 0 до 30 - станет понятно при каких условиях какие окончания!

*/
