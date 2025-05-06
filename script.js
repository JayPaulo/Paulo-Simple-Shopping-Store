let cart = [];
let totalPrice = 0;
function addToCart(productName, productPrice) {
    cart.push({ name: productName, price: productPrice });

    totalPrice += productPrice;

    updateCartDisplay();
}

function updateCartDisplay() {
    const cartItemsList = document.getElementById('cart-items');
    const totalPriceElement = document.getElementById('total-price');
    
    cartItemsList.innerHTML = '';

    cart.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = `${item.name} - Php ${item.price.toFixed(2)}`;
        cartItemsList.appendChild(listItem);
    });

    totalPriceElement.textContent = `Total: Php ${totalPrice.toFixed(2)}`;

    const cartCount = document.querySelector('.cart span');
    cartCount.textContent = `Cart (${cart.length})`;
}
