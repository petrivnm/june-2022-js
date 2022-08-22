// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)
// function User(id, name, surname, email, phone) {
//     this.id = id;
//     this.name = name;
//     this.surname = surname;
//     this.email = email;
//     this.phone = phone;
// }
//
// let array = [];
//
// let user1 = new User(1, `tarzzan`, `sfdffd@gmail.com`, +3805656565);
// let user2 = new User(2, `tarzzan`, `sfdffd@gmail.com`, +3805656565);
// let user3 = new User(3, `tarzzan`, `sfdffd@gmail.com`, +3805656565);
// let user4 = new User(4, `tarzzan`, `sfdffd@gmail.com`, +3805656565);
// let user5 = new User(5, `tarzzan`, `sfdffd@gmail.com`, +3805656565);
// let user6 = new User(6, `tarzzan`, `sfdffd@gmail.com`, +3805656565);
// let user7 = new User(7, `tarzzan`, `sfdffd@gmail.com`, +3805656565);
// let user8 = new User(8, `tarzzan`, `sfdffd@gmail.com`, +3805656565);
// let user9 = new User(9, `tarzzan`, `sfdffd@gmail.com`, +3805656565);
// let user10 = new User(10, `tarzzan`, `sfdffd@gmail.com`, +3805656565);
//
// array.push(user1, user2, user3, user4, user5, user6, user7, user8, user9, user10);
// console.log(array);

// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
// let filter = array.filter(value => value.id % 2 === 0);
// console.log(filter);

// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
// let sort = array.sort((a, b) => a.id - b.id);
// console.log(sort);


// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client
// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
// class Client{
//     constructor(id, name, surname, email, phone, order) {
//         this.id = id;
//         this.name = name;
//         this.surname = surname;
//         this.email = email;
//         this.phone = phone;
//         this.order = order;
//     }
// }
//
// let array = [];
//
// let user1 = new Client(1, `tarzzan`, `kuvalda`, 'sfdffd@gmail'.com,+3805656565,[1,2,3,4]);
// let user2 = new Client(2, `tarzzan`, `kuvalda`, 'sfdffd@gmail'.com,+3805656565,[1]);
// let user3 = new Client(3, `tarzzan`, `kuvalda`, 'sfdffd@gmail'.com,+3805656565,[5,6,7,8,9,0]);
// let user4 = new Client(4, `tarzzan`, `kuvalda`, 'sfdffd@gmail'.com,+3805656565,[3,4,5,6]);
// let user5 = new Client(5, `tarzzan`, `kuvalda`, 'sfdffd@gmail'.com,+3805656565,[0,1,55,-9]);
// let user6 = new Client(6, `tarzzan`, `kuvalda`, 'sfdffd@gmail'.com,+3805656565,[5,6,7]);
// let user7 = new Client(7, `tarzzan`, `kuvalda`, 'sfdffd@gmail'.com,+3805656565,[2,3]);
// let user8 = new Client(8, `tarzzan`, `kuvalda`, 'sfdffd@gmail'.com,+3805656565,[2]);
// let user9 = new Client(9, `tarzzan`, `kuvalda`, 'sfdffd@gmail'.com,+3805656565,[0]);
// let user10 = new Client(10, `tarzzan`, `kuvalda`, 'sfdffd@gmail'.com,+3805656565,[0,5,55,155]);
//
// array.push(user1, user2, user3, user4, user5, user6, user7, user8, user9, user10);
// let sort = array.sort((a, b) => a.order.length - b.order.length);
// console.log(sort);

// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
// function Car(model,produser,year,maxSpeed,engin) {
//     this.model = model;
//     this.produser = produser;
//     this.year = year;
//     this.maxSpeed = maxSpeed;
//     this.engin = engin;
//
//     this.drive = function () {
//         console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
//     }
//
//     this.info = function () {
//         for (const item in this) {
//             if (typeof this[item] !== 'function'){
//                 console.log((`${item} -- ${this[item]}`));;
//             }
//         }
//     }
//
//     this.increaseMaxSpeed = function (newSpeed) {
//         this.maxSpeed += newSpeed;
//     }
//
//     this.changeYear = function (newYear) {
//         this.year = newYear;
//     }
//     this.addDriver = function (newDriver) {
//         this.driver = newDriver;
//     }
//
// }
//
// let car = new Car('Mercedes', 'Germani', 2000, 220, 2.2);
// console.log(car);
// car.drive();
// car.info();
// car.increaseMaxSpeed(80);
// car.changeYear(2020);
// car.addDriver({name:'abramovych',age:45});
// console.log(car);


// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
// class Car {
//     constructor(model, produser, year, maxSpeed, engin) {
//         this.model = model;
//         this.produser = produser;
//         this.year = year;
//         this.maxSpeed = maxSpeed;
//         this.engin = engin;
//     }
//
//     drive() {
//         console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
//     }
//
//     info() {
//         for (const item in this) {
//             if (typeof this[item] !== 'function') {
//                 console.log((`${item} -- ${this[item]}`));
//                 ;
//             }
//         }
//     }
//
//     increaseMaxSpeed(newSpeed) {
//         this.maxSpeed += newSpeed;
//     }
//
//     changeYear(newYear) {
//         this.year = newYear;
//     }
//
//     addDriver(newDriver) {
//         this.driver = newDriver;
//     }
// }
//
// let car = new Car('Mercedes', 'Germani', 2000, 220, 2.2);
// let ObjDriver = {
//     name: 'Vasya',
//     age: 25
// }
// car.drive();
// car.info();
// car.increaseMaxSpeed(80);
// car.changeYear(2020);
// car.addDriver({name: 'abramovych', age: 45});
// console.log(car);
// car.addDriver(ObjDriver);
// console.log(car);

// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
// class Cinderella {
//     constructor(name, age, footSize) {
//         this.name = name;
//         this.age = age;
//         this.footSize = footSize;
//     }
// }
//
// let cinderella1 = new Cinderella('Anya', 25, 39);
// let cinderella2 = new Cinderella('Lilya', 26, 40);
// let cinderella3 = new Cinderella('Olya', 27, 38);
// let cinderella4 = new Cinderella('Galya', 28, 37);
// let cinderella5 = new Cinderella('Lesya', 29, 36);
// let cinderella6 = new Cinderella('Ira', 30, 35);
// let cinderella7 = new Cinderella('Oksana', 24, 34);
// let cinderella8 = new Cinderella('Ylya', 23, 41);
// let cinderella9 = new Cinderella('Mariya', 22, 42);
// let cinderella10 = new Cinderella('Emma', 21, 33);
//
// let array = [cinderella1, cinderella2, cinderella3, cinderella4, cinderella5, cinderella6, cinderella7, cinderella8, cinderella9, cinderella10];
//
// // console.log(array);
//
// class Prince extends Cinderella {
//     constructor(name, age, findFootSize) {
//         super(name, age);
//         this.findFootSize = findFootSize;
//     }
// }
//
// let prince = new Prince('Petya', 27, 37);
//
// let find = (array, prince) => {
//     for (const item of array) {
//         if (prince.findFootSize === item.footSize) {
//             return `My Cinderella name is ${item.name}`
//         }
//     }
// }
// console.log(find(array, prince));
//
// let cinderella = array.find(value => value.footSize === prince.findFootSize);
// console.log(cinderella);



