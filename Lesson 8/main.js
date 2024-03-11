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
