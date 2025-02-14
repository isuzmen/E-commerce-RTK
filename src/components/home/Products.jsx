import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../../redux/productSlice";
import Loading from "../Loading";
import Product from "./Product";

const Products = ({colorPage}) => {

  const dispatch = useDispatch()
  const {products,productStatus} = useSelector(state => state.products)

  useEffect(() => {
    dispatch(getAllProducts())
  },[dispatch])
  
  return (
    <div>
      {
        productStatus === "loading" ? <Loading/> :
        <div className="flex flex-wrap mt-[20px] ml-3">
          {
            products?.map((product,i) => (
                    <Product key={i} product={product} />
            ))
          }
        </div>
      }
    </div>
    
  );
};

export default Products;