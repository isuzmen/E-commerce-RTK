import { useState } from "react";
import { CiCirclePlus, CiCircleMinus } from "react-icons/ci";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const DetailComp = ({ productDetail, colorPage }) => {
    const defaultImage = "https://via.placeholder.com/900x550?text=No+Image";

    const images = productDetail?.images?.length > 0 ? productDetail.images : [defaultImage];
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [count, setCount] = useState(0);

    const increment = () => setCount(prev => prev + 1);
    const decrement = () => count > 0 && setCount(prev => prev - 1);

    const prevImage = () => {
        setCurrentImageIndex(prevIndex => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };

    const nextImage = () => {
        setCurrentImageIndex(prevIndex => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    };

    return (
        <div className={`flex flex-row justify-center mt-10 gap-10 border-none shadow-md shadow-fuchsia-300
          ${colorPage ? "bg-black" : "bg-purple-100"} rounded-lg`}
        >
            <div className="relative overflow-hidden w-[900px] h-[550px]">
                <div 
                    className="w-full h-full flex transition-transform duration-[800ms] ease-in-out"
                    style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}
                >
                    {images.map((img, index) => (
                        <img 
                            key={index} 
                            src={img} 
                            alt={productDetail?.title} 
                            className="w-[900px] h-[550px] object-cover shrink-0"
                        />
                    ))}
                </div>

                {images.length > 1 && (
                    <>
                        <button 
                            className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
                            onClick={prevImage}
                        >
                            <FaChevronLeft />
                        </button>

                        <button 
                            className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
                            onClick={nextImage}
                        >
                            <FaChevronRight />
                        </button>
                    </>
                )}
            </div>  

            <div className="w-full mr-10">
                <h1 className={`text-4xl font-semibold mt-7
                ${colorPage ? "text-fuchsia-300" : "text-indigo-950"}  
                `}>
                {productDetail?.title}
                </h1>
                <h3 className={`mt-7 text-[17px] ${colorPage ? "text-fuchsia-300":"text-purple-950"}`}>{productDetail?.description}</h3>
                <h1 className={`text-4xl font-semibold ${colorPage ? "text-fuchsia-300" : "text-fuchsia-950"}  mt-10`}> {productDetail?.price}$</h1>

                <div className="flex items-center gap-2 mt-7">
                    <CiCirclePlus onClick={increment} className={`cursor-pointer text-3xl ${colorPage ? "text-fuchsia-300" : "text-fuchsia-950"}`} /> 
                    <span className={`${colorPage ? "text-fuchsia-300" :"text-fuchsia-950"} text-3xl`}>{count}</span> 
                    <CiCircleMinus onClick={decrement} className={`cursor-pointer text-3xl ${colorPage ? "text-fuchsia-300" : "text-fuchsia-950" } `} />
                </div>

                <button className="bg-fuchsia-300 text-fuchsia-950 mt-10 rounded-md border border-fuchsia-800 p-2.5 text-xl font-semibold hover:bg-fuchsia-950 hover:text-fuchsia-300 transition-all ease-in-out duration-300">
                    Add to basket
                </button>
            </div>
        </div>
    );
};

export default DetailComp;
