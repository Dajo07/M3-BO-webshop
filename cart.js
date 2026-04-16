const cart = JSON.parse(localStorage.getItem('cart')) || [];
const list = document.querySelector('#products');

function fillCartList() {
  let totalPrice = 0;
  cart.forEach(element => {
    let row = document.createElement('tr');
    let price = element.price * element.amount;
    totalPrice += price;
    row.innerHTML = `
      <td>${element.name}</td>
      <td>${element.amount}</td>
      <td>€${price}</td>
    `;
    list.appendChild(row);
  });
  let totalRow = document.createElement('tr');
  totalRow.innerHTML = `
      <td colspan="2"><strong>Totaal</strong></td>
      <td><strong>€${totalPrice}</strong></td>
    `;

  list.appendChild(totalRow);

}

fillCartList();
