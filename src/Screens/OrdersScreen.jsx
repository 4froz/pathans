import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Navigator from "../Components/Navigator";
import axios from "axios";
import moment from "moment";
import { PulseLoader } from "react-spinners";
import { SERVER } from "../consts";

const OrderScreen = () => {
  const [loading, setloading] = useState(false);
  const [order, setorder] = useState({});
  const params = useParams();
  const getOrderById = async () => {
    try {
      setloading(true);
      const response = await axios.get(
        `${SERVER}api/orders/${params.id}`
      );
      const { data } = response;
      console.log(data);
      setorder(data);
      setloading(false);
    } catch (error) {
      console.error("Error logging in:", error);
      // alert(error);
      setloading(false);
    }
  };

  useEffect(() => {
    getOrderById();
  }, []);

  const navigate = useNavigate();

  return (
    <div className="flex flex-col px-4 lg:px-20">
      <Navigator
        navigate={"profile"}
        to={"Profile"}
        product
        productName={`Order ${order._id}`}
      />
      <div
        onClick={() => navigate(-1)}
        className="flex lg:hidden my-5 flex-row items-center space-x-3"
      >
        <img
          src="https://cdn.iconscout.com/icon/free/png-256/free-back-arrow-1767515-1502579.png"
          alt=""
          className="w-6 h-5 cursor-pointer"
        />
        <span className="font-normal">Back </span>
      </div>
      {loading ? (
        <div className="w-full flex flex-col justify-center items-center min-h-screen">
          <span className="text-lg font-medium">Loading Orders...</span>
          <PulseLoader
            color={"#000"}
            loading={loading}
            size={10}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      ) : (
        <div className="lg:flex mb-20 lg:mt-10 lg:mt-10 space-y-10 lg:space-y-0 lg:space-x-10 ">
          <div className="lg:w-[60%] w-full bg-white border border-dashed  rounded-lg">
            <div className="border-b-[1px] h-[150px] lg:h-[200px] p-5 md:p-7 w-full">
              <h1 className="text-xl lg:text-2xl font-semibold">
                Order Details :-
              </h1>
              <div className=" border-[#7E808C] mt-3">
                <div className="flex flex-col my-2 text-[#7E808C]">
                  <div className="flex ml-1 capitalize text-black font-medium lg:text-base text-sm">
                    <span>
                      <span className="whitespace-nowrap mr-1 font-normal">
                        Order Id :
                      </span>
                      {order._id}
                    </span>
                  </div>
                  <div className="flex ml-1 -translate-y-1 capitalize text-black font-medium lg:text-base text-sm">
                    <span className="flex">
                      <span className="whitespace-nowrap mr-1 font-normal">
                        Order Status :
                      </span>

                      <div className="font-medium lg:text-base text-sm text-black">
                        {order.deliveryStatus}
                      </div>
                    </span>
                  </div>
                  <div className="flex ml-1 -translate-y-2 capitalize text-black font-medium lg:text-base text-sm">
                    <span>
                      <span className="whitespace-nowrap mr-1 font-normal">
                        Ordered On :
                      </span>
                      {moment(order.createdAt).format(
                        "MMMM Do YYYY, h:mm:ss a"
                      )}
                    </span>
                  </div>
                  <div className="flex ml-1 -translate-y-3 capitalize text-black font-medium lg:text-base text-sm">
                    <span>
                      <span className="whitespace-nowrap mr-1 font-normal">
                        Est Delivery In :
                      </span>
                      {order.estTime} days
                    </span>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="border-b-[1px] p-5 md:p-7 w-full">
            <h1 className="text-xl lg:text-2xl font-semibold mb-5">Special Note :-</h1>
            <span className="font-normal">
            Please use the provided soft, breathable fabric for the kurta and handle it with care. Double-check the enclosed measurements before cutting. The kurta should have a round neckline with a slight slit, three-quarter sleeves with a simple hem, and be knee-length with a slightly loose fit. Ensure all seams are neat with matching thread.
            </span>
          </div> */}
            <div className="border-b-[1px] p-5 md:p-7 w-full">
              <h1 className="text-xl lg:text-2xl font-semibold">
                Delivery Address :-
              </h1>
              <div className=" border-[#7E808C] border-dashed mt-3">
                <div className="flex my-2 text-[#7E808C]">
                  <div className="flex capitalize text-black font-medium lg:text-base text-sm">
                    <span>
                      <span className="whitespace-nowrap mr-1 font-normal">
                        Address :
                      </span>
                      {order?.shippingAddress?.address} ,
                      {order?.shippingAddress?.city},
                      {order?.shippingAddress?.pincode}
                    </span>
                  </div>
                </div>

                <div className="flex items-center -translate-y-3 space-x-2">
                  <span className="lg:text-base text-sm">Phone : </span>
                  <span className="text-black font-medium lg:text-base text-sm">
                    {order?.user?.number}
                  </span>
                </div>
              </div>
            </div>

            <div className="flex border-b-[1px] p-5 md:p-7 flex-col space-y-4">
              <h1 className="text-xl lg:text-2xl font-semibold text-stone-800">
                Payment Method :-
              </h1>
              <div className=" mt-3">
                <div className="flex space-x-1">
                  <span className="text-stone-700 lg:text-base text-sm">
                    Method :{" "}
                    <span className="font-medium lg:text-base text-sm">
                      {order.paymentMethod}
                    </span>
                  </span>
                </div>
              </div>
            </div>

            <div className="flex flex-col p-5 md:p-7 space-y-4">
              <h1 className="text-xl lg:text-2xl font-semibold text-stone-800">
                Ordered Items :
              </h1>
              <div>
                <div>
                  {order?.orderItems?.map((item) => (
                    <div className="py-2 flex">
                      <img
                        src={item.image}
                        className="h-14 w-16 line-clamp-1 object-cover rounded-md"
                        alt={item.name}
                      />
                      <div className="flex ml-2 lg:ml-5 md:ml-10 w-full flex-col justify-center">
                        <span className="text-base line-clamp-1 font-semibold">
                          {item.name}
                        </span>
                        <div className="w-full flex justify-between items-center">
                          <div className="flex space-x-1">
                            <span className="text-lg font-semibold text-stone-800">
                              ₹{item.price}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white border border-dashed h-min  rounded-md lg:w-[40%]">
            <div
              style={{
                alignSelf: "center",
                width: "100%",
                padding: 16,
              }}
            >
              <span className="font-semibold text-xl" style={{ color: "#000" }}>
                Order Summary
              </span>

              <div className="flex mt-10 flex-row justify-between">
                <span style={{ fontFamily: "Segoe UI" }} className="text-base">
                  Subtotal
                </span>
                <span style={{ fontFamily: "Segoe UI" }} className="text-base">
                  ₹{order.itemsPrice?.toLocaleString()}
                </span>
              </div>
              <div className="flex flex-row justify-between">
                <span style={{ fontFamily: "Segoe UI" }} className="text-base">
                  Shipping
                </span>
                <span style={{ fontFamily: "Segoe UI" }} className="text-base">
                  ₹{order.shippingPrice?.toLocaleString()}
                </span>
              </div>
              <div className="flex flex-row justify-between">
                <span
                  style={{ fontFamily: "Segoe UI" }}
                  className="text-lg font-semibold"
                >
                  Total
                </span>
                <span
                  style={{ fontFamily: "Segoe UI" }}
                  className="text-lg font-semibold"
                >
                  ₹{order.totalPrice?.toLocaleString()}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default OrderScreen;
