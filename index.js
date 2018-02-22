var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  //var itemName = item;
  var itemPrice = Math.floor(Math.random() * 100) + 1;
  cart.push({ [item]: itemPrice });
  console.log(`${item} has been added to your cart.`);
  return cart;
}

function viewCart() {
  var itemsInCart = [];
  if (cart.length == 0) {
    return console.log('Your shopping cart is empty.');
  } else if (cart.length == 1) {
    itemsInCart.push(`${Object.keys(cart[0])} at $${Object.values(cart[0])}`)
    return console.log(`In your cart, you have ${itemsInCart}.`)
  } else if (cart.length == 2) {
    for (var i=0; i < 2; i++) {
      itemsInCart.push(`${Object.keys(cart[i])} at $${Object.values(cart[i])}`)
    }
    return console.log(`In your cart, you have ${itemsInCart.join(' and ')}.`)
  } else {
    for (var i=0; i < cart.length; i++) {
      itemsInCart.push(`${Object.keys(cart[i])} at $${Object.values(cart[i])}`)
    }
    return console.log(`In your cart, you have ${itemsInCart.slice(0, itemsInCart.length - 1).join(', ')}, and ${itemsInCart.slice(-1)}.`)
  }
}

function total() {
  //return sum of 'cart' values with dollar sign
  //iterates through arrat, possibly with Object.values(cart[i])
  var totalOfCart = [];
  for (var i = 0; i < cart.length; i++) {
    totalOfCart.push(Object.values(cart[i])+=);
  }
  //return sum of each value
  return totalOfCart;
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
