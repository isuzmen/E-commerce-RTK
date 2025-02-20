import { IoIosSearch } from "react-icons/io";
import { CiHeart } from "react-icons/ci";
import { FaBasketShopping } from "react-icons/fa6";
import { CiLight } from "react-icons/ci";
import { MdDarkMode } from "react-icons/md";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Drawer } from "@mui/material";
import { removeFromBasket, clearBasket, calcBasket } from "../../redux/cardSlice";
import { useNavigate } from "react-router-dom";

const Header = ({ onColorChange }) => {
  const [colorPage, setColorPage] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const { products, totalAmount } = useSelector((store) => store.card);
  const dispatch = useDispatch();
  const navigate = useNavigate()

  useEffect(() => {
    if (colorPage) {
      document.body.classList.add("bg-black", "text-white");
      document.body.classList.remove("bg-white", "text-indigo-600");
    } else {
      document.body.classList.add("bg-white", "text-indigo-600");
      document.body.classList.remove("bg-black", "text-white");
    }
    onColorChange(colorPage);

    
  }, [colorPage, onColorChange]);
  
  useEffect(()=> {
    dispatch(calcBasket())
  },[])

  const changePageColor = () => {
    setColorPage((prev) => !prev);
  };

  return (
    <div className="flex justify-between items-center my-5 p-5 transition-all duration-500">
      <div onClick={() => navigate("/")}>
        <p className="text-5xl font-sans font-[400] cursor-pointer">Traced-e</p>
      </div>
      <div className="flex items-center gap-2">
        <div
          className={`flex items-center border p-2 rounded-full ${
            colorPage ? "bg-purple-600 border-white" : "bg-purple-300 border-black"
          }`}
        >
          <input
            className={`border-none outline-none ${
              colorPage ? "bg-purple-600 text-indigo-800 placeholder-white" : "bg-purple-300 text-indigo-800 placeholder-indigo-800"
            }`}
            type="text"
            placeholder="Search"
          />
          <IoIosSearch size={30} className={`${colorPage ? "text-white" : "text-black"}`} />
        </div>
        {colorPage ? (
          <MdDarkMode size={30} onClick={changePageColor} className="cursor-pointer text-white" />
        ) : (
          <CiLight size={30} onClick={changePageColor} className="cursor-pointer text-black" />
        )}
        <CiHeart size={30} className={`${colorPage ? "text-white" : "text-black"}`} />

        <div className="relative">
          <div
            className={`absolute -top-3 -right-3 rounded-full w-6 h-6 flex items-center justify-center border text-sm font-bold ${
              colorPage ? "bg-purple-600 text-white border-white" : "bg-purple-600 text-white border-black"
            }`}
          >
            {products.length}
          </div>
          <div className="cursor-pointer" onClick={() => setIsDrawerOpen(true)}>
            <FaBasketShopping size={35} className={`${colorPage ? "text-white" : "text-black"}`} />
          </div>
        </div>
      </div>

  <Drawer anchor="right" open={isDrawerOpen} onClose={() => setIsDrawerOpen(false)}>
    <div className={`w-100 h-full flex flex-col border ${colorPage ? "bg-black text-fuchsia-200 border-l-fuchsia-100" : "bg-purple-300 text-purple-950 border-l-fuchsia-950"}`}>
    
    <h2 className="text-3xl font-bold mb-8 p-3">Your Basket</h2>

    <div className="flex-1 overflow-y-auto p-3">
      {products.length === 0 ? (
        <p className="text-lg text-center mt-10">Your basket is empty</p>
      ) : (
        products.map((item) => (
          <div key={item.id} className="flex items-center gap-6 mb-6 border-b pb-4">
            <img src={item.images[0]} alt={item.title} className="w-[120px] h-[120px] rounded-lg object-cover" />
            <div className="flex-1">
              <p className="text-xl font-semibold">{item.title}</p>
              <p className="text-lg">{item.count} pieces</p>
              <p className="text-xl font-semibold">{item.price}$</p>
            </div>
            <button
              onClick={() => dispatch(removeFromBasket({ id: item.id }))}
              className="text-2xl font-bold px-2 mb-7"
            >
              ✖
            </button>
          </div>
        ))
      )}
    </div>

    {products.length > 0 && (
      <div className="p-3 border-t border-gray-400">
        <p className="text-2xl font-bold mb-3">Total Amount: {totalAmount}$</p>
        <button
          onClick={() => {
            dispatch(clearBasket()); 
            dispatch(calcBasket()); 
          }}
          className={`w-full border font-semibold text-lg py-3 rounded-lg ${colorPage ? "text-purple-400 bg-purple-950 hover:bg-purple-400 hover:text-purple-950" : "border-fuchsia-950 bg-purple-400 hover:bg-purple-950 hover:text-fuchsia-200 text-purple-950 transition-all ease-out 0.8s"}`}
        >
          Clear basket
        </button>
      </div>
    )}
  </div>
</Drawer>


    </div>
  );
};

export default Header;
