//Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// function User (id, name, surname, email, phone) {
//     this.id = id;
//     this.name = name;
//     this.surname = surname;
//     this.email = email;
//     this.phone = phone;
// }


//створити пустий масив, наповнити його 10 об'єктами new User(....)
// let users = [
//     new User(1, 'Janett', 'Jackson', 'jackson@gmail.com', 380456712345),
//     new User(2, 'Sanett', 'Everly', 'everly@gmail.com', 38049652345),
//     new User(3, 'Alice', 'Mcclay', 'mcclay@gmail.com', 380456712235),
//     new User(4, 'Travis', 'Scott', 'travis@gmail.com', 380456715445),
//     new User(5, 'Jan', 'Antonio', 'antonio@gmail.com', 380456786745),
//     new User(6, 'Margareth', 'Queen', 'queen@gmail.com', 380451232345),
//     new User(7, 'Tessa', 'Rich', 'rich@gmail.com', 380456717655),
//     new User(8, 'Jareth', 'Shevchenko', 'shevchenko@gmail.com', 380520712345),
//     new User(9, 'Steve', 'Hamilton', 'hamilton@gmail.com', 380456719895),
//     new User(10, 'Vitaliy', 'Klichko', 'klichko@gmail.com', 380450922345)
// ];


//- Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
// let filter = users.filter (value => value.id % 2 === 0);
// console.log(filter);


//- Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
// let sort = users.sort((a, b) => a.id - b.id);
// console.log(sort)


//створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// class Client {
//     constructor(id, name, surname, email, phone, order) {
//         this.id = id;
//         this.name = name;
//         this.surname = surname;
//         this.email = email;
//         this.phone = phone;
//         this.order = order
//     }
// }


// створити пустий масив, наповнити його 10 об'єктами Client
// let clients = [
//     new Client(1, 'Janett', 'Jackson', 'jackson@gmail.com', 380456712345, ['milk', 'chocolate']),
//     new Client(2, 'Sanett', 'Everly', 'everly@gmail.com', 38049652345, ['juice']),
//     new Client(3, 'Alice', 'Mcclay', 'mcclay@gmail.com', 380456712235, ['butter', 'bread', 'tomatoes']),
//     new Client(4, 'Travis', 'Scott', 'travis@gmail.com', 380456715445, ['sugar']),
//     new Client(5, 'Jan', 'Antonio', 'antonio@gmail.com', 380456786745, ['salt', 'potatoes']),
//     new Client(6, 'Margareth', 'Queen', 'queen@gmail.com', 380451232345, ['apples', 'oranges']),
//     new Client(7, 'Tessa', 'Rich', 'rich@gmail.com', 380456717655, ['meat']),
//     new Client(8, 'Jareth', 'Shevchenko', 'shevchenko@gmail.com', 380520712345, ['candies', 'sausages', 'water']),
//     new Client(9, 'Steve', 'Hamilton', 'hamilton@gmail.com', 380456719895, ['vodka', 'shveps']),
//     new Client(10, 'Vitaliy', 'Klichko', 'klichko@gmail.com', 380450922345, ['cola', 'brandy'])
// ];


// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
// let sort_2 = clients.sort((a, b) => a.order.length - b.order.length);
// console.log(sort_2)


//- Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції
// function Car (model, brand, year, max_speed, capacity) {
//     this.model = model;
//     this.brand = brand;
//     this.year = year;
//     this.max_speed = max_speed;
//     this.capacity = capacity;
//     //-- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//     this.drive = () => {
//         console.log(`їдемо зі швидкістю ${this.max_speed} на годину`)
//     };
//     //-- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
//     this.info = () => {
//         for (const key in this) {
//             if (typeof this[key] === 'function') continue;
//             console.log(key.toUpperCase() + ' - ', this[key])
//         }
//     };
//     // -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//     this.increaseMax_speed = newSpeed => {
//         console.log(this.max_speed += newSpeed);
//     };
//     // -- changeYear (newValue) - змінює рік випуску на значення newValue
//     this.changeYear = newValue => {
//         console.log(this.year = newValue);
//     };
//     //-- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//     this.driver = [];
//     this.addDriver = new_driver => {
//         this.driver.push(new_driver)
//     }
// }
//
// let cars = new Car('XC90', 'Volvo', 2023, 220, '2.0');
// cars.drive();
// cars.info();
// cars.increaseMax_speed(20);
// cars.changeYear(2020);
// let driver_1 = {name: 'Roman', age: 24, Nationality: 'Ukrainian'};
// cars.addDriver(driver_1);


// class Car {
//     constructor (model, brand, year, max_speed, capacity) {
//         this.model = model;
//         this.brand = brand;
//         this.year = year;
//         this.max_speed = max_speed;
//         this.capacity = capacity;
//         // this.driver = [];
//     }
//     //-- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//     drive = () => {
//         console.log(`їдемо зі швидкістю ${this.max_speed} на годину`)
//     };
//     //-- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
//     info = () => {
//         for (const key in this) {
//             if (typeof this[key] === 'function') continue;
//             console.log(key.toUpperCase() + ' - ', this[key])
//         }
//     };
//     // -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//     increaseMax_speed = newSpeed => {
//         console.log(this.max_speed += newSpeed);
//     };
//     // -- changeYear (newValue) - змінює рік випуску на значення newValue
//     changeYear = newValue => {
//         console.log(this.year = newValue);
//     };
//     //-- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//     addDriver = new_driver => {
//         this.driver.push(new_driver)
//     }
// }
//
// let cars = new Car('XC90', 'Volvo', 2023, 220, '2.0');
// cars.drive();
// cars.info();
// cars.increaseMax_speed(20);
// cars.changeYear(2020);
// let driver_1 = {name: 'Roman', age: 24, Nationality: 'Ukrainian'};
// cars.addDriver(driver_1);


//-створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
function Cinderella (name, age, foot_size) {
    this.name = name;
    this.age = age;
    this.foot_size = foot_size;
}
let cinderellas = [
    new Cinderella('Ann', 23, 38),
    new Cinderella('Jassy', 19, 37),
    new Cinderella('Tania', 28, 38),
    new Cinderella('Kate', 30, 39),
    new Cinderella('Stefa', 56, 36),
    new Cinderella('Jenie', 18, 40),
    new Cinderella('Kris', 22, 40),
    new Cinderella('Loren', 31, 39),
    new Cinderella('Molly', 26, 41),
    new Cinderella('Antonina', 20, 37)
]

//Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
class Prince {
    constructor (name, age, shoe_size) {
        this.name = name;
        this.age = age;
        this.shoe_size = shoe_size
    }
}
let prince = new Prince('Edward', 25, 36);
//За допомоги циклу знайти яка попелюшка повинна бути з принцом.
for (const shoe of cinderellas) {
    if (shoe.foot_size === prince.shoe_size) {
        console.log(`Ім'я майбутньої принцеси - ${shoe.name}`)
    }
}
//Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
let find_shoe = cinderellas.find(value => value.foot_size === prince.shoe_size);
console.log(find_shoe.name)





