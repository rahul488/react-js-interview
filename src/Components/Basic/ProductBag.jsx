import { useState } from "react";
import { Product } from "../../constants/constant";
import "./ProductBag.css";

const ProductBag = () => {
  const [selectedProduct, setSelectedProduct] = useState(new Set([]));
  const [price,setTotalPrice]= useState(0);
  const selected = selectedProduct;
  const handleClick = (e, product) => {
    if (e.target.checked) {
      if (!selectedProduct.has(product.id)) {
        setSelectedProduct(selected.add(product.id));
        setTotalPrice(price+parseInt(product.price))
      }
    } else {
      if (selectedProduct.has(product.id)) {
        selectedProduct.delete(product.id)
        setSelectedProduct(selected);
        setTotalPrice(price-parseInt(product.price))
      }
    }
  };

  return (
    <div className="product-container">
      {Product.map((product, i) => (
        <div key={product.id} className="product-price">
          <input type="checkbox" onClick={(e) => handleClick(e, product)} />{" "}
          {product.name}-{product.price}
        </div>
      ))}
      <hr />
      <div className="price">
        <h4>Total-{price}</h4>
      </div>
    </div>
  );
};
export default ProductBag;
