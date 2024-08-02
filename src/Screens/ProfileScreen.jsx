import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import moment from "moment";
import { Link } from "react-router-dom";
import Navigator from "../Components/Navigator";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../Redux/userSlice";
import { ClipLoader, PulseLoader } from "react-spinners";
import axios from "axios";
import { SERVER } from "../consts";

const ProfileScreen = () => {
  const [state, setState] = useState("liveOrders");
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [loading, setloading] = useState(true);
  const [orders, setorders] = useState([]);

  const getorders = async () => {
    try {
      setloading(true);
      const response = await axios
        .get(`${SERVER}api/orders/myorders/${userInfo._id}`)
        .catch((err) => alert(err));
      const { data } = response;
      setorders(data);
      setloading(false);
    } catch (error) {
      // alert(error);
      setloading(false);
    }
  };

  useEffect(() => {
    if (!userInfo) {
      navigate("/");
    }
  }, [userInfo]);

  useEffect(() => {
    getorders();
  }, []);

  return (
    <div className="flex bg-white min-h-screen flex-col  px-[0px] lg:px-20 pb-10">
      <div className="px-5 mb-5 lg:px-0">
        <Navigator to={"Profile"} />
      </div>
      <div className="flex items-start w-full  flex-col">
        <div className="flex flex-col lg:flex-row mt-5 lg:mt-0 space-y-10 lg:space-y-0 w-full lg:space-x-6">
          <div className="flex items-start flex-col w-[90%] self-center lg:self-start lg:w-[25%] px-0 lg:p-0">
            {/* <h1 className="font-semibold text-2xl ">Account Details</h1> */}

            <div className="flex bg-[#F8FAFC] rounded-md w-full flex-col">
              <div className="flex  w-full flex-col space-y-8">
                <div className="flex cursor-pointer rounded-md p-4 items-center space-x-2">
                  <div className="p-0 bg-white rounded-full">
                    <img
                      src="https://media.istockphoto.com/id/1130884625/vector/user-member-vector-icon-for-ui-user-interface-or-profile-face-avatar-app-in-circle-design.jpg?s=612x612&w=0&k=20&c=1ky-gNHiS2iyLsUPQkxAtPBWH1BZt0PKBB1WBtxQJRE="
                      alt=""
                      className="w-12 rounded-full h-12"
                    />
                  </div>
                  <div className="flex-col flex">
                    <span className="text-xs line-clamp-1 whitespace-nowrap font-normal text-gray-400">
                      Hello,
                    </span>

                    <span className="text-sm whitespace-nowrap ">
                      {userInfo?.name} | {userInfo?.number}
                    </span>
                  </div>
                </div>

                {/* <div className="flex bg-[#F8FAFC] w-full items-start capitalize rounded-md text-lg flex-col">
                <div className="cursor-pointer border-b-[1px] w-full py-3 px-8">
                  <span className="text-base font-medium">My Addresses</span>
                </div>
                <div className="border-b-[1px] cursor-pointer w-full py-3 px-8">
                  <span className="text-base font-medium">My Orders</span>
                </div>
                <div className=" cursor-pointer w-full py-3 px-8">
                  <span className="text-base font-medium">Logout</span>
                </div>
              </div> */}
              </div>

              <div
                onClick={() => {
                  dispatch(logout());
                  localStorage.removeItem("userInfo");
                }}
                className=" cursor-pointer flex flex-row justify-center text-white  bg-stone-800 w-[90%] self-center mb-5 rounded-md py-2  px-8"
              >
                <span className="text-base font-medium">Sign Out</span>
              </div>
            </div>
          </div>
          <div className="flex w-full lg:w-[75%] flex-col p-5 pt-0">
            <div className="flex flex-col w-full items-start lg:justify-between">
              <h1 className="font-semibold text-2xl ">Order History</h1>
            </div>
            {orders.length <= 0 && !loading ? (
              <div className="pt-2 mt-5 flex flex-col border-t-2">
                <span className="mt-3 text-lg">Nothing to see here yet,</span>
                <span className="mt-3 text-base">
                  {" "}
                  We'll store your purchases here as soon as you make it
                </span>
              </div>
            ) : (
              <>
                {loading ? (
                  <div className="w-full flex flex-col justify-center items-center h-[200px]">
                    <span className="text-lg font-medium">
                      Loading Orders...
                    </span>
                    <PulseLoader
                      color={"#000"}
                      loading={loading}
                      size={10}
                      aria-label="Loading Spinner"
                      data-testid="loader"
                    />
                  </div>
                ) : (
                  <div className="flex flex-col">
                    <div className="hidden lg:flex w-full">
                      <table className="w-full mt-7">
                        <thead>
                          <tr>
                            <th className="bg-[#F8FAFC] font-medium p-3 text-sm">
                              Order ID
                            </th>
                            <th className="bg-[#F8FAFC] font-medium p-3 text-sm">
                              Date
                            </th>
                            <th className="bg-[#F8FAFC] font-medium p-3 text-sm">
                              Total
                            </th>
                            <th className="p-3 text-sm bg-[#F8FAFC] font-medium">
                              Order Status
                            </th>
                            <th className="bg-[#F8FAFC] font-medium p-3 text-sm">
                              View Details
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {orders.map((order) => (
                            <tr key={order._id}>
                              <td className="text-center text-sm p-4 text-stone-800 font-semibold">
                                #{order._id.toString().substr(0, 6)}
                              </td>
                              <td className="text-center text-sm p-4">
                                {moment(order.createdAt).format("LL h:mma")}
                              </td>
                              <td className="text-center text-sm p-4">
                                ₹{order.totalPrice}
                              </td>
                              <td
                                className={`capitalize text-center text-sm p-4 ${
                                  order.deliveryStatus === "pending"
                                    ? "text-red-500"
                                    : order.deliveryStatus === "cancelled"
                                    ? "text-[#EF4444]"
                                    : order.deliveryStatus === "processing"
                                    ? "text-[#F97316]"
                                    : order.deliveryStatus === "outForDelivery"
                                    ? "text-[#2DD4BF]"
                                    : order.deliveryStatus === "delivered" &&
                                      "text-[#22C55E]"
                                } font-medium`}
                              >
                                {order.deliveryStatus === "outForDelivery"
                                  ? "Out For Delivery"
                                  : order.deliveryStatus}
                              </td>
                              <td className="text-center text-sm p-4">
                                <button
                                  onClick={() =>
                                    navigate(`/order/${order._id}`)
                                  }
                                  className="p-2 bg-stone-800 text-white px-4 text-sm font-medium rounded-md"
                                >
                                  View Details
                                </button>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                    <div className="flex lg:hidden flex-col space-y-5">
                      {orders.map((order) => (
                        <div
                          key={order._id}
                          className="flex mt-5 flex-col items-start bg-[#F8FAFC] rounded-md p-5"
                        >
                          <h1 className="text-lg uppercase font-medium mb-3">
                            # {order._id.substr(0, 10)}
                          </h1>
                          <span className="text-md font-normal text-[#a6a6a6]">
                            Ordered At:{" "}
                            {moment(order.createdAt).format("LL h:mma")}
                          </span>
                          <span className="text-md font-normal text-[#a6a6a6]">
                            Status:{" "}
                            <span
                              className={`${
                                order.deliveryStatus === "pending"
                                  ? "text-red-500"
                                  : order.deliveryStatus === "cancelled"
                                  ? "text-[#EF4444]"
                                  : order.deliveryStatus === "processing"
                                  ? "text-[#F97316]"
                                  : order.deliveryStatus === "outForDelivery"
                                  ? "text-[#2DD4BF]"
                                  : order.deliveryStatus === "delivered" &&
                                    "text-[#22C55E]"
                              } ml-1 capitalize`}
                            >
                              {order.deliveryStatus === "outForDelivery"
                                ? "Out For Delivery"
                                : order.deliveryStatus}
                            </span>
                          </span>
                          <div className="flex space-x-5 text-[#a6a6a6] text-md font-normal">
                            <span>Total : ₹{order.totalPrice}</span>
                          </div>

                          <span
                            onClick={() => navigate(`/order/${order._id}`)}
                            className="text-base cursor-pointer mt-3 underline font-semibold text-black"
                          >
                            View Details
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileScreen;
