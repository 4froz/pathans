import React, { useEffect, useState } from "react";
import Navigator from "../Components/Navigator";
import { useParams } from "react-router";
import ProductCard from "../Components/ProductCard";
import axios from "axios";
import { SERVER } from "../consts";

const ShopScreen = () => {
  const params = useParams();
  const [loading, setloading] = useState(false);
  const [products, setproducts] = useState([]);
  console.log('====================================');
  console.log(SERVER);
  console.log('====================================');

  const getProducts = async () => {
    try {
      setloading(true);
      const response = await axios.get(`${SERVER}api/products`).catch((err) => alert(err));
      const { data } = response;
      setproducts(data);
      setloading(false);
    } catch (error) {
      // alert(error);
      setloading(false);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  const lp = Array(1,2,3,4,5);

  return (
    <div className="flex bg-[#fff] pb-56 min-h-screen px-3 sm:px-10 md:px-10 lg:px-20 flex-col overflow-hidden">
      <Navigator to={"Shop"} />

      <p className="text-2xl self-center mt-10 font-[Myfont] lg:text-4xl font-semibold">
        Products
      </p>

      <p className="text-base self-center lg:text-lg mt-10 font-medium mb-4">
        {loading ? "loading" : products.length} Products
      </p>
      {loading ? (
        <div className="grid w-[100%] pb-16 gap-x-3 md:gap-x-5 gap-y-10 lg:grid-cols-3 xl:grid-cols-4 grid-cols-2">
          {lp.map(() => (
            <div className="flex w-full flex-col">
              <div className="w-full">
                <div className="h-56 overflow-hidden rounded-md md:h-[440px] ">
                  <div
                    className={`w-full bg-gray-100 animate-pulse hover:scale-105 duration-500 rounded-md h-full object-cover cursor-pointer`}
                  />
                </div>
              </div>
              <div className="px-2 my-2 mt-4 text-center flex flex-col">
                {/* Name */}
                <span className="text-base text-gray-100 bg-gray-100 animate-pulse line-clamp-1 uppercase  font-medium cursor-pointer">
                  ALHAMBRA CREAM SHERWANI
                </span>
                <span className="text-base mt-1 text-gray-100 bg-gray-100 animate-pulse cursor-pointer">
                  Rs. ₹5000
                </span>
                {/* Desc */}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="grid w-[100%] pb-16 gap-x-3 md:gap-x-5 gap-y-10 lg:grid-cols-3 xl:grid-cols-4 grid-cols-2">
          {products.map((item) => (
            <ProductCard product={item} key={item.img} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ShopScreen;
