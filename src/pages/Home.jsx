import Category from "../components/home/Category";
import Products from "../components/home/Products";
import CategoryProducts from "../components/home/CategoryProducts";
import SliderProduct from "../components/home/SliderProduct";
import Sorting from "../components/home/Sorting";

const Home = ({ colorPage }) => {

  return (
    <div>
      <SliderProduct colorPage={colorPage} />

      <div className="flex items-center justify-between my-5 h-[58px] gap-x-6 w-full">
        <Category colorPage={colorPage}/>
        <CategoryProducts colorPage={colorPage}/>
        <Sorting colorPage={colorPage}/>
      </div>
      <div className="mt-8">
        <Products colorPage={colorPage}/>
      </div>
    </div>
  );
};

export default Home;
