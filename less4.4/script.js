/*
    Стол
        ширина 1м
        длина 2м
        высота 80см
        материал металический
        принадлежность рабочий стол
        действия
            кушать
            писать
            печатать
            двигать
            увеличивать высоту
*/

let obj = {}
/*
     свойства и значения объекта по логике экви валентны свойствам и значениям в CSS или атрибуту в HTML

     Свойством объекта ВСЕГДА является строка
*/
let car = {
    brand: "BMW",
    model: "X5",
    color: "black",
    length: 200000,
    hasOwner: false,
    lastOwner: {
        name: "Ivan",
        documents: "123OLO56"
    },
    "количество колес": 5,
    recolor: function (newColor) {
        this.color = newColor;
        console.log(`Новый цвет ${this.showFullName()} - ${this.color}`)
    },
    changeOwner: function(newOwner) {
        this.hasOwner = true;
        this.lastOwner = newOwner;
    },
    showFullName: function() {
        return `${this.brand} ${this.model}`;
    }
}
let colorName = "color";

car.color = "red";
car.length = 0;

// console.log(car.brand)
// console.log(car.model)
// console.log(car[colorName])
// console.log(car["color"])
// console.log(car.color)
// console.log(car["количество колес"])

/*
    Машина BMW X5 черного цвета
*/

console.log(`Car ${car.showFullName()} is ${car.color}.`)

// Каждую итерацию цикла for in в переменную key записывается одно свойство объекта, пока они все не закончатся

// for (let key in car) {
//     console.log("Ключ объекта: ", key, "Значение этого ключа: ", car[key]);
// }

/*
    Объект - неупорядоченный набор пар ключ-значение

    Свойства объекта никогда не стоит пытаться упорядочить!
*/
console.log(car)

car.recolor("yellow")
let user = {
    name: "Leksa",
    documents: "AA555AAA"
}
car.changeOwner(user);

console.log(`${car.lastOwner.name} is new owner of ${car.showFullName()}`)

console.log("________________________________");

/*
    this - обращение к "себе" - вызов свойства или метода объекта внутри самого объекта
*/
let u = {
    name: "Vasya",
    say: function(msg) {
        console.log(`${this.name} say: "${msg}"`);
    }
}

/*
    Вася утром проснулся:
    Я красавчик - пойду умываться =)
    Я пришел завтракать
*/

u.say("Hello Everyone!");
u.name = "Helen";
u.say("I am the best designer in our office");
u.say("=)");

console.log(this);