var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var itemName = item;
  var itemPrice = Math.floor(Math.random() * 100) + 1;
  cart.push({ [itemName]: itemPrice });
  console.log(`${itemName} has been added to your cart.`);
  return cart;
}

function viewCart() {
  if (cart.length == 0) {
    return console.log('Your shopping cart is empty.');
  } else {
    var itemsInCart = [];
    for (var i=0; i < cart.length; i++) {
    itemsInCart.push(`${cart[0]} at $${cart[0]}`)
    }
    return console.log(`In your cart, you have ${itemsInCart.join(`, `)}.`)
  }
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
