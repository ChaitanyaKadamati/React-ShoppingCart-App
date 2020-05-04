import cart from './cart'
import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

configure({ adapter: new Adapter() })

describe('reducers', () => {
  describe('cart', () => {
    const initialState = {
      addedIds: [],
      quantityById: {}
    }

    it('should provide the initial state', () => {
      expect(cart(undefined, {})).toEqual(initialState)
    })

    it('should handle CHECKOUT_REQUEST action', () => {
      expect(cart({}, { type: 'CHECKOUT_REQUEST' })).toEqual(initialState)
    })

    it('should handle CHECKOUT_FAILURE action', () => {
      expect(cart({}, { type: 'CHECKOUT_FAILURE', cart: 'cart state' })).toEqual('cart state')
    })

    it('should handle ADD_TO_CART action', () => {
      expect(cart(initialState, { type: 'ADD_TO_CART', productId: 3 })).toEqual({
        addedIds: [ 3 ],
        quantityById: { 3: 1 }
      })
    })

    describe('when product is already in cart', () => {
      it('should handle ADD_TO_CART action', () => {
        const state = {
          addedIds: [ 1, 2 ],
          quantityById: { 1: 1, 2: 2 }
        }
        expect(cart(state, { type: 'ADD_TO_CART', productId: 2 })).toEqual({
          addedIds: [ 1, 2 ],
          quantityById: { 1: 1, 2: 3 }
        })
      })
      it('should handle ADD_TO_CART action', () => {
        const state = {
          addedIds: [ 1, 2 ],
          quantityById: { 1: 1, 2: 3 }
        }
        expect(cart(state, { type: 'ADD_TO_CART', productId: 2 })).toEqual({
          addedIds: [ 1, 2 ],
          quantityById: { 1: 1, 2: 4 }
        })
      })
      it('should handle ADD_TO_CART action', () => {
        const state = {
          addedIds: [ 1, 2 ],
          quantityById: { 1: 1, 2: 4 }
        }
        expect(cart(state, { type: 'ADD_TO_CART', productId: 1 })).toEqual({
          addedIds: [ 1, 2 ],
          quantityById: { 1: 2, 2: 4 }
        })
      })
    })
  })
})