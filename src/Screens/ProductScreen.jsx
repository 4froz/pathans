import React, { useState } from "react";
import Navigator from "../Components/Navigator";
import { useParams } from "react-router";
import { openLoginModal } from "../Redux/modalSlice";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

const ProductScreen = () => {
  const params = useParams();
  const images = [
    "https://vagads.com/cdn/shop/files/VAGADSWEBSITE233150_750x.jpg?v=1699610676",
    "https://vagads.com/cdn/shop/files/VAGADSWEBSITE233153_750x.jpg?v=1699610675",
    "https://vagads.com/cdn/shop/files/VAGADSWEBSITE233154_750x.jpg?v=1699610676",
    "https://vagads.com/cdn/shop/files/VAGADSWEBSITE233156_750x.jpg?v=1699610676",
  ];
  const [image, setImage] = useState(images[0]);
  const [shine, setShine] = useState(false);

  const handleImageClick = (item) => {
    setShine(true);
    setImage(item);
    setTimeout(() => setShine(false), 500); // Remove the shine effect after 1 second
  };
  const dispatch = useDispatch();
  return (
    <div className="flex relative bg-[#fff] min-h-screen sm:px-10 md:px-10 lg:px-10 flex-col overflow-hidden">
      <Navigator
        navigate={"shop"}
        product={true}
        productName={params.id}
        to={"Shop"}
      />

      <div className="w-full justify-between space-y-10 lg:space-y-0 lg:space-x-12 py-10 lg:py-20 px-4 sm:px-10 md:px-10 lg:px-20 xl:px-40 flex flex-col lg:flex-row p-10">
        <div className="flex flex-col lg:flex-row lg:space-x-8 lg:w-[60%] w-full">
          <div className="hidden lg:flex flex-col mt-5 space-y-8">
            {images.map((item) => (
              <img
                onClick={() => handleImageClick(item)}
                src={item}
                alt=""
                className={`w-20 ${
                  item === image && "border-[2px] border-black"
                } cursor-pointer rounded-md h-auto`}
              />
            ))}
          </div>
          <div className="relative w-full h-auto lg:h-[650px]">
            <img
              src={image}
              alt=""
              className="w-full h-full object-cover rounded-md"
            />
            {shine && (
              <div className="absolute inset-0 bg-white opacity-30 animate-shine rounded-md"></div>
            )}
          </div>
          <div className="flex overflow-x-auto py-3 lg:hidden flex-row mt-5 space-x-3">
            {images.map((item) => (
              <img
                onClick={() => handleImageClick(item)}
                src={item}
                alt=""
                className={`w-20 ${
                  item === image && "border-[2px] border-black"
                } cursor-pointer rounded-md h-auto`}
              />
            ))}
          </div>
        </div>
        <div className="lg:w-[40%] self-start w-full flex flex-col justify-center items-start">
          <p className="text-sm font-medium mb-3 uppercase">
            Pathans Couture Admin
          </p>
          <p className="md:text-4xl font-[MyFont] capitalize text-2xl font-bold mb-3">
            PEARL BEIGE KURTA SET
          </p>
          <p className="md:text-lg text-base">Rs. 14,995.00</p>
          <p className="md:text-sm text-xs">
            Tax included. Shipping calculated at checkout
          </p>

           <div className="h-[1px] bg-gray-400 w-full mt-5" />

           <p className="md:text-base mt-5 text-sm">
            This elegant cream-colored kurta set features intricate embroidery
            on premium, breathable fabric. The tailored fit, mandarin collar,
            and full sleeves offer both style and comfort. Perfect for weddings
            and festive celebrations, this kurta promises a regal look for any
            occasion.
          </p>

          <div className="flex mt-5 rounded-lg justify-start items-center w-[100%]">
            <h1 className="p-3 lg:p-5 w-full rounded-lg text-sm lg:text-base font-medium text-green-600 bg-green-50">
              Note: Before buying please discuss the size, color, and design by
              contacting us.
            </h1>
          </div>

          <Link
            to={`https://wa.me/8698444523?text=${encodeURIComponent("hi")}`}
            className="p-3 justify-center flex shadow-md px-5 mt-7 w-full disabled:bg-gray-200 disabled:text-white rounded-md bg-[#3E29FB] cursor-pointer"
          >
            <span className="text-base text-white font-semibold">
              Contact Us
            </span>
          </Link>

          <Link
            to={"/buynow"}
            className="p-3 justify-center flex px-5 mt-3 shadow-md w-full disabled:bg-gray-200 disabled:text-white rounded-md bg-[#10171F] cursor-pointer"
          >
            <span className="text-base text-white font-semibold">Buy Now</span>
          </Link>

        </div>
      </div>
      <div className="flex lg:hidden flex-row fixed bottom-0 w-full px-2 py-2 bg-white space-x-2">
        <Link
          to={`https://wa.me/8698444523?text=${encodeURIComponent("hi")}`}
          className="p-3 justify-center flex shadow-md px-5 w-full disabled:bg-gray-200 disabled:text-white bg-[#3E29FB] cursor-pointer"
        >
          <span className="text-base text-white font-semibold">Contact Us</span>
        </Link>

        <Link
          to={`https://wa.me/8698444523?text=${encodeURIComponent("hi")}`}
          className="p-3 justify-center flex shadow-md px-5 w-full disabled:bg-gray-200 disabled:text-white bg-[#10171F] cursor-pointer"
        >
          <span className="text-base text-white font-semibold">Buy Now</span>
        </Link>

      </div>
    </div>
  );
};

export default ProductScreen;
