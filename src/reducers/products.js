import { RECEIVE_PRODUCTS, ADD_TO_CART, CHECKOUT_SUCCESS } from '../constants/ActionTypes'
import { getAllProducts } from '../actions/index'

const initialProducts = { byId: {} };
// Reducers for corresponding Actions
const reducer = (state = initialProducts, action) => {
  switch (action.type) {
    case RECEIVE_PRODUCTS:
      state = Object.assign({}, state)
      if (!state.byId) state.byId = {};
      action.products.forEach(element => {
        state.byId[element.id] = { ...element }
      });
      break;
    case ADD_TO_CART:
      state = { ...state }
      state.byId[action.productId].inventory -= 1
      state.added_to_Cart = true
      break;
    default:
      break;
  }
  return state;
}

export const getProduct = (state, id) => state.byId[id]

export const getVisibleProducts = (state) => (Object.values({ ...state.byId }))

export default reducer;