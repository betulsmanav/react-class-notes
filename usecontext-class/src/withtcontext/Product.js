import React, { useContext } from 'react'
import { ProductContext } from './ProductContext'

const Product = ({ product}) => {
  const {decreasePrice } = useContext(ProductContext);
  const {increasePrice  } = useContext(ProductContext);
  
  
  return (
    <div>
          <h3>Product</h3>
          <p>{product.product}</p>
          <p>{product.price} $</p>
          <button
              onClick={()=>increasePrice(product.id)}
          >Increase</button>
          <button
              onClick={()=>decreasePrice(product.id)}
          >Decrease</button>

    </div>
  )
}

export default Product
