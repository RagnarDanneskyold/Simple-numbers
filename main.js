"use strict"
// let a = prompt("Введите свое имя");
// let b = confirm(`Ваше имя ${a} ?`);
// if (b == true) {
//     alert("Отлично");
// };
// let name = prompt("Ваше имя?", "");
// alert(name);



// let answer = prompt("Какое официальное название java script?", "");
// if (answer == "ECMAScript") {
//     alert("Вы молодец!");
// } else {
//     alert("Вы еще плохо знаете java script :(");
// };

// let value = prompt("Введите ваше число, Сэр", "");
// if (value > 0) {
//     console.log(1);
// } else if (value < 0) {
//     console.log(-1);
// } else {
//     console.log(0);
// }

//let result;
//result = (a + b < 4) ? "мало" : "много";

// let message;
// let login;

// message = (login == "сотрудник") ? "Привет" :
//     (login == "Директор") ? "Здравствуйте" :
//         (login == "") ? "Нет логина" :
//             "";

// let age = prompt("Введите ваше число, Сэр", "");

// if (age >= 14 && age <= 90) {
//     alert("Возраст ок")
// } else {
//     alert("нет")
// }


// let age = prompt("Введите ваше число, Сэр", "");

// if (age < 14 || age > 90) {
//     alert("Возраст ок")
// } else {
//     alert("нет")
// }


// let age = prompt("Введите ваше число, Сэр", "");

// if (!(age >= 14 && age <= 90)) {
//     alert("Возраст ок")
// } else {
//     alert("нет")
// }

// let user = prompt("Кто это?", "");

// if (user == "Админ" || user == "админ") {
//     let password = prompt("Введите ваш пароль, уважаемый администратор", "");
//     if (password == "Я Главный") {
//         alert("Здравствуйте");
//     }
//     else if (!(password == "Я главный")) {
//         console.log("Неверный пароль");
//     }
//     else if (password == null) {
//         console.log("Нажата клавиша ESC")
//     }
// } else if (user == null) {
//     console.log("Нажата клавиша ESC, выход из формы")
// } else if (user == "") {
//     alert("Я вас не знаю :(")
// } else if (!(user == "Админ")) {
//     alert("Я вас не знаю")
// }

// for (let i = 0; i <= 50; i++) {
//     if (i % 2 == 0) {
//         console.log(i);
//     }
// }

// for (let i = 0; i <= 5000000; i++) {
//     if (i % 2 == 0) continue;
//     console.log(i);
// }

// for (let i = 1; i <= 10; ++i) {
//     if (i % 2 == 0) console.log(i);
// }

// for (let i = 0; i < 3; i++) {
//     alert(`number ${i}!`);
// }

// let i = 0;

// while (i < 3) {
//     alert(`number ${i}!`)
//     i++;
// }

// let num;

// do {
//     num = prompt("Введите ваше число", "")
// } while (num <= 100 && num);


// funk:
// for (let i = beginInterval; i <= endInterval; i++) {
//     for (let a = i; a <= i; a--) {
//         let c = i / a;
//         console.log(`Делитель ${c}`);
//         if (c == 1) {
//             console.log(i);
//             continue funk;
//         }
//     }
// }


let start = document.getElementById('firstNum');
let end = document.getElementById('secondNum');
let btn = document.getElementById('go');
let resultField = document.getElementById('Result');

let startInterval = +start.value;
let endInterval = +end.value;
let result = [];
let numArr = [];

btn.addEventListener('click', function () {
    let startInterval = +start.value;
    let endInterval = +end.value;
    for (let index = startInterval; index <= endInterval; index++) {
        let chekNum = function () {
            result.length = 0;
            for (let i = index; i <= index && i > 0; i--) {
                let c;
                c = index % i;
                if (c == 0) {
                    result.push(i);
                }
            }
            if (result.length == 2) {
                numArr.push(index)
            }
        }
        let test = chekNum(index);
    }
    console.log(numArr);
    resultField.value = numArr;
})


// let startInterval = 2;
// let endInterval = 30;

// for (let index = startInterval; index <= endInterval; index++) {
//     let chekNum = function () {
//         result.length = 0;
//         for (let i = index; i <= index && i > 0; i--) {
//             let c;
//             c = index % i;
//             console.log(`Текущее делимое ${a}`);
//             console.log(` Текущий делитель ${i}`);
//             console.log(`Результат ${c}`);
//             if (c == 0) {
//                 result.push(i);
//             }
//         }
//         if (result.length == 2) {
//             numArr.push(index)
//         }
//     }
//     let test = chekNum(index);
//     console.log(test);
//     console.log(numArr);
//     console.log(numArr.length);
// }
// alert(numArr)

//let a = 17;
// for (let i = a; i <= a && i > 0; i--) {
//     let c;
//     c = a % i;
//     // console.log(`Текущее делимое ${a}`);
//     // console.log(` Текущий делитель ${i}`);
//     // console.log(`Результат ${c}`);
//     if (c == 0) {
//         result.push(i);
//     }
//     console.log(result.length);
//     if (result.length == 2) {
//         console.log(`Число ${a} подходит, ты молодец!`)
//         numArr.push(a);
//     }
//     else {
//         console.log(`Число ${a} не подходит, берем другое! `)
//     }
// }
