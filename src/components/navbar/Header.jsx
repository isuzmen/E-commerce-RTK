import { IoIosSearch } from "react-icons/io";
import { CiHeart } from "react-icons/ci";
import { FaBasketShopping } from "react-icons/fa6";
import { CiLight } from "react-icons/ci";
import { MdDarkMode } from "react-icons/md";
import { useState, useEffect } from "react";

const Header = () => {
  const [colorPage, setColorPage] = useState(false);

  useEffect(() => {
    if (colorPage) {
      document.body.classList.add("bg-black", "text-white");
      document.body.classList.remove("bg-white", "text-black");
    } else {
      document.body.classList.add("bg-white", "text-black");
      document.body.classList.remove("bg-black", "text-white");
    }
  }, [colorPage]);

  const changePageColor = () => {
    setColorPage((prev) => !prev);
  };

  return (
    <div className="flex justify-between items-center my-5 p-5 transition-all duration-500">
      <div>
        <p className="text-5xl font-sans font-[400]">Traced-e</p>
      </div>
      <div className="flex items-center gap-2">
        <div
          className={`flex items-center border p-2 rounded-full ${
            colorPage
              ? "bg-purple-600 border-white"
              : "bg-purple-300 border-black"
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
          <MdDarkMode
            size={30}
            onClick={changePageColor}
            className="cursor-pointer text-white"
          />
        ) : (
          <CiLight size={30} onClick={changePageColor} className="cursor-pointer text-black" />
        )}
        <CiHeart size={30} className={`${colorPage ? "text-white" : "text-black"}`} />
        <div className="relative">
          <div
            className={`absolute -top-3 -right-3 rounded-full w-5 h-5 flex items-center justify-center border ${
              colorPage ? "bg-purple-600 text-white border-white" : "bg-purple-600 text-white border-black"
            }`}
          >
            3
          </div>
          <FaBasketShopping size={30} className={`${colorPage ? "text-white" : "text-black"}`} />
        </div>
      </div>
    </div>
  );
};

export default Header;