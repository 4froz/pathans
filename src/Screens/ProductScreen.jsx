import React from "react";
import Navigator from "../Components/Navigator";
import { useParams } from "react-router";

const ProductScreen = () => {
  const params = useParams();
  return (
    <div className="flex bg-[#fff] min-h-screen px-3 sm:px-10 md:px-10 lg:px-10 flex-col overflow-hidden">
      <Navigator product={true} productName={params.id} to={"Product "} />

      <div className="w-full space-y-10 lg:space-y-0 lg:space-x-12 py-10 lg:py-20 px-4 sm:px-10 md:px-10 lg:px-20 xl:px-40 flex flex-col lg:flex-row p-10">
        <div className="lg:w-[50%] w-full">
          <img
            src="https://vagads.com/cdn/shop/files/VAGADSWEBSITE233150_750x.jpg?v=1699610676"
            alt=""
            className="w-full h-[80%] object-cover rounded-md"
          />
        </div>
        <div className="lg:w-[50%] self-start w-full flex flex-col justify-center items-start">
          <p className="md:text-4xl font-[MyFont] capitalize text-2xl font-bold mb-3">
            PEARL BEIGE KURTA SET
          </p>
          <p className="md:text-lg text-base">Rs. 14,995.00</p>
          <p className="md:text-sm text-xs">
            Tax included. Shipping calculated at checkout
          </p>

          <div className="flex mt-5 rounded-lg justify-start items-center w-[100%]">
            <h1 className="p-3 lg:p-5 w-full rounded-lg text-sm lg:text-base font-medium text-green-600 bg-green-50">
              Note: Before buying please discuss the size, color, and design by contacting us.
            </h1>
          </div>

          <button className="p-3 shadow-md px-5 mt-7 w-full disabled:bg-gray-200 disabled:text-white rounded-md bg-stone-800 cursor-pointer">
            <span className="text-base text-white font-semibold">
              Contact Us
            </span>
          </button>

          <button className="p-3 px-5 mt-3 shadow-md w-full disabled:bg-gray-200 disabled:text-white rounded-md bg-white cursor-pointer">
            <span className="text-base text-black font-semibold">Buy Now</span>
          </button>

          <p className="md:text-base mt-7 text-sm">
            <p className="font-bold text-lg">Product Details:</p> This elegant
            cream-colored kurta set features intricate embroidery on premium,
            breathable fabric. The tailored fit, mandarin collar, and full
            sleeves offer both style and comfort. Perfect for weddings and
            festive celebrations, this kurta promises a regal look for any
            occasion.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductScreen;
