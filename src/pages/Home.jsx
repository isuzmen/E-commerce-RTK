import Category from "../components/home/Category"
import Products from "../components/home/Products"
import SliderProduct from "../components/home/SliderProduct"
import Sorting from "../components/home/Sorting"

const Home = ({colorPage}) => {
  return (
    <div>
      <SliderProduct colorPage={colorPage}/>
      <div className="flex items-center justify-between my-5">
        <div className="flex w-full">
          <Category colorPage={colorPage}/>
          <Products colorPage={colorPage}/>
        </div>
        <Sorting colorPage={colorPage}/>
      </div>
    </div>
  )
}

export default Home
