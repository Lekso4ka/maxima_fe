const container = document.querySelector(".container");
const rect = document.querySelector(".rect");
const link = rect.querySelector("a");
const btn = rect.querySelector("button");

console.log(container, rect, link, btn);


const colorizeTag = function(e) {
    e.stopPropagation();
    e.preventDefault();
    e.currentTarget.style.backgroundColor = getRGB();
}
let clickCnt = 0;
// container.onclick = colorizeTag


// container.onclick = (e) => {
//     console.log(`Clicked ${++clickCnt} times`);
// }


container.addEventListener("click", colorizeTag);
container.addEventListener("click", function(e) {
    console.log(`Clicked ${++clickCnt} times`);
}, {once: true});


btn.addEventListener("click", () => {
    container.removeEventListener("click", colorizeTag);
})

document.body.addEventListener("click", colorizeTag);

rect.addEventListener("click", colorizeTag);

link.addEventListener("click", function(e) {
    e.preventDefault();
    e.stopPropagation(); // Остановить bubble-эффект (не вызывать такое же событие у родительского тега)
    colorizeTag(e);
});

rect.remove();

const animals = [
    {
        name: "Бегемот",
        text: "Обыкнове́нный бегемо́т, или гиппопота́м (лат. Hippopótamus amphíbius), — парнокопытное млекопитающее из семейства бегемотовых, единственный современный вид рода Hippopotamus. Характерной особенностью гиппопотама является его полуводный образ жизни — бо́льшую часть времени он проводит в воде, выходя на сушу лишь ночью на несколько часов для кормёжки. Бегемот обитает только у пресных водоёмов, хотя может изредка оказываться в море."
    },
    {
        name: "Тегу",
        text: "Те́гу[1] (лат. Tupinambis teguixin) — вид пресмыкающихся семейства тейид. Общая длина достигает 0,6-1 м, а масса от 3,5 до 4 кг. Окраска тела буровато-чёрная с голубым оттенком. Поперёк спины и верхней стороны шеи в 9—10 рядов расположены небольшие желтоватые или черноватые пятна, сливающиеся иногда в полосы. Голова, шея и лапы беловатого цвета. Туловище сжато, лапы короткие и сильные. Хвост умеренно длинный, немного сжатый с боков. Сравнительно недавно у ящериц тегу была обнаружена факультативная эндотермия — возможность повышать температуру тела во время брачного периода за счёт эндотермических химических реакций. Это делает ящерицу тегу первой обнаруженной современной теплокровной (временно, периодически) рептилией."
    },
    {
        name: "Вельш-корги",
        text: "Вельш-ко́рги — породы пастушьих собак, происходящие из Уэльса. Вельш-корги-кардиган (англ. Welsh Corgi Cardigan) — порода, появившаяся на изолированной территории Кардиганшира. Согласно наиболее популярной версии, предки вельш-корги-кардиганов были завезены кельтами при освоении территории Британских островов в конце бронзового века. Первое упоминание породы в письменных источниках датируется X веком. Вельш-корги-пемброк (англ. Welsh Corgi Pembroke) — порода, выведенная в Пембрукшире, предположительно, из собак фламандского происхождения и ведущая свою историю с XIII века."
    },
    {
        name: "Крокодилы",
        text: "Крокоди́лы (лат. Crocodilia) — отряд вторично-водных животных класса пресмыкающихся из клады эузухий, которая в свою очередь вместе со множеством промежуточных клад относится к кладе круротарзы или псевдозухии. Из ныне живущих организмов ближайшие родственники крокодилов — птицы, потомки сестринской ветви архозавров. Хотя словом «крокодил» правильнее всего обозначать представителей семейства настоящих крокодилов, в целом этот термин употребим для обозначения любых представителей отряда, к которому также относятся семейства аллигаторовые (аллигаторы и кайманы) и гавиаловые, а также некоторые базальные его представители. Нередко «крокодилами» называют любых крокодиломорфов (Crocodylomorpha), что является ошибкой на фоне современной систематики данной группы рептилий. В современном объёме данной систематической группы, крокодилы впервые появились 83,5 млн лет назад в позднем меловом периоде. Современный отряд включает в себя не менее 15 видов настоящих крокодилов (семейство Crocodylidae), 8 видов аллигаторовых (семейство Alligatoridae) и 2 вида гавиаловых (семейство Gavialidae, иногда упраздняемое до подсемейства в составе семейства настоящих крокодилов[1][2])."
    },
    {
        name: "Опоссум",
        text: "Опо́ссумы[1] (лат. Didelphimorphia) — отряд сумчатых млекопитающих. С позднего мела обитают в Южной и Северной Америке; в среднем палеогене обитали в Европе, Африке и Центральной Азии[2][3]. Населяют разного типа равнинные и горные леса, саванны Южной, Центральной и частью Северной Америки[3]."
    }
];

