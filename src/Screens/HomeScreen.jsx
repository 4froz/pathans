import React from "react";
import Header from "../Components/Header";
import ImageSlider from "../Components/Banner";

const HomeScreen = () => {
  return (
    <div className="flex bg-[#fff] flex-col overflow-hidden">
      <ImageSlider />

      {/* New Arrivals! */}
      <div className="w-[100%] px-4 sm:px-10 md:px-10 lg:px-20 xl:px-28 flex flex-col items-center self-center">
        <p className="text-3xl md:text-2xl lg:text-4xl mt-20 mb-10 font-semibold">
          New Arrivals!
        </p>

        <div className="flex flex-col space-y-5 md:space-y-0 md:flex-row max-h-min  justify-between w-[100%] md:h-[600px]">
          <div className="flex relative cursor-pointer w-full md:w-[49%] overflow-hidden rounded-md">
            <img
              className="w-full h-auto object-cover hover:scale-105 duration-700"
              src="https://vagads.com/cdn/shop/files/1320x1480-08_1800x.jpg?v=1701763155"
              alt=""
              srcset=""
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-white text-center">
              <p className="text-md md:text-lg">New Arrivals</p>
              <h1 className="md:text-4xl text-2xl font-bold uppercase mb-2">
                Jacket Kurta Set
              </h1>
            </div>
          </div>
          <div className="flex flex-col h-full space-y-5 w-full md:w-[49%]">
            <div className="relative cursor-pointer flex w-full h-full overflow-hidden rounded-md">
              <img
                className="w-full h-auto md:h-full  object-cover hover:scale-105 duration-700"
                src="https://vagads.com/cdn/shop/files/Vagad-_Cover-2000x1000-06_1800x.jpg?v=1701763333"
                alt=""
                srcset=""
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-white text-center">
                <p className="text-md md:text-lg">New Pastel Collection</p>
                <h1 className="md:text-4xl text-2xl font-bold uppercase mb-2">
                  indo-western
                </h1>
              </div>
            </div>
            <div className="relative cursor-pointer flex w-full h-full  overflow-hidden rounded-md">
              <img
                className="w-full h-auto md:h-full object-cover hover:scale-105 duration-700"
                src="https://vagads.com/cdn/shop/files/Vagad-_Cover-2000x1000-05_b6265350-21da-4490-a4f4-daa735ec71cc_1800x.jpg?v=1701763430"
                alt=""
                srcset=""
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-white text-center">
                <p className="text-md md:text-lg">Fresh Collection</p>
                <h1 className="md:text-4xl text-2xl font-bold uppercase mb-2">
                  Tuxedo
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      

      <img
        src="https://www.thecoutureclub.com/cdn/shop/files/MicrosoftTeams-image_20.jpg?v=1720716250&width=1080"
        alt=""
        className="w-full mt-20"
      />

      <p className="text-3xl md:text-2xl self-center lg:text-4xl mt-20 font-semibold">
        Just In!
      </p>
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

      {/* Craftsmansip */}
      <div className="w-full border-t-2 space-y-5 lg:space-y-0 lg:space-x-8 py-10 lg:py-20 px-4 sm:px-10 md:px-10 lg:px-20 xl:px-28 flex flex-col lg:flex-row p-10">
        <div className="lg:w-[50%] w-full flex flex-col justify-center items-center">
          <p className="md:text-4xl font-[MyFont] text-2xl font-bold mb-2">
            Our Craftsmanship
          </p>
          <h1 className="lg:text-md text-sm text-center">
            Indulge in the artistry of our occasion wear. Impeccably tailored
            Indian menswear, adorned with handwoven fabrics, intricate
            embroidery, and traditional craftsmanship. Elevate your celebrations
            with our prideful designs
          </h1>
        </div>
        <div className="lg:w-[50%] w-full">
          <img
            src="https://vagads.com/cdn/shop/files/embroideries-1_800x.jpg?v=1705905147"
            alt=""
            className="w-full rounded-md"
          />
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;
