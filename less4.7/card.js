const  names = [
    "Анастасия",
    "Анатолий",
    "Никита",
    "Август",
    "Нина",
    "Антон",
    "Кирилл",
    "Ольга",
    "Яна",
    "Анна",
    "Олег",
    "Мая",
    "Ибрагим",
    "Гюльчатай",
    "Дмитрий",
    "Инга"
]

const icons = [
    "hippo",
    "fish-fins",
    "dragon",
    "otter",
    "kiwi-bird",
    "horse",
    "frog",
    "dove",
    "dog",
    "crow",
    "cat"
]

function pluarize(n, w0, w1, w2) {
    if (n % 100 < 11 || n % 100 > 14) {
        if (n % 10 === 1) {
            return w1
        } else if (n % 10 >= 2 && n % 10 <= 4) {
            return w2
        } else {
            return w0
        }
    } else {
        return w0
    }
}

function createPerson(obj) {
    let name = obj.name ? obj.name : names[getRandom(names.length)];
    let icon = obj.icon ? obj.icon : icons[getRandom(icons.length)];
    

    const card = document.createElement("div");
    card.className = "card";

    const iconTag = document.createElement("i");
    iconTag.className = `fa-solid fa-${icon}`;

    const nameTag = document.createElement("h3");
    nameTag.innerText = name;

    const ageTag = document.createElement("div");
    let age = obj.age ? obj.age : getRandom(61, 14);
    ageTag.innerHTML = `<span>${age}</span> ${pluarize(age, "лет", "год", "года")}`;

    let tags = []
    if (obj) {
        for (let k in obj) {
            if (k !== "name" && k !== "age" && k !== "icon") {
                let tag = document.createElement("div");
                tag.innerText = obj[k];
                tags.push(tag);
            }
        }
    }

    // [1, 2, 3, 4] => 1, 2, 3, 4

    card.append(iconTag, nameTag, ageTag, ...tags);

    const color = `rgb(${getRandom(256)},${getRandom(256)},${getRandom(256)})`
    card.style.boxShadow = `0 0 5px 0 ${color}`;

    iconTag.style.color = color;

    return card;
}

// const wrap = document.querySelector(".wrapper");



// let random = getRandom(20, 1);

// while(random--) {
//     wrap.append(createPerson())
// }