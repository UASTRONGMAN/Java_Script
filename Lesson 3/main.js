// -------------------------First task-------------------------
// for (let i = 1; i <= 10; i++) {
//     document.write('<div>Okten</div>');
// }


// -------------------------Second task-------------------------
// for (let i = 1; i <= 10; i++) {
//     document.write('<div>This is block #' + i + '</div>');
// }


// -------------------------Third task-------------------------
// let i = 1;
// while (i <= 20) {
//     document.write('<h1>Okten</h1>');
//     i++;
// }
//
//
// -------------------------Fourth task-------------------------
// let i = 1;
// while (i <= 20) {
//     document.write('<h1>This is block #' + i + '</h1>');
//     i++;
// }


// -------------------------Fifth task-------------------------
// document.write(`<ul>`);
// let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];
// for (let listOfItem of listOfItems) {
//     document.write(`<li>${listOfItem}</li>`)
// }
// document.write(`</ul>`);


// -------------------------Sixth task-------------------------
// let products = [{
//     title: 'milk',
//     price: 22,
//     image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
// }, {
//     title: 'juice',
//     price: 27,
//     image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
// }, {
//     title: 'tomato',
//     price: 47,
//     image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
// }, {
//     title: 'tea',
//     price: 15,
//     image: 'https://yogiproducts.com/wp-content/uploads/2009/03/YT-US-CAR-RelaxedMind-C23-202201-V2-3DFront_withGlow-300DPI-1.png'
// },];
// for (let product of products) {
//     document.write(
//         `<div class="product-card">
//         <h3 class="product-title">${product.title}. Price - ${product.price}</h3>
//         <img src="${product.image}" alt="" class="product-image">
//         </div>`
//     )
// }


// -------------------------Seventh task-------------------------
// let users = [
//     {name: 'vasya', age: 31, status: false},
//     {name: 'petya', age: 30, status: true},
//     {name: 'kolya', age: 29, status: true},
//     {name: 'olya', age: 28, status: false},
//     {name: 'max', age: 30, status: true},
//     {name: 'anya', age: 31, status: false},
//     {name: 'oleg', age: 28, status: false},
//     {name: 'andrey', age: 29, status: true},
//     {name: 'masha', age: 30, status: true},
//     {name: 'olya', age: 31, status: false},
//     {name: 'max', age: 31, status: true}
// ];
// console.log('True status:')
// for (let user of users) {
//     if (user.status === true) {
//         console.log(user.name)
//     }
// }
// console.log('False status:')
// for (let user of users) {
//     if (user.status !== true) {
//         console.log(user.name)
//     }
// }
// console.log('More than 30 years old:')
// for (let user of users) {
//     if (user.age > 30) {
//         console.log(user.name)
//     }
// }