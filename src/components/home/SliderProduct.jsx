import axios from "axios";
import { useEffect, useState } from "react";
import Slider from "react-slick";
import { useNavigate } from "react-router-dom"; 

const SliderProduct = ({ colorPage }) => {
  const [forSlider, setForSlider] = useState([]);
  const baseURL = "https://api.escuelajs.co/api/v1/products";
  const navigate = useNavigate()

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(baseURL);
        const selectedProducts = response.data.slice(0, 3);
        setForSlider(selectedProducts);
      } catch (error) {
        console.error("API Hatası:", error);
      }
    };

    fetchProducts();
  }, []);

  var settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <div className="w-full max-w-7xl mx-auto p-6">
      {
        <style>
          {`
            .slick-arrow::before, .slick-dots li button:before {
              ${colorPage ? "color:white" : "color:black"}
            }
          `}
        </style>
      }
      <Slider {...settings}>
        {forSlider.map((product) => (
          <div key={product.id}>
            <div
              className={`flex flex-col md:flex-row items-center justify-between px-10 rounded-lg shadow-xl h-auto md:h-[500px] transition-all ease-out duration-500  
              ${ colorPage ? "bg-black" : "bg-purple-200"
              }`}
            >
              {/* Left */}
              <div className="w-full md:w-1/2 flex flex-col justify-evenly items-start text-center md:text-left h-full">
                <h1
                  className={`text-3xl md:text-5xl font-bold ${
                    colorPage ? "text-purple-300" : "text-violet-950"
                  }`}
                >
                  {product.title}
                </h1>

                <p
                  className={`text-lg ${
                    colorPage ? "text-fuchsia-200" : "text-purple-950"
                  }`}
                >
                  {product.description}
                </p>

                <div className="w-full flex items-center justify-between">
                  <div className={`text-3xl font-semibold ${colorPage ? "text-purple-400" : "text-violet-950"}`}>
                    ${product.price}
                  </div>

                  <div className="w-full flex justify-center">
                    <button
                      onClick={() => navigate(`/products/${product.id}`)}
                      className={`w-[200px] h-16 text-2xl border rounded-xl cursor-pointer flex justify-center items-center font-semibold transition-all ease-out 0.6s ${
                        colorPage
                          ? "text-purple-400 bg-purple-950 hover:bg-purple-400 hover:text-purple-950"
                          : "text-purple-950 bg-purple-400 border-fuchsia-950 hover:bg-purple-950 hover:text-fuchsia-200"
                      }`}
                    >
                      Review
                    </button>
                  </div>
                </div>
              </div>

              {/* Right */}
              <div className="w-full md:w-1/2 flex justify-center">
                <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                  <img
                    src={product.images[0]}
                    alt={product.title}
                    className="w-full md:w-[500px] h-[300px] md:h-[400px] object-cover rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SliderProduct;
