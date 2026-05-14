const pizzaCards = document.querySelectorAll('.pizza-card');

pizzaCards.forEach(card => {
  card.addEventListener('click', () => {
    alert('Pizza Added To Cart 🍕');
  });
});
