// const fruts = [
//   { id: 0, name: "Apple" },
//   { id: 1, name: "Tomat" },
//   { id: 2, name: "Cherry" },
//   { id: 3, name: "Orange" },
// ];

// console.log(fruts.find((item) => item. id === 2));
// console.log(fruts.filter((item) => item.id < 2));

// let result = fruts.map(item => item.name.length);
// console.log(result)

// let names = "Оля, Юля, Аня, Петя";

// let arr = names.split(", ");

// let newString = arr.join(", ")

// console.log(newString);

// let arr = [1, 2, 3, 4, 5];

// let red = arr.reduce((summ, item) => summ + item);

// console.log(red);

// let arr = [23, 45, 30];

// let summ = arr.reduce((sum, item) => sum + item) / arr.length;
// console.log(summ)

// Домашнє завдання
// -- 1 --
// У вас є масив об’єктів fruts, і в кожному з них є name
// Напишіть код, який перетворює їх в масив імен.
// const fruts = [
// { id: 0, name: "Apple" },
// { id: 1, name: "Tomat" },
// { id: 2, name: "Cherry" },
// { id: 3, name: "Orange" },
// ];
// console.log(fruts.map(item => item.name ))
// -- 2 --
//Виведіть парні числа від 2 до 10, використовуючи цикл for.
// -- 3 --
// for (let i = 2; i <= 10; i++) {
//   if (i % 2 >=1) continue;
//   console.log(i);
// }
//Замініть цикл "for" на "while"
// for (let i = 0; i < 5; i++) {
// console.lpg( `цифра ${i}!` );
// }
// let i = 0;
// while (i < 5) {
//   i++;
//   console.log(`цифра ${i}!`);
// }
// Домашнє завдання
// -- 4 --
//Напишіть цикл, який пропонує prompt ввести число більше за 100.
//Якщо відвідувач введе менше число – попросити ввести ще раз, і так далі.
//Цикл повинен запитувати число доти, доки відвідувач не введе число,
// більше за 100, або не скасує ввід/введе порожній рядок.
// let num = 100;

// let num;

// while (true) {
//   num = prompt("Введіть число більше 100");

//   if (num === null || null === "") {
//     alert("Введення скасовано або залишено порожній рядок.");
//   } else {
//     num = Number(num);

//     if (isNaN(num)) {
//       alert("Введено неправильне число. Будь ласка, спробуйте ще раз.");
//     } else if (num > 100) {
//       break; 
//     } else {
//       alert("Введено число менше або рівне 100. Будь ласка, спробуйте ще раз.");
//     }
//   }
// }
// console.log("Ви ввели число більше за 100:", num);
// -- 5 --
// Вирахуйте середній вік
// const girls = [
//   { age: 23, name: "Оля" },
//   { age: 29, name: "Аня" },
//   { age: 10, name: "Юля" },
//   { age: 20, name: "Катя" },
// ];
// Перший варіант рішення
// let newGirls = girls.map((item) => item.age);
// let summ = newGirls.reduce((sum, item) => sum + item) / newGirls.length;
// console.log(summ)
// Другий варіант рішення
// const averageAge = girls.reduce((sum, item) => sum + item.age, 0) / girls.length;
// console.log(averageAge)
