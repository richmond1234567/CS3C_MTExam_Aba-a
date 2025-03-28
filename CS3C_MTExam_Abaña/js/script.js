// Initialize an empty cart and total price
let cart = [];
let totalPrice = 0;

// Function to add a product to the cart
function addToCart(productName, productPrice) {
    // Create a cart item object
    const cartItem = {
        name: productName,
        price: productPrice,
        quantity: 1
    };

    // Check if the product is already in the cart
    const existingItem = cart.find(item => item.name === productName);
    if (existingItem) {
        // If it exists, increase the quantity
        existingItem.quantity += 1;
    } else {
        // If it doesn't exist, add it to the cart
        cart.push(cartItem);
    }

    // Update the total price
    totalPrice += productPrice;

    // Update the cart display
    updateCartDisplay();
}

// Function to update the cart display
function updateCartDisplay() {
    const cartList = document.getElementById('cart-list');
    const totalPriceElement = document.getElementById('total-price');

    // Clear the current cart list
    cartList.innerHTML = '';

    // Populate the cart list with items
    cart.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = `${item.name} - Qty: ${item.quantity} - Price: Php ${item.price * item.quantity}`;
        cartList.appendChild(listItem);
    });

    // Update the total price display
    totalPriceElement.textContent = `Php ${totalPrice.toFixed(2)}`;
}