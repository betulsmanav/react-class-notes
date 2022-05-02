import React, {useContext} from 'react'
import { ProductContext} from './ProductContext'
import Product from './Product'

const ProductList = () => {
  const { products } = useContext(ProductContext);
  // console.log(products);
  return (
    <div>
       {
        products.map((product) => (
          
          <Product
            key={product.id}
            product={product}
            />
        ))
      }
    </div>
  )
}

export default ProductList
