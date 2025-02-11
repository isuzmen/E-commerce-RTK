import { IoIosSearch } from "react-icons/io";
import { CiHeart } from "react-icons/ci";
import { FaBasketShopping } from "react-icons/fa6";

const Header = () => {
  
  return (
    <div className="flex justify-between items-center my-5">
      <div>
        <p className="text-5xl font-sans font-[400]"> Traced-e</p>
      </div>
      <div className="flex items-center gap-2">
        <div className="flex items-center border border-indigo-900 p-2 rounded-full bg-purple-300 mr-3">
          <input className="border-none outline-none bg-purple-300 text-white placeholder-white" type="text" placeholder="Search"/>
          <IoIosSearch size={30}/>
        </div>
        <CiHeart size={30}/>
        <div className="relative">
          <div className="absolute -top-3 -right-3 bg-purple-800 text-white rounded-full w-5 h-5 flex items-center justify-center">3</div>
          <FaBasketShopping size={30}/>
        </div>
      </div>
    </div>
    
  )
}

export default Header