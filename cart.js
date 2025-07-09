
let cart = [];
function addToCart(productName, price) {
    cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push({ name: productName, price: price });
    localStorage.setItem('cart', JSON.stringify(cart));
    alert(`${productName} تمت إضافته إلى السلة.`);
}
