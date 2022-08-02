// - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
// let x = 5;
// if (x === 0) {
//     console.log('Вірно')
// } else {
//     console.log('Невірно')
// }
// let a = 1;
// let a = 0;
// let a = -3;
// if (x === 0) {
//     console.log('Вірно')
// } else {
//     console.log('Невірно')
// }

// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).
// let time = prompt('Введіть число від 0 до 59');
// if (time > 0 && time <= 15) {
//     document.write('Перша чверть')
// }
// if (time > 15 && time <= 30) {
//     document.write('Друга чверть')
// }
// if (time > 30 && time <= 45) {
//     document.write('Третя чверть')
// }
// if (time > 45 && time <= 60) {
//     document.write('Четверта чверть')
// } else {
//     document.write('Невірно вказаний діапазон')
// }

// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
// let day = prompt('Введіть число від 1 до 31');
// if (day >= 1 && day <= 10) {
//     console.log('First decade')
// }
// if (day > 10 && day <= 20) {
//     console.log('Second decade')
// }
// if (day > 20 && day <= 31) {
//     console.log('Third decade');
// }

// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня
// і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).
// let dayOfweek = +prompt('Enter day of week from 1 to 7');
// switch (dayOfweek) {
//     case 1:
//         console.log('Monday');
//         break;
//     case 2:
//         console.log('Tuesday');
//         break;
//     case  3:
//         console.log('Wednesday');
//         break;
//     case  4:
//         console.log('Thurthday');
//         break;
//     case 5:
//         console.log('Friday');
//         break;
//     case  6:
//         console.log('Saturday');
//         break;
//     case 7:
//         console.log('Sunday');
//         break;
//     default:
//         console.log('Wrong number of day');
// }

//     - Користувач вводить або має два числа.
//         Потрібно знайти та вивести максимальне число з тих двох .
//         Також потрібно врахувати коли введені рівні числа.
// let num1 = +prompt('Enter first number');
// let num2 = +prompt('Enter second number');
// if (num1 > num2) {
//     console.log(num1);
// } else if (num2 > num1) {
//     console.log(num2)
// } else if (num1 === num2) {
//     console.log('Числа рівні');
// }

//     - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//         за допомоги  оператора || буде присвоювати змінній х значення "default"
//         якщо значення змінної х являється falsy (хибноподыбне, тобто кастується до false)
// let x = NaN || 'default';
// console.log(x);
