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

export const removeLocalStorageDataByID = id => {
  // get previous value from the local storage
  const storedCart = localStorage.getItem("cart-items")

  const shoppingCart = JSON.parse(storedCart)

  if (shoppingCart) {
    if (id in shoppingCart) {
      delete shoppingCart[id]
      localStorage.setItem("cart-items",JSON.stringify(shoppingCart))
    }
  }
}


export const getDataFromLocalStorage = () => {
  const getData = localStorage.getItem("cart-items" || {})
  return JSON.parse(getData)
}

export const removeLocalStorageData = () => {
  localStorage.clear()
}