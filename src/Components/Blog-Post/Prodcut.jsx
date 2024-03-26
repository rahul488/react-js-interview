import { useEffect, useRef, useState } from "react";
import useFetch from "../../hooks/useFetch";
import { getProduct } from "../../constants/constant";
import useInifinityScroll from "../../hooks/useInfiniteScroll";

const Product = () => {
  const [isLast,setLast] = useState(false);
  const { page, setIsFetching } = useInifinityScroll(isLast);
  const { data = {}, loading } = useFetch(getProduct(10 * page));
  const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    setIsFetching(false);
    if(data?.limit == 0) setLast(true)
    if (data?.products?.length) {
      if (data.products) {
        setAllProducts((prevProducts) => [...prevProducts, ...data.products]);
      }
    }
  }, [data?.products,data?.limit]);

  useEffect(() => {
    if(!loading){
        setIsFetching(false);
    }
  },[loading])
 
  return (
    <div className="post-container">
      {allProducts.map((product, index) => (
        <div className="card" key={product.id}>
          <div className="post-title">
            <p>{product.title}</p>
          </div>
          <div className="post-title">
            <p>{product.id}</p>
          </div>
          <div className="post-desc">
            <p>{product.description}</p>
          </div>
          <div className="product-price">{product.price}</div>
        </div>
      ))}
    </div>
  );
};
export default Product;
