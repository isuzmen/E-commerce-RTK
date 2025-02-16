import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; 
import "swiper/css/navigation"; 
import { Navigation } from "swiper/modules";
import { useNavigate } from "react-router-dom";

const Product = ({ product, colorPage }) => {

  const navigate = useNavigate()
  const {images, price, title } = product;

  return (
    <div onClick={() => navigate(`products/${product?.id}`)} className={`w-[260px] h-[380px] rounded-[10px] m-3 shadow-md cursor-pointer
      ${colorPage ? "hover:bg-zinc-950 shadow-purple-200" : "hover:bg-purple-100 shadow-purple-400"}
    `}>
      
      {images?.length > 1 ? (
        <Swiper 
          spaceBetween={10} 
          slidesPerView={1} 
          navigation 
          loop={true}
          modules={[Navigation]} 
          speed={900}
          className="h-[260px] w-full rounded-t-xl"
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <img className="h-[260px] w-full rounded-t-xl object-cover" src={image} alt={title} />
            </SwiperSlide>
          ))}
        </Swiper>
      ) : images?.length === 1 ? (
        <img className="h-[260px] w-full rounded-t-xl object-cover" src={images[0]} alt={title} />
      ) : null} 

      <div className="mt-3">
        <p className={`text-center text-[17px] font-bold h-[51px] 
        ${colorPage ? "text-violet-400" : "text-violet-950"}
        `}>{title}</p>
        <div className="flex items-center justify-center mt-3">
          <h3 className={`text-center mr-3 text-2xl font-semibold
          ${colorPage ? "text-violet-400" : "text-violet-950"}
          `}>{price}$</h3>
          <div className="flex items-center justify-center">
            <button className="border border-white bg-violet-700 hover:bg-violet-950 transition-all 0.6s rounded-[8px] w-[90px] h-[38px] text-white">Buy</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
