import {
  ADD_TO_CART,
  CHECKOUT_REQUEST,
  CHECKOUT_FAILURE
} from '../constants/ActionTypes'

const initialState = {
  addedIds: [],
  quantityById: {}
}

// Reducers for corresponding Actions
const cart = (state = initialState, action) => {
  switch (action.type) {
    case CHECKOUT_REQUEST:
      return initialState;
    case CHECKOUT_FAILURE:
      return action.cart
    case ADD_TO_CART:
      let addedIds = []
      let quantityById = {}
      if (state.addedIds !== undefined) {
        let items = [...state.addedIds]
        items.forEach(x => { addedIds.push(x); quantityById[x] = state.quantityById[x]; })
      }
      let found = addedIds.find(x => x === action.productId)
      if (found === undefined) {
        addedIds.push(action.productId)
        quantityById[action.productId] = 1;
      } else {
        quantityById[action.productId]++
      }
      state = {
        addedIds, quantityById
      }
      break
    default:
      state = initialState;
  }
  return state;
}
export default cart