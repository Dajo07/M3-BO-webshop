function filterProducten(categorie) {
    const producten = document.querySelectorAll('.product');

    producten.forEach(function (product) {
        if (product.dataset.categorie === categorie || categorie === 'alles') {
            product.style.display = 'flex';
        }
        else {
            product.style.display = 'none';
        }
    });
}
const zoekbalk = document.getElementById('zoek');
zoekbalk.addEventListener('input', function () {
    const zoekterm = zoekbalk.value.toLowerCase();
    const producten = document.querySelectorAll('.product');

    producten.forEach(function (product) {
        const naam = product.querySelector('.producttitle').textContent.toLowerCase();
        if (naam.includes(zoekterm)) {
            product.style.display = 'flex';
        } else {
            product.style.display = 'none';
        }
    });
})

function addToCart(productName, price) {
    // Haal de huidige cart op, of begin met een lege array
    const cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Zoek of het product al in de cart zit
    let index = cart.findIndex((element) => element.name === productName);

    if (index >= 0) {
        // Product bestaat al: verhoog het aantal
        cart[index].amount += 1;
    } else {
        // Nieuw product: voeg toe aan de array
        cart.push({
            name: productName,
            price: price,
            amount: 1
        });
    }

    // Sla de bijgewerkte cart op
    localStorage.setItem('cart', JSON.stringify(cart));
}