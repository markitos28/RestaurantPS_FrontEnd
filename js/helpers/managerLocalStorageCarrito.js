// Obtener el carrito de compras del almacenamiento local o crear uno nuevo si no existe
//var cart = JSON.parse(localStorage.getItem('cart')) || [];

// Función para agregar un producto al carrito
function addToCart(product) {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  cart.push(product);
  console.log(cart);
  localStorage.setItem('cart', JSON.stringify(cart));
}

// Función para eliminar un producto del carrito
function removeFromCart(productId) {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  let productIndex;
  console.log(cart);
  cart.forEach((mercaderia, index) => {
    if(mercaderia.id == productId)
    {
      productIndex= index;
    }
  });

  if(productIndex != null)
  {
    cart.splice(productIndex, 1);
    localStorage.setItem('cart', JSON.stringify(cart));
  }
}

// Función para obtener los productos del carrito
function getCart() {
  var cart = JSON.parse(localStorage.getItem('cart')) || [];
  return cart;
}

// Función para vaciar el carrito
function clearCart() {
  //cart = [];
  localStorage.removeItem('cart');
  console.log(getCart());
}

function addToDelivery(product) {
  localStorage.setItem('delivery', JSON.stringify(product));
}

function removeFromDelivery() {
  localStorage.removeItem('delivery');
}

function getDelivery() {
  var delivery = JSON.parse(localStorage.getItem('delivery')) ;
  return delivery;
}

export {addToCart, removeFromCart, getCart,clearCart, addToDelivery, removeFromDelivery, getDelivery};