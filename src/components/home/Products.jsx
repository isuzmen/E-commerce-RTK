import { useEffect , useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts, getByCategory } from "../../redux/productSlice";
import Loading from "../Loading";
import Product from "./Product";
import ReactPaginate from "react-paginate";

const Products = ({colorPage, category}) => {

  const dispatch = useDispatch()
  const {products,productStatus} = useSelector(state => state.products)

  const [itemOffset, setItemOffset] = useState(0);

  // Simulate fetching items from another resources.
  // (This could be items from props; or items loaded in a local state
  // from an API endpoint with useEffect and useState)
  const itemsPerPage = 12;
  const endOffset = itemOffset + itemsPerPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = products.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(products.length / itemsPerPage);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % products.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  useEffect(() => {
    if(category){
      dispatch(getByCategory(category))
    }else{
      dispatch(getAllProducts())
    }
  },[dispatch,category])
  
  return (
    <div>
      {
        productStatus === "loading" ? <Loading/> :
        <>
          <div className="flex flex-wrap mt-[20px] ml-2">
            {
              currentItems?.map((product,i) => (
                      <Product key={i} colorPage={colorPage} product={product} />
              ))
            }
          </div>

          <ReactPaginate
            className="paginate"
            breakLabel="..."
            nextLabel=">"
            onPageChange={handlePageClick}
            pageRangeDisplayed={5}
            pageCount={pageCount}
            previousLabel="<"
            renderOnZeroPageCount={null}
          />
        </>
      }
    </div>
    
  );
};

export default Products;