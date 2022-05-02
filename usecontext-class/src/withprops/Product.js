import React from 'react'
import ProductList from './ProductList'

const Product = ({product,increasePrice,decreasePrice}) => {
  return (
      <div>
          <h3>Product</h3>
          <p>{product.product}</p>
          <p>{product.price} $</p>
          <button
              id={product.id}
              onClick={increasePrice}
          >Increase</button>
          <button
              id={product.id}
              onClick={decreasePrice}
          >Decrease</button>

    </div>
  )
}

export default Product
