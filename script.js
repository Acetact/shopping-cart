// JavaScript logic for quantity update, price calculation, clearing cart, and displaying message
function updateQuantity(change) {
  var quantityInput = document.getElementById("quantity-input");
  var currentQuantity = parseInt(quantityInput.value);
  var newQuantity = currentQuantity + change;

  // Ensure the new quantity is at least 1
  newQuantity = Math.max(newQuantity, 1);

  quantityInput.value = newQuantity;

  // Update the total price based on the quantity
  updateTotalPrice(newQuantity);
}

function updateTotalPrice(quantity) {
  var productPrice = 5.0; // Assuming the product price is $5.00
  var totalPrice = (quantity * productPrice).toFixed(2); // Calculate total price with two decimal places
  document.getElementById("total-price").textContent = totalPrice;
}

function clearCart() {
  // Logic to clear the cart and display a message goes here
  var cartMessage = document.getElementById("cart-message");
  cartMessage.textContent = "Cart cleared!";
  setTimeout(function () {
    cartMessage.textContent = "";
  }, 3000); // Clear the message after 3 seconds

  // Reset the quantity and total price
  document.getElementById("quantity-input").value = 1;
  document.getElementById("total-price").textContent = "5.00";
}
