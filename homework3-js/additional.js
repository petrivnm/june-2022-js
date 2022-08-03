// - Нам дано масив друзів let friends = ["Ivan", "Slavik", "Grisha", "Lera", "Ira"]; Потрібно зробити перевірку якщо
// кількість елементів у масиві більше або дорівнює 3, то виводиться повідомлення про те, що це великий масив, в якому  3 і більше елементи.
//     Інакше слід вивести на екран повідомлення про те, що це маленький масив, в якому менше 3-х елементів.

//     let friends = ["Ivan", "Slavik", "Grisha", "Lera", "Ira"];
// if (friends.length >= 3) {
//     console.log('це великий масив');
// } else {
//     console.log('це маленький масив');
// }


// - Маємо 3 числа і між ним  нам потрібно знайти те що посередині.
//     Знайти, яке з них є середнім (більше одного, але менше за інше). Перевірити, чи знаходиться перше число між двома іншими.
// let x = 11;
// let y = 9;
// let z = 10;
// if (y > x && y < z) {
//     console.log('y-middle');
// }else if (x > y && x < z) {
//     console.log('x - middle');
// } else {
//     console.log('z is middle')
// }

// - Перепишіть конструкцію if з використанням умовного оператора '?':
// if (a + b < 4) {
//     result = 'Мало';
// } else {
//     result = 'Багато';
// }
// let a = 11;
// let b = 2;
// let result = (a + b < 4) ? 'Мало' : 'Багато';
// console.log(result);


// - Маємо будь яке число від -100 , 0 , +100 потрібно перевірити яким є число: позитивним, негативним або нулем
// напишіть це тернарним оператором
// let number = +prompt('Enter number from -100 to +100');
// if (number === 0) {
//     console.log(number);
// }else {
// let result = (number >= -100 && number < 0) ? 'Number is maines' : 'Number is plus';
// console.log(result)
// }
//

// - У нас є змінна test, якщо дорівнює true, виведіть 'Вірно', інакше виведіть 'Неправильно'.
//     Перевірте роботу скрипта при test, що дорівнює true, false. Напишіть два варіанти скрипта - з коротким записом(тернаркою)
// let test = true;
// if (test) {
//     console.log('Вірно');
// } else
//     console.log('Неправильно');
// let test = false;
// let result = test ? 'Вірно' : 'Неправильно';
// console.log(result);

// - Використовуючи конструкцію if..else, напишіть код, який запитуватиме: „Яка «офіційна» назва JavaScript?“
// Якщо користувач вводить «ECMAScript», то показати: «Правильно!», інакше – відобразити: «Не знаєте? ECMAScript!
// let languageName = prompt('Яка «офіційна» назва JavaScript?');
// if (languageName === 'ECMAScript') {
//     document.write('Правильно!');
// } else {
//     document.write('Не знаєте? ECMAScript!');
// }

//     - У першому під'їзді квартири з 1 до 20. У другому з 21 по 48. У третьому з 49 по 90.
// Користувач вводить номер квартири просто в змінні або через prompt('') .
//     Програма повинна зазначити, в якому під'їзді знаходиться дана квартира.
// let numOfentrance = +prompt('Enter num of apartmens from 1 to 90');
// if (numOfentrance >= 1 && numOfentrance <= 20) {
//     document.write('First entrance');
// }else if (numOfentrance >= 21 && numOfentrance <= 48) {
//     document.write('Second entrance');
// }else if (numOfentrance >= 49 && numOfentrance <= 90) {
//     document.write('Third entrance');
// }
// - Ми маємо змінну number в яку користувач задає числове значення,  якщо змінна рівна 10 вивести повідомлення ВІРНО, якщо змінна не рівна 10 - тоді НЕВІРНО
// let number = +prompt('Enter number');
// let result = (number === 10) ? 'ВІРНО' : 'НЕВІРНО';
// console.log(result);

// - Задача-гра "чи ми йдемо сьогодні в OKTEN на навчання?".
//     Змінна, яка характеризує температуру. Якщо температура від +10 до +22 вивести повідомлення що ми йдемо ВЧИТИСЯ .
//     Якщо інша темпаретура, тоді виводимо повідомлення що сидимо вдома і вчимося ОНЛАЙН
// let temperature = +prompt('Enter temperature');
// if (temperature >= 10 && temperature <= 22) {
//     console.log('ми йдемо ВЧИТИСЯ');
// } else {
//     console.log('вчимося ОНЛАЙН');
// }
// - За допомогою switch case - реалізувати гру - вікторину, де ми вводимо число від 1 до 5. І взалежності від введеного
//     числа нам дається приз. (Авто, Мото, Телефон, і т.д ) і якщо число не підходить тоді  вивести Повідомлення - що число не вірне ... .
// let luckyNumber = +prompt('Enter lucky number');
// switch (luckyNumber) {
//     case 1:
//         console.log('You Win Auto');
//         break;
//     case 2:
//         console.log('You Win Motocikle ');
//         break;
//     case 3:
//         console.log('You Win Iphone XR');
//         break;
//     case 4:
//         console.log('You Win mentos');
//         break;
//     case 5:
//         console.log('You Win snikers');
//         break;
//     default:
//         console.log('Wrong number');
// }


