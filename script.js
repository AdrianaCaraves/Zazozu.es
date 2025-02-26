let cart = [];

function addToCart(itemName, itemPrice) {
    cart.push({ name: itemName, price: itemPrice });
    updateCart();
}

function updateCart() {
    const cartList = document.querySelector('#cart ul');
    const totalElem = document.querySelector('#total');
    
    cartList.innerHTML = '';
    let total = 0;
    
    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - €${item.price}`;
        cartList.appendChild(li);
        total += item.price;
    });

    totalElem.textContent = `€${total.toFixed(2)}`;
}

// Asignar eventos de agregar al carrito
document.querySelectorAll('.add-to-cart').forEach((button) => {
    button.addEventListener('click', () => {
        const itemName = button.previousElementSibling.previousElementSibling.textContent;
        const itemPrice = parseFloat(button.previousElementSibling.textContent.replace('€', ''));
        addToCart(itemName, itemPrice);
    });
});
