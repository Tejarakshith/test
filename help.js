function toggleAnswer(element) {
    let answer = element.nextElementSibling;
    let symbol = element.querySelector('span');
    if (answer.style.display === "block") {
        answer.style.display = "none";
        symbol.textContent = "+";
    } else {
        answer.style.display = "block";
        symbol.textContent = "-";
    }
}
function updateCartCount() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let itemCount = cart.reduce((total, item) => total + item.quantity, 0); // Sum of all item quantities
    let cartCountElement = document.getElementById("cart-count");

    if (cartCountElement) {
        cartCountElement.innerText = itemCount;
    }
}
updateCartCount();