import { useState } from "react";
import ProductList from "./ProductList";

const initialProducts = [
  { id: 0, product: "Basketball", price: 12 },
  { id: 1, product: "Baseball", price: 9 },
  { id: 2, product: "tennis Racquet", price: 89 },
];
const WithPropsApp = () => {
  const [products, setProducts] = useState(initialProducts);

  const increasePrice = (event) => {
    const newProducts = [...products];
    //   console.log("increasePrice", event.target.id);
      newProducts[event.target.id].price += 1
      setProducts(newProducts);
  };
  const decreasePrice = (event) => {
    const newProducts = [...products];
    //   console.log("increasePrice", event.target.id);
      newProducts[event.target.id].price -= 1
      setProducts(newProducts);
  };

  return (
    <div>
      <h3>withPropsApp</h3>
          <ProductList
              products={products}
              increasePrice={increasePrice} 
              decreasePrice={decreasePrice} />
    </div>
  );
};

export default WithPropsApp;
