// - Знайти та вивести довижину настипних стрінгових значень
//     'hello world', 'lorem ipsum', 'javascript is cool'
// console.log('hello world'.length);
// console.log('lorem ipsum'.length);
// console.log('javascript is cool'.length);


//- Перевести до великого регістру наступні стрінгові значення
//       'hello world', 'lorem ipsum', 'javascript is cool'
// console.log('hello world'.toUpperCase());
// console.log('lorem ipsum'.toUpperCase());
// console.log('javascript is cool'.toUpperCase());


//- Перевести до нижнього регістру настипні стрінгові значення
//       'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
// console.log('HELLO WORLD'.toLowerCase());
// console.log('LOREM IPSUM'.toLowerCase());
// console.log('JAVASCRIPT IS COOL'.toLowerCase());


//- Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
// let str = ' dirty string   ';
// console.log(str.substring(str.indexOf(' ') + 1, str.indexOf(' ', 7)));

//- Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
// let str = 'Ревуть воли як ясла повні';
// let split = (str) => str.split(' ');
// console.log(split(str));


//- є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.
// let numbers = [10,8,-7,55,987,-1011,0,1050,0];
// console.log(numbers.map(value => value.toString()));


// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
// let nums = [11,21,3];
// let sorted = (arr, direction) => {
//     if (direction === 'ascending') {
//         arr.sort((a, b) => {
//             return a - b;
//         });
//     }else if (direction === 'descending') {
//         arr.sort((a, b) => {
//             return b - a;
//         });
//     }
//     return arr;
// }
// console.log(sorted(nums, 'ascending'));


//- є масив
//  -- відсортувати його за спаданням за monthDuration
//  -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
//  -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// let sort_duration = coursesAndDurationArray.sort((a, b) => b.monthDuration - a.monthDuration);
// console.log(sort_duration);

// let filter_duration = coursesAndDurationArray.filter(value => value.monthDuration > 5);
// console.log(filter_duration);

// let map = coursesAndDurationArray.map((value, index) => {
//     return {
//         id : index + 1,
//         title : value.title,
//         monthDuration : value.monthDuration
//     }
// });
// console.log(map)


// описати колоду карт (від 6 до туза без джокерів)
// let cards = [
//     {cardSuit: 'spade', value: 6, color: 'black'},
//     {cardSuit: 'spade', value: 7, color: 'black'},
//     {cardSuit: 'spade', value: 8, color: 'black'},
//     {cardSuit: 'spade', value: 9, color: 'black'},
//     {cardSuit: 'spade', value: 10, color: 'black'},
//     {cardSuit: 'spade', value: 'jack', color: 'black'},
//     {cardSuit: 'spade', value: 'queen', color: 'black'},
//     {cardSuit: 'spade', value: 'king', color: 'black'},
//     {cardSuit: 'spade', value: 'ace', color: 'black'},
//
//     {cardSuit: 'diamond', value: 6, color: 'red'},
//     {cardSuit: 'diamond', value: 7, color: 'red'},
//     {cardSuit: 'diamond', value: 8, color: 'red'},
//     {cardSuit: 'diamond', value: 9, color: 'red'},
//     {cardSuit: 'diamond', value: 10, color: 'red'},
//     {cardSuit: 'diamond', value: 'jack', color: 'red'},
//     {cardSuit: 'diamond', value: 'queen', color: 'red'},
//     {cardSuit: 'diamond', value: 'king', color: 'red'},
//     {cardSuit: 'diamond', value: 'ace', color: 'red'},
//
//     {cardSuit: 'heart', value: 6, color: 'red'},
//     {cardSuit: 'heart', value: 7, color: 'red'},
//     {cardSuit: 'heart', value: 8, color: 'red'},
//     {cardSuit: 'heart', value: 9, color: 'red'},
//     {cardSuit: 'heart', value: 10, color: 'red'},
//     {cardSuit: 'heart', value: 'jack', color: 'red'},
//     {cardSuit: 'heart', value: 'queen', color: 'red'},
//     {cardSuit: 'heart', value: 'king', color: 'red'},
//     {cardSuit: 'heart', value: 'ace', color: 'red'},
//
//     {cardSuit: 'clubs', value: 6, color: 'black'},
//     {cardSuit: 'clubs', value: 7, color: 'black'},
//     {cardSuit: 'clubs', value: 8, color: 'black'},
//     {cardSuit: 'clubs', value: 9, color: 'black'},
//     {cardSuit: 'clubs', value: 10, color: 'black'},
//     {cardSuit: 'clubs', value: 'jack', color: 'black'},
//     {cardSuit: 'clubs', value: 'queen', color: 'black'},
//     {cardSuit: 'clubs', value: 'king', color: 'black'},
//     {cardSuit: 'clubs', value: 'ace', color: 'black'}
// ];


// - знайти піковий туз
// let find = cards.find(value => value.cardSuit === 'spade' && value.value === 'ace');
// console.log(find);


// - всі шістки
// let filter_cards = cards.filter(value => value.value === 6);
// console.log(filter_cards);


// - всі червоні карти
// let filter_red_cards = cards.filter(value => value.color === 'red');
// console.log(filter_red_cards);


// - всі буби
// let filter_diamond = cards.filter(value => value.cardSuit === 'diamond');
// console.log(filter_diamond);


// - всі трефи від 9 та більше
// let filter_clubs = cards.filter(value => value.cardSuit === 'clubs').slice(3);
// console.log(filter_clubs);


// Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
// let reduce = cards.reduce((accumulator, suit) => {
//     if (suit.cardSuit === 'spade') {
//         accumulator.spades.push(suit);
//     }else if (suit.cardSuit === 'diamond') {
//         accumulator.diamonds.push(suit)
//     }else if (suit.cardSuit === 'heart') {
//         accumulator.hearts.push(suit)
//     }else if (suit.cardSuit === 'clubs') {
//         accumulator.clubs.push(suit)
//     }
//     return accumulator;
// }, {spades:[], diamonds:[], hearts:[], clubs:[]});
// console.log(reduce)


// взяти з arrays.js (який лежить в папці 2023 plan) масив coursesArray
// let coursesArray = [
//     {
//         title: 'JavaScript Complex',
//         monthDuration: 5,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
//     },
//     {
//         title: 'Java Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'angular',
//             'aws',
//             'docker',
//             'git',
//             'java core',
//             'java advanced']
//     },
//     {
//         title: 'Python Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'angular',
//             'aws',
//             'docker',
//             'python core',
//             'python advanced']
//     },
//     {
//         title: 'QA Complex',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
//     },
//     {
//         title: 'FullStack',
//         monthDuration: 7,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'react',
//             'angular',
//             'aws',
//             'docker',
//             'git',
//             'node.js',
//             'python',
//             'java']
//     },
//     {
//         title: 'Frontend',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
//     }
// ];


// --написати пошук всіх об'єктів, в який в modules є sass
// let modules = coursesArray.forEach(value => value.modules === 'sass');
// console.log(filter_modules);
// let researchSass = coursesArray.forEach(value => {
//     for (let item of value.modules) {
//         if (item === 'sass') {
//             console.log(value)
//         }
//     }
//     return value;
// });
//
//
//
// let researchDocker = coursesArray.forEach(value => {
//     for (let item of value.modules) {
//         if (item === 'docker') {
//             console.log(value)
//         }
//     }
//     return value;
// });
