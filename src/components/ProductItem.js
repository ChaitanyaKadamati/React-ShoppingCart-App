import React from 'react'
import PropTypes from 'prop-types'
import Product from './Product'

const soldOutStyle = {
  color: 'red',
  'fontSize': '15px',
  'verticalAlign': 'middle'
}
const ProductItem = ({ product, onAddToCartClicked }) => (
  <div style={{ marginBottom: 20 }}>
    <Product price={product.price} quantity={product.inventory} title={product.title}  ></Product>
    
    {/* // should have a button with message 'Add to cart' */}
    <button onClick={onAddToCartClicked} disabled={product.inventory === 0} >
      {product.inventory > 0 ? 'Add to cart' : 'Sold Out'}</button>


    {/* // Should diable button only when no products are there in the cart. */}
    {/* should call an action when button is clicked. */}
    {/* // should disable the the button when the inventory is empty */}
    {/* // should change the message on the button to 'Sold Out' when inventory is empty */}

  </div>
)

ProductItem.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    inventory: PropTypes.number.isRequired
  }).isRequired,
  onAddToCartClicked: PropTypes.func.isRequired
}

export default ProductItem