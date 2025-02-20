import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; 
import "swiper/css/navigation"; 
import { Navigation } from "swiper/modules";
import { useNavigate } from "react-router-dom";

const Product = ({ product, colorPage }) => {
  const navigate = useNavigate();
  const { id, images, price, title } = product;

  const handleClick = (event) => {
    const isArrowClick = event.target.classList.contains("swiper-button-next") || 
                         event.target.classList.contains("swiper-button-prev");

    if (!isArrowClick) {
      navigate(`/products/${product?.id}`);
    }
  };

  return (
    <div 
      className={`w-[260px] h-[380px] rounded-[10px] m-3 shadow-md cursor-pointer
      ${colorPage ? "hover:bg-zinc-950 shadow-purple-200" : "hover:bg-purple-200 shadow-purple-400"}
    `}
      onClick={handleClick}
    >
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
        ${colorPage ? "text-purple-300" : "text-purple-950"}
        `}>{title}</p>
        <div className="flex items-center justify-center mt-3">
          <h3 className={`text-center mr-3 text-2xl font-semibold
          ${colorPage ? "text-purple-300" : "text-purple-950"}
          `}>{price}$</h3>
          <div className="flex items-center justify-center">
            <button className={`border ${colorPage ? "text-purple-400 bg-purple-950 hover:bg-purple-400 hover:text-purple-950" : "border-fuchsia-950 bg-purple-400 hover:bg-purple-950 hover:text-fuchsia-200 text-purple-950"} transition-all 0.6s rounded-[8px] w-[90px] h-[38px]`}>
              Buy
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
