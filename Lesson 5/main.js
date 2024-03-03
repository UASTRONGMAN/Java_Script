// -------------------------First task-------------------------
// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
// let rectangleSquare = (a, b) => a * b;
// console.log(rectangleSquare(2, 3));

// -------------------------Second task-------------------------
// - створити функцію яка обчислює та повертає площу кола з радіусом r
// let circleSquare = (r) => Math.PI*r**2;
// console.log(circleSquare(2))


// -------------------------Third task-------------------------
// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
// let cylinderSquare = (h, r) => Math.PI*2*h*r;
// console.log(cylinderSquare(2, 4))


// -------------------------Fourth task-------------------------
// - створити функцію яка приймає масив та виводить кожен його елемент
// let arr = [1, 2, 3, 4, 5, 6];
// let array = () => {
//     for (let a of arr) {
//         console.log(a);
//     }
// }
// array();

// -------------------------Fifth task-------------------------
// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
// let text = (p) => {
//     document.write(`<p>${p}</p>`);
// }
// text("Lorem ipsum.");


// -------------------------Sixth task-------------------------
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
// document.write(`<ul>`);
// let list = (li) => {
//     document.write(`<li>${li}</li>`);
//     document.write(`<li>${li}</li>`);
//     document.write(`<li>${li}</li>`);
// }
// document.write(`</ul>`);
// list('wedwf');


// -------------------------Seventh task-------------------------
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
// document.write(`<ul>`);
// let list = (text, n) => {
//     for (let i = 0; i < n; i++) {
//         document.write(`<li>${text}</li>`);
//     }
// }
// document.write(`</ul>`);
// list('wedwf', 10);


// -------------------------Eighth task-------------------------
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
// document.write(`<ul>`)
// let list = (array) => {
//     for (let arrayElement of array) {
//         document.write(`<li>${arrayElement}</li>`)
//     }
// }
// document.write(`</ul>`)
// list([1, 2, 'asda', true, 12])


// -------------------------Ninth task-------------------------
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
// let users = [
//     {id: 1, name: "Sofia", age: 10},
//     {id: 2, name: "Anna", age: 18},
//     {id: 3, name: "Aleks", age: 24}
// ];
// let info = (array) => {
//     for (let arrayElement of array) {
//         document.write(`<div>User ID: ${arrayElement.id}</div>`);
//         document.write(`<div>Name of user: ${arrayElement.name}</div>`);
//         document.write(`<div>Age of user: ${arrayElement.age}</div>`);
//     }
// }
// info(users);



// -------------------------Tenth task-------------------------
// - створити функцію яка повертає найменьше число з масиву
// let arrayMin = (array) => {
//     let min = array[0];
//     for (let item of array) {
//         if (item < min) {
//             min = item;
//         }
//     }
//     return min;
// };
// let a = arrayMin([0, 1, 10, 4, -2, 0, 6, 10]);
// console.log(a);


// -------------------------Eleventh task-------------------------
// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
// let array = [2, 4, 8, 6];
// let sum = (arr) => {
//     let result = 0;
//     for (let i = 0; i < arr.length; i++) {
//         result += arr[i]
//     }
//     return result;
// };
// console.log(sum(array));



// -------------------------Twelfth task-------------------------
// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
// let swap =(arr,index1,index2) => {
//     if (index1 >= 0 && index1 < arr.length && index2 >= 0 && index2 < arr.length) {
//         let a = arr[index1];
//         arr[index1] = arr[index2];
//         arr[index2] = a;
//     }else {
//         console.log("Entered index(es) is(are) wrong. Try again.");
//     }
//     return arr;
// };
// console.log(swap([11,22,33,44],0,1));


// -------------------------Thirteenth task-------------------------
// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250
// let exchange = (sumUAH,currencyValues,exchangeCurrency) => {
//     for (let i of currencyValues) {
//         if (i.currency === exchangeCurrency) {
//             return sumUAH / i.value;
//         }
//     }
// }
// console.log(exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD'))