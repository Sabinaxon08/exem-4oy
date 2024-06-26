// Examen JavaScript Amaliy savollar 

// 1-savol Arifmetik operatorla

//  5 sonini 2 ga bo'ling va qoldig`ini alertga chiqaring!

// разделить 5 на 2 и вывести остаток в алерт (использовать оператор %)

// javob:Pasdan yozib keting kodini

alert(5 % 2)



// 2-savol  Math metodlari

// 1 dan 10 gacha bo'lgan random son yasang va alertga chiqaring

// сделать рандомное число от 1 до 10 и вывести в алерт

// Javob:Pasdan yozib keting kodini


let random = Math.floor(Math.random() * 10)
console.log(random)

// 3-savol Math metodlari

// 12.510 sonini butun songa aylantiring! 

// сделать число 12.510 целым

// ответ должен выйти 12

// javob: 12 chiqishi kerak!


let son = 12.510;
let floor = Math.floor(son);
console.log(floor);


// 4-savol function

// "MARS IT SCHOOL" sozini nechta harfdan iboratligini funksiya orqali topib va alertga chiqaring!.

// с помощью функции найти сколько букв в слове "MARS IT SCHOOL" и вывести в алерт

// Javob:Kodini yozib bering 

let Mars = "MARS IT SCHOOl"
console.log(Mars + " " + (Mars.length) + "ta harf")



// 5-savol for loop

// "MARS IT SCHOOL" sozini javascript funksiyasi orqali 10 marta console.log ga chiqaring!

// С помощью функции вывести в консоль 10 раз слово "MARS IT SCHOOL"

// Javob:Kodini yozib bering


let ism = ("MARS IT SCHOOL")
for (let i = 1; i <= 10; i++) {
    console.log(ism)
}


// 6-savol Array methods

// let harflar = ["a" , "b" , "d" , "e" , "f" , "g" , "h" , "i" , "j" , "k" , "l" , "m" , "n" , "o" , "p" , "q" , "r" , "s" , "t",  "u" , "v" , "x" , "y" , "z" ]

// Shu arraydan foydalangan holda console.log ga o'zingizni ismigizni chiqaring

// С помощью этого массива вывести в консоль свое имя

// Javob:Kodini yozib bering

let klaviatura = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "a", "s", "d", "f", "g", "j", "k", "l", "z", "x", "c", "v", "b", "n", "m"]

console.log(klaviatura)
console.log(klaviatura[11] + klaviatura[10] + klaviatura[22] + klaviatura[7] + klaviatura[23] + klaviatura[10])


// 7-savol if else

// Promtdan yosh kiriting agar yoshi 18 yoshdan katta bo'lsa console da Siz balag'ot yoshiga yetgansiz , aks holda  siz balog'at yoshiga yetmagansiz  // agar yoshi 18 yoshga teng bolsa  balog'at yoshi muborak deb console da chiqarish kerak

// Работа с if else, проверка возраста больше 18 лет, меньше 18 лет или равен 18 годам

// Javob:Kodini yozib bering


let yosh = prompt("yoshingizni yozing");
if (yosh > 18) {
    console.log("Siz balag'ot yoshiga yetgansiz");
} else if (yosh < 18) {
    console.log("siz balog'at yoshiga yetmagansiz");
} else {
    console.log("balog'at yoshi muborak bolsin");
}


// 8-savol String metodlari vs Array metodlari

// Promtdan ismigizni kiriting va console.log da ismigizni teskarisini chiqaring

// Ввести в промпт свое имя и вывести в консоль его наоборот

// Javob:Kodini yozib bering



let ism2 = prompt("ism yozing");

let reversedName = ("");
for (let i = ism2.length - 1; i >= 0; i--) {
    reversedName += ism2[i];
}
console.log(" ", reversedName)







// 10-savol Array metodlari

// let sonlar = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// shu arraydagi sonlarni console ga chiqaring

// найти и вывести четные массивы в консоль, с помощью методов


// Javob :Kodini yozib bering


let sonlar = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let even = sonlar.filter(item => item % 2 === 0)
let odd = sonlar.filter(item => item % 2 >= 1)

console.log("JUFT SONLAR: " + even)
console.log("TOQ SONLAR: " + odd)