import { combineReducers } from 'redux'
import cart, * as fromCart from './cart'
import products, * as fromProducts from './products'

export default combineReducers({
  cart,
  products
})

// Reducers for corresponding Actions
export const getTotal = (state) => {
  let result = 0;
  state.cart.addedIds.forEach(element => {
    result += (state.products.byId[element].price * state.cart.quantityById[element])
  });
  return result.toString();
}

export const getCartProducts = (state) => {
  let result = [];
  state.cart.addedIds.forEach(element => {
    result.push({
      title : state.products.byId[element].title,
      price: state.products.byId[element].price,
      id: state.products.byId[element].id,
      quantity: state.cart.quantityById[element]
    })
  });
  return result;
}
