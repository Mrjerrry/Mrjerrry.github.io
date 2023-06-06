document.addEventListener('DOMContentLoaded', function() {
    var addToCartButtons = document.getElementsByClassName('add-to-cart');
    var cartCount = document.getElementById('cart-count');
    var cartTotal = document.getElementById('cart-total');
    var cartLink = document.getElementById('cart-link');
    var cartContent = document.getElementById('cart-content');
    var cartItems = document.getElementById('cart-items');
    var checkoutButton = document.getElementById('checkout');

    var count = 0;
    var total = 0.00;

    for (var i = 0; i < addToCartButtons.length; i++) {
        addToCartButtons[i].addEventListener('click', function() {
            count++;
            cartCount.innerHTML = count;

            var price = parseFloat(this.getAttribute('data-price'));
            total += price;
            cartTotal.innerHTML = '$' + total.toFixed(2);

            var productName = this.parentNode.querySelector('h2').innerHTML;
            var listItem = document.createElement('li');
            listItem.innerHTML = productName;
            cartItems.appendChild(listItem);
        });
    }

    cartLink.addEventListener('click', function(event) {
        event.preventDefault();
        cartContent.style.display = 'block';
    });

    checkoutButton.addEventListener('click', function() {
        alert('Dziękujemy za zakupy! Całkowity koszt: $' + total.toFixed(2));
        count = 0;
        total = 0.00;
        cartCount.innerHTML = count;
        cartTotal.innerHTML = '$' + total.toFixed(2);
        cartItems.innerHTML = '';
        cartContent.style.display = 'none';
    });
});
