import React from 'react'
import PropTypes from 'prop-types'

const soldoutStyle = {
  color : 'red'
}
const Product = ({ price, quantity, title }) => (
  // product component should render title and price
  // It should render title, price and quantity when given inventory
  <div>
    {title} - ${price}
    {(quantity !== undefined && quantity>0) ? <span> x {quantity}</span> : <span style={soldoutStyle}> Sold - Out </span>}
  </div>
)

Product.propTypes = {
  price: PropTypes.number,
  quantity: PropTypes.number,
  title: PropTypes.string
}

export default Product
