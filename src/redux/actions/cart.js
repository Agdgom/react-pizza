export const addPizzaToCart = (pizzaObj) => ({
  type: 'ADD_PIZZA_CART',
  payload: pizzaObj,
});

export const clearCart = () => ({
  type: 'CLEAR_CART',
});
export const removeCartItem = (payload) => ({
  type: 'REMOVE_CART_ITEM',
  payload,
});
export const plusCartItem = (payload) => ({
  type: 'PLUS_CART_ITEM',
  payload,
});
export const minusCartItem = (payload) => ({
  type: 'MINUS_CART_ITEM',
  payload,
});
