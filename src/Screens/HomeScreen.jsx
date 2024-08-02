import React from "react";
import Header from "../Components/Header";
import ImageSlider from "../Components/Banner";
import JustIn from "../Sections/Home/JustIn";
import SuccessModal from "../Components/Modals/AddAddressModal";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";

const HomeScreen = () => {
  const isOpen = useSelector((state) => state.modal.succesModal);
  const navigate = useNavigate();

  return (
    <div className="flex bg-[#fff] flex-col overflow-hidden">
      <ImageSlider />

      {/* New Arrivals! */}
      <div className="w-[100%] px-4 sm:px-10 md:px-10 lg:px-20 xl:px-28 flex flex-col items-center self-center">
        <p className="text-3xl font-[r] md:text-2xl lg:text-4xl mt-20 mb-10 font-semibold">
          New Arrivals!
        </p>

        <div className="flex flex-col space-y-5 md:space-y-0 md:flex-row max-h-min  justify-between w-[100%] md:h-[600px]">
          <div onClick={() => navigate("/shop")} className="flex relative cursor-pointer w-full md:w-[49%] overflow-hidden rounded-md">
            <img
              className="w-full h-auto object-cover hover:scale-105 duration-700"
              src="https://vagads.com/cdn/shop/files/1320x1480-08_1800x.jpg?v=1701763155"
              alt=""
              srcset=""
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-white text-center">
              <p className="text-md md:text-lg">New Arrivals</p>
              <h1 className="md:text-4xl font-[Myfont] text-2xl font-bold uppercase mb-2">
                Jacket Kurta Set
              </h1>
            </div>
          </div>
          <div className="flex flex-col h-full space-y-5 w-full md:w-[49%]">
            <div onClick={() => navigate("/shop")} className="relative cursor-pointer flex w-full h-full overflow-hidden rounded-md">
              <img
                className="w-full h-auto md:h-full  object-cover hover:scale-105 duration-700"
                src="https://vagads.com/cdn/shop/files/Vagad-_Cover-2000x1000-06_1800x.jpg?v=1701763333"
                alt=""
                srcset=""
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-white text-center">
                <p className="text-md md:text-lg">New Pastel Collection</p>
                <h1 className="md:text-4xl font-[Myfont] text-2xl font-bold uppercase mb-2">
                  indo-western
                </h1>
              </div>
            </div>
            <div onClick={() => navigate("/shop")} className="relative cursor-pointer flex w-full h-full  overflow-hidden rounded-md">
              <img
                className="w-full h-auto md:h-full object-cover hover:scale-105 duration-700"
                src="https://vagads.com/cdn/shop/files/Vagad-_Cover-2000x1000-05_b6265350-21da-4490-a4f4-daa735ec71cc_1800x.jpg?v=1701763430"
                alt=""
                srcset=""
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-white text-center">
                <p className="text-md md:text-lg">Fresh Collection</p>
                <h1 className="md:text-4xl font-[Myfont] text-2xl font-bold uppercase mb-2">
                  Tuxedo
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <img
        src="https://www.thecoutureclub.com/cdn/shop/files/MicrosoftTeams-image_20.jpg?v=1720716250&width=1080"
        alt=""
        className="w-full mt-20"
      /> */}

    <JustIn />

      {/* Craftsmansip */}
      <div className="w-full border-t-2 space-y-5 lg:space-y-0 lg:space-x-8 pb-14 lg:py-20 px-4 sm:px-10 md:px-10 lg:px-20 xl:px-28 flex flex-col lg:flex-row p-10">
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
      <SuccessModal addressModal={isOpen.visible} />
    </div>
  );
};

export default HomeScreen;
