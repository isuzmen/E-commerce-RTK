import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts, getByCategory } from "../../redux/productSlice";
import Loading from "../Loading";
import Product from "./Product";
import ReactPaginate from "react-paginate";

const Products = ({ colorPage, category, sort }) => {
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.loading.isLoading);
  const { products } = useSelector((state) => state.products);
  const { filteredProducts } = useSelector((state) => state.search);
  const displayedProducts = filteredProducts.length > 0 ? filteredProducts : products

  const [itemOffset, setItemOffset] = useState(0);

  const itemsPerPage = 12;
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = displayedProducts.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(displayedProducts.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % displayedProducts.length;
    setItemOffset(newOffset);
  };

  useEffect(() => {
    if (category) {
      dispatch(getByCategory(category));
    } else {
      dispatch(getAllProducts());
    }
  }, [dispatch, category]);

  return (
    <div>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <div className="flex flex-wrap mt-[20px] ml-2">
            {currentItems
              .sort((a, b) => (sort === "Increment" ? a.price - b.price : sort === "Decrement" ? b.price - a.price : ""))
              ?.map((product, i) => <Product key={i} colorPage={colorPage} product={product} />)}
          </div>
          <ReactPaginate className="paginate" breakLabel="..." nextLabel=">" onPageChange={handlePageClick} pageRangeDisplayed={5} pageCount={pageCount} previousLabel="<" renderOnZeroPageCount={null} />
        </>
      )}
    </div>
  );
};

export default Products;
