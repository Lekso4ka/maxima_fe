let arr = [];
let numbers = [1,5,5,3,9,11]
let names = ["Вика", "Ира", "Игорь"]

let bag = [
    5,
    "Word",
    "house",
    {
        name: "Leonid",
        age: 3
    },
    true
]

console.log(names[0]);
console.log(numbers[numbers.length-1]);
numbers[100] = "ololo";
console.log(numbers);


let fruits = [
    "banana",
    "orange",
    "strawberry"
]

console.log(fruits);
fruits.push("apple"); // push - очередь на кассе (человек всегда встает в конце);
console.log(fruits);
let last = fruits.pop(); // pop - забрать из конца массива
console.log(last);
console.log(fruits);
fruits.unshift(last); // unshift - "мне только спросить"
console.log(fruits);
fruits.shift() // shift - достать из начала массива
console.log(fruits);
fruits.unshift("goava");
fruits.unshift("cherry");
fruits[2] = "cherry";
console.log(fruits);

/*
    Массив - упорядоченная последовательность данных

    Способы упорядочивани данных (алгоритм)

    FIFO (очередь)
    First In First Out (push() + unshift())
    
    LIFO (стек)
    Last In First Out (push() + pop())

    пакет с продуктами - из низа пакета вряд ли можно забрать продукты сразу
*/

let nums = [];

let cnt = 100;
let n = 0
while (n++ < cnt) {
    let rand = getRandom(100);
    // console.log(rand);
    nums.push(rand);
}

console.log(nums);

console.time("for");
let sm = 0;
for (let i = 0; i < nums.length; i++) {
    sm += nums[i];
}
console.log("Результат", sm);
console.timeEnd("for");


// user = {
//     name: "",
//     login: "",
//     pwd: "" // ...
// }

// console.time("for in");
// sm = 0;
// for (let index in nums) {
//     sm += nums[index]
// }
// console.log("Результат", sm);
// console.timeEnd("for in");

console.time("for of");
sm = 0;
for (let val of nums) {
    sm += val;
}
console.log("Результат", sm);
console.timeEnd("for of");

// nums.forEach(function(el, i, arr) {
//     if (el <= 10) {
//         arr[i] = "мало";
//     } else if (el >= 90) {
//         arr[i] = "много";
//     }
//     console.log(el, i, arr);
// });

console.time("forEach");
sm = 0;
nums.forEach(function(el) {
    sm += el;
})
console.log("Результат", sm);
console.timeEnd("forEach");


fruits.sort();

console.log(fruits);

nums.sort(function(el_next,el) {
    // console.log(el, el_next);
    return el_next - el;
});

console.log(nums);

names = [
    "Давид",
"Давлат",
"Давыд",
"Дайна",
"Далия",
"Дамиан",
"Дамир",
"Дамира",
"Дан",
"Дана",
"Даниил",
"Данила",
"Данислав",
"Даниэла",
"Дания",
"Данна",
"Данута",
"Даньяр",
"Дар",
"Дара",
"Дарерка",
"Дарина",
"Дария",
"Дарья",
"Дарьяна",
"Даша",
"Даяна",
"Дебора",
"Дементий",
"Демид",
"Демократ",
"Демьян",
"Денис",
"Джамал",
"Джамиля",
"Джанет",
"Джеймс",
"Джема",
"Джемма",
"Дженифер",
"Дженна",
"Дженнифер",
"Джереми",
"Джессика",
"Джоан",
"Джозеф",
"Джордан",
"Джорж",
"Джулия",
"Джульетта",
"Диана",
"Дидим",
"Дик",
"Дилара",
"Дильназ",
"Дильнара",
"Диля",
"Димитрий",
"Дин",
"Дина",
"Динар",
"Динара",
"Динасий",
"Динора",
"Диодора",
"Диомид",
"Дионисия",
"Дита",
"Диша",
"Дмитрий",
"Добрыня",
"Долорес",
"Доля",
"Доминика",
"Домна",
"Дональд",
"Донат",
"Донатос",
"Дора",
"Дорофей",
"Дэнна"
]

cnt = getRandom(51,10);

let persons = [];

for (let i = 0; i < cnt; i++) {
    persons.push({
        name: names[getRandom(names.length)],
        age: getRandom(100)
    })
}

persons.sort(function(el2, el1) {
    if (el2.name > el1.name) {
        return 1;
    } else {
        return -1;
    }
});

persons.sort(function(el2, el1) {
    return el2.age - el1.age;
})

console.log(persons);

let filterPersons = persons.filter(function(el) {
    return el.age > 40 && el.age < 50;
})
console.log(filterPersons)

console.log(nums.filter(function(el, i) {
    return i % 10 === 0 && i !== 0;
}))

let updPersons = persons.map(function(el) {
    if (el.age >= 70) {
        el.work = "На песнии"
    } else if (el.age < 18) {
        el.work = "Не работает"
    } else {
        el.work = "Рабочий класс";
    }
    // let str = `${el.name} ${el.age} лет и он(она) ${el.work}`
    return el;
})

console.log(updPersons);


/*
    filter = возвращает новый массив с меньшим количеством данных (не изменяя данные) - ответ на вопрос true/false

    map = возвращает новый массив с тем же количеством данных, но новый массив может иметь совершенно другую структуру (не обязательно объект)

    reduce = возвращает результат вычисления над каждым элементом в массиве. Он записывается в первый аргумент

    Оба этих метода - клучевые методы в React

    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

    .slice
*/

console.log(updPersons.filter(function(el) {
    return nums.includes(el.age)
}));

let result = nums.reduce(function(res, el) {
    res += el;
    return res;
}, 0)

/*
    Посчитать произведение чисел в диапазоне от 10 до 20 (вкл)
*/

result = nums.reduce(function(acc, el) {
    if (el >= 10 && el <= 20) {
        console.log(el);
        acc = el * acc;
    }
    return acc;
}, 1)

console.log(result);

let unic = fruits.reduce(function(acc, el) {
    if (!acc.includes(el)) {
        acc.push(el)
    }
    return acc;
}, [])
console.log(fruits, unic);

console.log(unic.slice(1, 3));

console.log(unic[0].slice(0, unic[0].length - 2));

let obj = updPersons[0];
console.log(obj);

let keys = Object.keys(obj);
let values = Object.values(obj);

console.log(obj[keys[0]] === values[0]);


