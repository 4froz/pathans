import React from "react";
import { Link } from "react-router-dom";
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

const OrderScreen = () => {
  return (
    <div className="flex flex-col px-4 lg:px-20">
      <Navigator
        navigate={"profile"}
        to={"Profile"}
        product
        productName={`Order ${order._id}`}
      />
      <div className="lg:flex mb-20 mt-10 lg:mt-10 space-y-10 lg:space-y-0 lg:space-x-10 ">
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
                    {order._id.substr(0, 10)}
                  </span>
                </div>
                <div className="flex ml-1 -translate-y-1 capitalize text-black font-medium lg:text-base text-sm">
                  <span className="flex">
                    <span className="whitespace-nowrap mr-1 font-normal">
                      Order Status :
                    </span>
                    {order.deliveryStatus === "pending" ? (
                      <div className="font-medium lg:text-base text-sm text-red-400">
                        Pending
                      </div>
                    ) : order.deliveryStatus === "processing" ? (
                      <div className="font-medium lg:text-base text-sm text-orange-600">
                        Processing
                      </div>
                    ) : order.deliveryStatus === "outForDelivery" ? (
                      <div className="font-medium lg:text-base text-sm text-orange-400">
                        On Its Way
                      </div>
                    ) : order.deliveryStatus === "delivered" ? (
                      <div className="font-medium lg:text-base text-sm text-green-500">
                        Delivered
                      </div>
                    ) : (
                      order.deliveryStatus === "cancelled" && (
                        <div className="font-medium lg:text-base text-sm text-red-400">
                          Cancelled
                        </div>
                      )
                    )}
                  </span>
                </div>
                <div className="flex ml-1 -translate-y-2 capitalize text-black font-medium lg:text-base text-sm">
                  <span>
                    <span className="whitespace-nowrap mr-1 font-normal">
                      Ordered On :
                    </span>
                    July 17, 2024 11:32am
                  </span>
                </div>
                <div className="flex ml-1 -translate-y-3 capitalize text-black font-medium lg:text-base text-sm">
                  <span>
                    <span className="whitespace-nowrap mr-1 font-normal">
                      Est Delivery In :
                    </span>
                    14 days
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
                    {order.shippingAddress.address} ,{" "}
                    {order.shippingAddress.city},{" "}
                    {order.shippingAddress.postalCode}
                  </span>
                </div>
              </div>

              <div className="flex items-center -translate-y-3 space-x-2">
                <span className="lg:text-base text-sm">Phone : </span>
                <span className="text-black font-medium lg:text-base text-sm">
                  {order.mobileNumber}
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
              {order.orderItems.length === 0 ? (
                <h1>Your cart is empty</h1>
              ) : (
                <div>
                  {order.orderItems.map((item) => (
                    <div key={item.product} className="py-2 flex">
                      <img
                        src={item.image}
                        className="h-14 w-16 object-cover rounded-md"
                        alt={item.name}
                      />
                      <div className="flex ml-2 lg:ml-5 md:ml-10 w-full flex-col justify-center">
                        <span className="text-base font-semibold">
                          {item.name}
                        </span>
                        <div className="w-full flex justify-between items-center">
                          <div className="flex space-x-1">
                            <span className="font-normal">Oty :</span>
                            {item.category === "Eggs" ? (
                              <span>{item.subQty} Pieces</span>
                            ) : (
                              <span>{item.subQty}</span>
                            )}
                          </div>
                          <span className="text-lg font-semibold text-stone-800">
                            ₹{item.price}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
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
                ₹4,789
              </span>
            </div>
            <div className="flex flex-row justify-between">
              <span style={{ fontFamily: "Segoe UI" }} className="text-base">
                Shipping
              </span>
              <span style={{ fontFamily: "Segoe UI" }} className="text-base">
                Free
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
                ₹4,789
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderScreen;
