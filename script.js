function filterproducten(categorie) {
    const producten = document.querySelectorAll('.product');

    producten.forEach(function (product) {
        if (product.dataset.categorie === categorie || categorie === 'alles') {
            product.style.display = 'flex'; // Toon het product
        } else {
            product.style.display = 'none'; // Verberg het product
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
});