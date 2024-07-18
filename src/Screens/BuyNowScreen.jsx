import React from "react";
import { useNavigate } from "react-router-dom";
import Navigator from "../Components/Navigator";

const order = {
  _id: "1234567890abcdef",
  deliveryStatus: "processing",
  shippingAddress: {
    address: "123 Main St",
    city: "Anytown",
    postalCode: "12345",
  },
  mobileNumber: "123-456-7890",
  paymentMethod: "Credit Card",
  orderItems: [
    {
      product: "1",
      name: "CHARCOAL BLACK SUIT",
      image: "https://vagads.com/cdn/shop/files/S-1027A_400x.jpg?v=1714128673",
      price: "3,330",
      category: "Category1",
      subQty: "3",
      qty: 1,
    },
  ],
  totalPrice: 9854,
  taxPrice: 20,
};

const userInfo = {
  isAdmin: true,
};

const BuyNowScreen = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col relative lg:flex-row px-4 justify-center items-center">
      <div className="lg:w-[35%] pt-10 lg:pt-0 border-b pb-10 lg:p-0 lg:border-b-0 w-full lg:min-h-[100vh] lg:items-end justify-center items-center flex flex-col">
        <div className="flex w-[100%] lg:w-[70%] flex-col lg:pr-0">
          <div
            onClick={() => navigate(-1)}
            className="flex flex-row items-center space-x-3"
          >
            <img
              src="https://cdn.iconscout.com/icon/free/png-256/free-back-arrow-1767515-1502579.png"
              alt=""
              className="w-6 h-5 cursor-pointer"
            />
            <span className="font-normal">Back </span>
          </div>

          <span className="text-base mt-5 text-[#C4C3C4] font-medium">
            CHARCOAL BLACK SUIT
          </span>
          <span className="text-3xl mt-0 font-[Myfont] font-semibold">
            ₹4,500
          </span>

          <img
            src="https://vagads.com/cdn/shop/files/VAGADSWEBSITE233150_750x.jpg?v=1699610676"
            alt=""
            className="w-[320px] object-cover rounded-sm mt-8 h-[360px]"
          />
          {/* <div className="flex mt-5 flex-row space-x-4 items-center">
            <span className="text-lg text-[#000] font-medium">
              Quantity:
            </span>

            <div className="flex flex-row">
              <div className="w-10 cursor-pointer bg-black rounded-l-lg flex items-center justify-center h-9">
                  <span className="font-semibold text-white text-2xl">+</span>
              </div>
              <div className="w-10 border-y-[1px] flex items-center justify-center h-9">
                  <span className="font-medium text-lg">1</span>
              </div>
              <div className="w-10 cursor-pointer bg-black rounded-r-lg flex items-center justify-center h-9">
                  <span className="font-semibold text-white text-2xl">-</span>
              </div>
            </div>
          </div> */}
        </div>
      </div>
      <div
        style={{ fontFamily: "Segoe UI" }}
        className="lg:w-[40%] w-[100%] pb-10 lg:p-0 mt-10 lg:mt-0 lg:pb-40 lg:pt-20 lg:px-16 lg:pl-10 shadow-left justify-center flex flex-col"
      >
        <span className="text-2xl font-medium">Delivery</span>
        <input
          type="text"
          placeholder="Name"
          className="border-[1px] mt-4 font-normal focus:outline-blue-600 rounded-md w-[100%] px-3 py-4 text-base"
        />
        <input
          type="tel"
          placeholder="Number"
          className="border-[1px] mt-4 font-normal focus:outline-blue-600 rounded-md w-[100%] px-3 py-4 text-base"
        />

        <div  style={{ fontFamily: "Segoe UI" }} className="lg:flex-row flex-col space-y-3 lg:space-y-0 lg:space-x-5 w-full mt-3 flex items-center">
          <input
            type="text"
            value={"Maharashtra"}
            disabled
            placeholder="State"
            className="border-[1px] font-normal focus:outline-blue-600 rounded-md w-full px-3 py-4 text-base"
          />
          <input
            type="text"
            placeholder="City"
            className="border-[1px] font-normal focus:outline-blue-600 rounded-md w-full px-3 py-4 text-base"
          />
          <input
            type="text"
            placeholder="Pincode"
            className="border-[1px] font-normal focus:outline-blue-600 rounded-md w-full px-3 py-4 text-base"
          />
        </div>
        <input
          type="text"
          placeholder="Address line 1"
          className="border-[1px] mt-4 font-normal focus:outline-blue-600 rounded-md w-[100%] px-3 py-4 text-base"
        />
        <input
          type="text"
          placeholder="Address line 2"
          className="border-[1px] mt-4 font-normal focus:outline-blue-600 rounded-md w-[100%] px-3 py-4 text-base"
        />

        <div style={{ fontFamily: "Segoe UI" }} className="flex w-full mt-5 pt-5 flex-col">
          <span style={{ fontFamily: "Segoe UI" }} className="text-2xl font-medium">Payment Method</span>
          <div className="flex mt-5 space-x-3 border py-3.5 bg-[#F6F6F6] border-black rounded-lg px-3 flex-row">
            <div className="w-6 flex border justify-center bg-stone-800 items-center rounded-full h-6">
              <div className="w-2 h-2 rounded-full bg-white"></div>
            </div>

            <span style={{ fontFamily: "Segoe UI" }} className="text-lg">Online Payment</span>
          </div>
        </div>

        <div style={{ fontFamily: "Segoe UI" }} className="flex w-full mt-5 pt-5 flex-col">
          <span style={{ fontFamily: "Segoe UI" }} className="text-2xl font-medium mb-10">Order Summary</span>

          <div  className="flex flex-row justify-between">
            <span style={{ fontFamily: "Segoe UI" }} className="text-lg">Subtotal</span>
            <span style={{ fontFamily: "Segoe UI" }} className="text-lg">₹4,789</span>
          </div>
          <div  className="flex flex-row justify-between">
            <span style={{ fontFamily: "Segoe UI" }} className="text-lg">Shipping</span>
            <span style={{ fontFamily: "Segoe UI" }} className="text-lg">Free</span>
          </div>
          <div  className="flex flex-row justify-between">
            <span style={{ fontFamily: "Segoe UI" }} className="text-2xl font-semibold">Total</span>
            <span style={{ fontFamily: "Segoe UI" }} className="text-2xl font-semibold">₹4,789</span>
          </div>
        </div>

        <button  className="p-3 px-5 shadow-md w-full bg-stone-900 mt-10 rounded-md cursor-pointer">
          <span style={{ fontFamily: "Segoe UI" }} className="text-lg text-white font-semibold">Pay ₹4,500</span>
        </button>
      </div>
    </div>
  );
};

export default BuyNowScreen;
