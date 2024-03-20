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
fetch('https://dummyjson.com/recipes')
    .then(res => res.json())
    .then(value => {
        let {recipes} = value;

        let div = document.createElement('div');
        document.body.appendChild(div);

        for (const recipe of recipes) {
            let h3 = document.createElement('h3');
            h3.innerText = recipe.id + '. ' + recipe.name + '.';
            let ingredients = recipe.ingredients;
            let ul = document.createElement('ul');
            ul.innerHTML = '<h3>Ingredients:</h3>';
            for (const ingredient of ingredients) {
                let li = document.createElement('li');
                ul.appendChild(li);
                li.innerText = ingredient;
            }
            let instructions = recipe.instructions;
            let ol = document.createElement('ol');
            ol.innerHTML = '<h3>Instructions:</h3>';
            for (const instruction of instructions) {
                let li = document.createElement('li');
                ol.appendChild(li);
                li.innerText = instruction;
            }
            div.append(h3, ul, ol);
        }
    })
