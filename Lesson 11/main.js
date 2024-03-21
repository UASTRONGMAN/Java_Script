// - взяти https://dummyjson.com/docs/carts та вивести інформацію про всі корзини. Відобразити всі поля кожної корзини.
// fetch('https://dummyjson.com/carts')
//     .then(res => res.json())
//     .then(value => {
//         let {carts} = value;
//
//         let div = document.createElement('div');
//         document.body.appendChild(div);
//         for (const cart of carts) {
//             let h3 = document.createElement('h3');
//             h3.innerText = 'Cart: ' + cart.id + '. ID of User: ' + cart.userId + '.';
//             let h4 = document.createElement('h4');
//             h4.innerText = 'Total products: ' + cart.total + '. Discounted amount of products: ' + cart.discountedTotal + '. Total product in cart:' + cart.totalProducts + '. Total quantity: ' + cart.totalQuantity + '.';
//             div.append(h3, h4);
//             let products = cart.products;
//             for (const product of products) {
//                 let productsInCart = document.createElement('p');
//                 productsInCart.innerText = 'Product ID: ' + product.id + '. Title: ' + product.title + ' - ' + product.price + '$. Quantity in the cart: ' + product.quantity + '. Total amount: ' + product.total + '. Percent of discount: ' + product.discountPercentage + '. Discounted price - ' + product.discountedPrice + '$.';
//                 let img = document.createElement('img');
//                 img.src = product.thumbnail;
//                 div.append(productsInCart, img);
//             }
//         }
//     });


// - взяти https://dummyjson.com/docs/recipes та вивести інформацію про всі рецепти. Інгредієнти повинні бути список під час відображення.
// fetch('https://dummyjson.com/recipes')
//     .then(res => res.json())
//     .then(value => {
//         let {recipes} = value;
//
//         let div = document.createElement('div');
//         document.body.appendChild(div);
//
//         for (const recipe of recipes) {
//             let h3 = document.createElement('h3');
//             h3.innerHTML = recipe.id + '. ' + recipe.name + '.' + '<br>' + 'Meal type - ' + recipe.mealType[0] + '.';
//             let ingredients = recipe.ingredients;
//             let ul = document.createElement('ul');
//             ul.innerHTML = '<h3>Ingredients:</h3>';
//             for (const ingredient of ingredients) {
//                 let li = document.createElement('li');
//                 ul.appendChild(li);
//                 li.innerText = ingredient;
//             }
//             let instructions = recipe.instructions;
//             let ol = document.createElement('ol');
//             ol.innerHTML = '<h3>Instructions:</h3>';
//             for (const instruction of instructions) {
//                 let li = document.createElement('li');
//                 ol.appendChild(li);
//                 li.innerText = instruction;
//             }
//             let p = document.createElement('p');
//             p.innerText = 'Time of preparation: ' + recipe.prepTimeMinutes + ' minutes. Time of cooking: ' + recipe.cookTimeMinutes + ' minutes. Amount of servings - ' + recipe.servings + '. Level of difficulty - ' + recipe.difficulty + '. Cuisune - ' + recipe.cuisine + '. Amount of calories per serving - ' + recipe.caloriesPerServing + ' kkal.';
//             let tags = recipe.tags;
//             let mainTags = document.createElement('ul');
//             mainTags.innerHTML = '<h3>Main tags:</h3>';
//             for (const tag of tags) {
//                 let li = document.createElement('li');
//                 mainTags.appendChild(li);
//                 li.innerText = tag;
//             }
//             let userInfo = document.createElement('p');
//             userInfo.innerText = 'User ID: ' + recipe.userId + '. Rating - ' + recipe.rating + '. Numbers of views - ' + recipe.reviewCount;
//             let img = document.createElement('img');
//             img.src = recipe.image;
//             div.append(h3, ul, ol, p, mainTags, userInfo, img);
//         }
//     })



