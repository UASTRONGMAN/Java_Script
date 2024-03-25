//Стоврити форму з трьома полями для name,surname,age та кнопкою. При натисканні на кнопку зчитати данні з полів, та вивести об'єкт в документ. Іншими словами : заповниои форму, натиснули кнопку, під формою з'явився блок з вашим об'єктом
// let div = document.createElement('div')
// document.body.appendChild(div)
// let form1 = document.forms.form;
// let name = form1.name;
// let surname = form1.surname;
// let age = form1.age;
// form1.onsubmit = function (e) {
//     e.preventDefault()
//     div.innerText = `${name.value} ${surname.value}. Age - ${age.value}`;
// };


// є сторінка, на якій є блок, я кому знаходиьтся цифра. написати код, який при кожному перезавантажені сторінки буде додавати до неї +1
// let start = 0;
//
// function counter (num_start) {
//     let get_number = JSON.parse(localStorage.getItem('number')) || start;
//     get_number += 1;
//     let set_number = JSON.stringify(localStorage.setItem('number', get_number))
//     let block = document.createElement('div');
//     document.body.appendChild(block);
//     block.innerText = get_number;
//     console.log(block)
// }
// counter(start);


// Є сторінка index.html (назва довільна), при відвідуванні якої в локальне сховще, в масив sessions зберігається інформація про дату та час відвідування сторінки. Є ще сторінка sessions.html (назва довільна), при відвідуванні якої потрібно відмалювати всю інформацію про відвідування сторінки index.html. Інфу НЕ виводити в консоль, а побудувати дом структуру під кожну сессію.
// function visitTime () {
//     let dateArray = JSON.parse(localStorage.getItem('visitTime')) || [];
//     let date = new Date();
//     let month = new Date().getMonth() + 1;
//     let dateOutput = date.getDate() + '.' + month + '.' + date.getFullYear() + '.' + 'Time:' + date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();
//     dateArray.push(dateOutput)
//     localStorage.setItem('visitTime', JSON.stringify(dateArray))
// }
// visitTime()


//зробити масив на 100 об'єктів та дві кнопки prev next
// let arr = [];
// let prev = document.createElement('button');
// let next = document.createElement('button');
// prev.innerText = 'Prev';
// next.innerText = 'Next';
// document.body.append(prev, next)
// for (let i = 1; i <= 100; i++) {
//     arr.push(i)
// }
// let start = arr[0];
// let step = 10;
// limit = start + step;
// let ul = document.createElement('ul');
// document.body.appendChild(ul);
//
// // при завантажені сторінки з'являються перші 10 об'єктів.
// for (let i = start; i < limit; i++) {
//     let li = document.createElement('li');
//     ul.appendChild(li);
//     li.innerText = i;
// }
// // При натисканні next виводяться настпні 10 об'єктів
// next.onclick = function () {
//     start = limit;
//     limit += step;
//     ul.innerHTML = '';
//     for (let i = start; i < limit; i++) {
//         if (i <= arr.length) {
//             let li = document.createElement('li');
//             ul.appendChild(li);
//             li.innerText = i;
//         }
//     }
// }
// // При натисканні prev виводяться попередні 10 об'єктів
// prev.onclick = function () {
//     start -= step;
//     limit = start + step;
//     ul.innerHTML = '';
//     for (let i = start; i < limit; i++) {
//         if (i > arr[0]) {
//             let li = document.createElement('li');
//             ul.appendChild(li);
//             li.innerText = i;
//         }
//     }
// }


// - Створити довільний елемент з id = text та створити кнопку.Використовуючи JavaScript, зробіть так, щоб при натисканні на кнопку зникав елемент з id="text".
// let div = document.getElementById('text')
// let button = document.createElement('button')
// document.body.appendChild(button)
// button.innerText = 'Clear page';
// button.onclick = function () {
//     // e.preventDefault();
//     div.style.display = 'none'
// }


//- створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача
// let ageCheck = document.forms.ageCheck;
// let input = ageCheck.age;
//
// ageCheck.onsubmit = function (e) {
//     let h2 = document.createElement('h2');
//     document.body.appendChild(h2);
//     if (input.value < 18) {
//         h2.innerText = "You haven't access to this site."
//     }else if (input.value >= 18) {
//         h2.innerText = "Enjoy your free time."
//     }
//     e.preventDefault()
// }

