export const addToLocalStorage = id => {
  let carts = {}
  const localStrorageCart = localStorage.getItem('cart-items');
  if (localStrorageCart) {
    carts = JSON.parse(localStrorageCart)
  } 
  
  // add quantity
  const quantity = carts[id]
  if (quantity) {
    const newQuantity = quantity + 1;
    carts[id] = newQuantity;
  } else {
    carts[id] = 1
  }

  localStorage.setItem("cart-items",JSON.stringify(carts))
}