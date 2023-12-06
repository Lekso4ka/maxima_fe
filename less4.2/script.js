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
*/