container.className += " container_tabs";
const tabs = document.createElement("nav");
// animals.forEach(el => {
//     const tab = document.createElement("button");
//     tab.innerText = el.name;
//     tabs.append(tab);
// })
tabs.append(...animals.map(el => {
    const tab = document.createElement("button");
    tab.className = "tab";
    tab.innerText = el.name;
    return tab;
}))
tabs.className = "container__nav";
const dataWrapper = document.createElement("div");
dataWrapper.className = "container__data";

/*
    string.split("symbol") => []
    array.join("s") => "111s222s333s444"

*/
animals.forEach(el => {
    const tag = document.createElement("article");
    let txt = el.text.split(". ");
    txt = txt.map(t => `<p>${t}</p>`)
    tag.innerHTML = txt.join("");
    dataWrapper.append(tag);
})

// tabs.firstElementChild.className += " active";
tabs.firstElementChild.classList.add("active");
// dataWrapper.firstElementChild.className += "active";
dataWrapper.firstElementChild.classList.add("active");

for (let i = 0; i < tabs.children.length; i++) {
    const tab = tabs.children[i];
    console.log(tab);
    tab.addEventListener("click", (e) => {
        /*
            classList - список всех классов элемента (тега)
            .add("name") - добавить класс
            .remove("name") - удалить класс
            .contain("name") - есть ли класс
            .toggle("name") - если класс есть, он удалится, если класса нет - он добавится
        

            https://www.w3schools.com/howto/howto_js_accordion.asp
        */
        tab.classList.add("active");
        // Array.from(tabs.children).forEach(tb => {
        //     if (tb.classList.contains("active") && tb !== tab) {
        //         tb.classList.remove("active");
        //     }
        // })
    
        tabs.querySelectorAll(".active").forEach((tb, index) => {
            if (tb !== tab) {
                tb.classList.remove("active");
                dataWrapper.children[index].classList.remove("active");
            }
        })
        dataWrapper.querySelectorAll(".active").forEach((el, index) => {
            el.classList.remove("active");
        })
        dataWrapper.children[i].classList.add("active");
    })
}

container.append(tabs, dataWrapper);

const modalWrap = document.querySelector(".modal-wrapper");
document.querySelector(".plus").addEventListener("click", (e) => {
    e.stopPropagation();
    modalWrap.classList.add("active");
})

modalWrap.addEventListener("click", (e) => {
    e.stopPropagation();
    if (e.currentTarget === e.target) {
        e.currentTarget.classList.remove("active");
    }
})

const bar = modalWrap.querySelector(".bar");

bar.addEventListener("click", (e) => {
    progress();
}, {once: true})

function progress() {
    const thumb = bar.firstElementChild;
    function step(i) {
        if (i <= 106) {
            setTimeout(function() {
                thumb.style.width = `${i}%`;
                thumb.innerText = `${i}%`;
                i+= getRandom(6, 1);
                step(i);
            }, 300)
        }
    }
    step(0);
}

let intId = setInterval(function() {
    console.log(new Date().toLocaleTimeString())
}, 1000)

setTimeout(function() {
    clearInterval(intId);
}, 10000)

