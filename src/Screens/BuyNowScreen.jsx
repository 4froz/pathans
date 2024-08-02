import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navigator from "../Components/Navigator";
import { useDispatch, useSelector } from "react-redux";
import { addAdress } from "../Redux/addressSlice";
import axios from "axios";
import { opensuccesModal } from "../Redux/modalSlice";
import { COMPANY, SERVER } from "../consts";

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

function loadScript(src) {
  return new Promise((resolve) => {
    const script = document.createElement("script");
    script.src = src;
    script.onload = () => {
      resolve(true);
    };
    script.onerror = () => {
      resolve(false);
    };
    document.body.appendChild(script);
  });
}

const BuyNowScreen = () => {
  const buynow = useSelector((state) => state.buyNow);
  console.log(buynow.product);
  const userLogin = useSelector((state) => state.userLogin);
  const address = useSelector((state) => state.address);
  const { userInfo } = userLogin;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    if (!userInfo) {
      navigate("/");
    }
  }, [userInfo]);

  useEffect(() => {
    // Function to handle the beforeunload event
    const handleBeforeUnload = (event) => {
      // Custom message to show in the warning dialog
      const message =
        "You have unsaved changes. Are you sure you want to leave?";

      // Set the custom message (for compatibility with some browsers)
      event.preventDefault();
      event.returnValue = message;

      // Return the message for compatibility with older browsers
      return message;
    };

    // Add event listener for beforeunload
    window.addEventListener("beforeunload", handleBeforeUnload);

    // Cleanup function to remove event listener
    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []); // Empty dependency array means this effect runs only once

  const [name, setname] = useState("");
  const [number, setnumber] = useState("");
  const [city, setcity] = useState("");
  const [pincode, setpincode] = useState("");
  const [address1, setaddress1] = useState("");
  const [loading, setloading] = useState(false);

  useEffect(() => {
    setname(userInfo.name);
    setnumber(userInfo.number);
    if (address.deliveryAddress != null) {
      setcity(address?.deliveryAddress.city);
      setpincode(address?.deliveryAddress.pincode);
      setaddress1(address?.deliveryAddress.address);
    }
  }, [address.deliveryAddress]);

  const subtotal = buynow.product.price;
  const shipping = 0;
  const total = subtotal + shipping;

  const createOrder = async () => {
    try {
      setloading(true);
      const response = await axios.post(
        `${SERVER}api/orders`,
        {
          orderItems: [buynow.product],
          user: { name: userInfo.name, number: userInfo.number },
          shippingAddress: {
            address: address1,
            city: city,
            pincode: pincode,
          },
          paymentMethod: "Online Payment",
          itemsPrice: subtotal,
          shippingPrice: shipping,
          totalPrice: total,
          id: userInfo._id,
        }
      );
      const { data } = response;
      console.log(data);

      setloading(false);
      navigate("/");
      dispatch(opensuccesModal(data._id));
    } catch (error) {
      console.error("Error logging in:", error);
      // alert(error);
      setloading(false);
    }
  };

  async function displayRazorpay() {
    setloading(true);
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );

    if (!res) {
      alert("Razorpay SDK failed to load. Are you online?");
      return;
    }

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.post(
      `${SERVER}api/payment`,
      { amount: total },
      config
    );

    console.log(data);

    const options = {
      key: "rzp_test_fF62bDmx4cqklg",
      currency: data.currency,
      amount: data.amount,
      order_id: data.id,
      name: COMPANY,
      description: "Order delicious meat",
      image: "",
      handler: function (response) {
        createOrder();
      },
      prefill: {
        name: userInfo.name,
        contact: userInfo.number,
      },
    };
    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
    setloading(false);
  }
  return (
    <div className="flex flex-col relative lg:flex-row px-4 justify-center items-center">
      {buynow.product.name ? (
        <>
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
                {buynow.product.name}
              </span>
              <span className="text-3xl mt-0 font-[Myfont] font-semibold">
                ₹{buynow.product?.price?.toLocaleString()}
              </span>

              <img
                src={buynow.product.name && buynow.product.image}
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
              value={name}
              maxLength={20}
              placeholder="Name"
              className="border-[1px] mt-4 font-normal focus:outline-blue-600 rounded-md w-[100%] px-3 py-4 text-base"
            />
            <input
              type="tel"
              value={number}
              maxLength={10}
              placeholder="Number"
              className="border-[1px] mt-4 font-normal focus:outline-blue-600 rounded-md w-[100%] px-3 py-4 text-base"
            />

            <div
              style={{ fontFamily: "Segoe UI" }}
              className="lg:flex-row flex-col space-y-3 lg:space-y-0 lg:space-x-5 w-full mt-3 flex items-center"
            >
              <input
                type="text"
                value={"Maharashtra"}
                disabled
                placeholder="State"
                className="border-[1px] font-normal focus:outline-blue-600 rounded-md w-full px-3 py-4 text-base"
              />
              <input
                type="text"
                value={city}
                maxLength={15}
                onChange={(text) => setcity(text.target.value)}
                placeholder="City"
                className="border-[1px] font-normal focus:outline-blue-600 rounded-md w-full px-3 py-4 text-base"
              />
              <input
                type="tel"
                maxLength={6}
                value={pincode}
                onChange={(text) => setpincode(text.target.value)}
                placeholder="Pincode"
                className="border-[1px] font-normal focus:outline-blue-600 rounded-md w-full px-3 py-4 text-base"
              />
            </div>
            <input
              type="text"
              maxLength={30}
              value={address1}
              onChange={(text) => setaddress1(text.target.value)}
              placeholder="Address line"
              className="border-[1px] mt-4 font-normal focus:outline-blue-600 rounded-md w-[100%] px-3 py-4 text-base"
            />

            <div
              style={{ fontFamily: "Segoe UI" }}
              className="flex w-full mt-5 pt-5 flex-col"
            >
              <span
                style={{ fontFamily: "Segoe UI" }}
                className="text-2xl font-medium"
              >
                Payment Method
              </span>
              <div className="flex mt-5 space-x-3 border py-3.5 bg-[#F6F6F6] border-black rounded-lg px-3 flex-row">
                <div className="w-6 flex border justify-center bg-stone-800 items-center rounded-full h-6">
                  <div className="w-2 h-2 rounded-full bg-white"></div>
                </div>

                <span style={{ fontFamily: "Segoe UI" }} className="text-lg">
                  Online Payment
                </span>
              </div>
            </div>

            <div
              style={{ fontFamily: "Segoe UI" }}
              className="flex w-full mt-5 pt-5 flex-col"
            >
              <span
                style={{ fontFamily: "Segoe UI" }}
                className="text-2xl font-medium mb-10"
              >
                Order Summary
              </span>

              <div className="flex flex-row justify-between">
                <span style={{ fontFamily: "Segoe UI" }} className="text-lg">
                  Subtotal
                </span>
                <span style={{ fontFamily: "Segoe UI" }} className="text-lg">
                  ₹{subtotal.toLocaleString()}
                </span>
              </div>
              <div className="flex flex-row justify-between">
                <span style={{ fontFamily: "Segoe UI" }} className="text-lg">
                  Shipping
                </span>
                <span style={{ fontFamily: "Segoe UI" }} className="text-lg">
                  ₹{shipping.toLocaleString()}
                </span>
              </div>
              <div className="flex flex-row justify-between">
                <span
                  style={{ fontFamily: "Segoe UI" }}
                  className="text-2xl font-semibold"
                >
                  Total
                </span>
                <span
                  style={{ fontFamily: "Segoe UI" }}
                  className="text-2xl font-semibold"
                >
                  ₹{total.toLocaleString()}
                </span>
              </div>
            </div>

            <button
              onClick={() => {
                displayRazorpay();
                dispatch(
                  addAdress({ city: city, pincode: pincode, address: address1 })
                );
                localStorage.setItem(
                  "address",
                  JSON.stringify({
                    city: city,
                    pincode: pincode,
                    address: address1,
                  })
                );
              }}
              disabled={
                name.length < 3 ||
                number.length < 10 ||
                city.length < 3 ||
                pincode.length < 6 ||
                address1.length < 5 ||
                loading
              }
              className="p-3 px-5 disabled:bg-gray-400 disabled:text-white shadow-md w-full bg-stone-900 mt-10 rounded-md cursor-pointer"
            >
              {loading ? (
                <span
                  style={{ fontFamily: "Segoe UI" }}
                  className="text-lg text-white font-semibold"
                >
                  Loading....
                </span>
              ) : (
                <span
                  style={{ fontFamily: "Segoe UI" }}
                  className="text-lg text-white font-semibold"
                >
                  Pay ₹{total.toLocaleString()}
                </span>
              )}
            </button>
          </div>
        </>
      ) : (
        <div className="min-h-screen flex justify-center items-center w-full">
          <h1 className="font-medium text-lg">
            Nothing to see here yet. Please buy a product
            <Link
              to={"/shop"}
              className="ml-3 underline font-normal text-blue-600"
            >
              <span>Back</span>
            </Link>
          </h1>
        </div>
      )}
    </div>
  );
};

export default BuyNowScreen;
