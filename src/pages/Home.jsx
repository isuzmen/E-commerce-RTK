import Category from "../components/home/Category";
import Products from "../components/home/Products";
import CategoryProducts from "../components/home/CategoryProducts";
import SliderProduct from "../components/home/SliderProduct";
import Sorting from "../components/home/Sorting";
import { useState } from "react";

const Home = ({ colorPage }) => {

  const [category,setCategory] = useState('')
  const [sort,setSort] = useState('')

  return (
    <div>
      <SliderProduct colorPage={colorPage} />

      <div className="flex items-center justify-between my-5 h-[58px] gap-x-6 w-full">
        <Category colorPage={colorPage} setCategory={setCategory}/>
        <CategoryProducts colorPage={colorPage}/>
        <Sorting colorPage={colorPage} setSort={setSort}/>
      </div>
      <div className="mt-8">
        <Products colorPage={colorPage} category={category} sort={sort}/>
      </div>
    </div>
  );
};

export default Home;
