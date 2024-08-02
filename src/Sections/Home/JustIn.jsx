import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { openLoginModal } from "../../Redux/modalSlice";
import { Link, useNavigate, useParams } from "react-router-dom";
import { addProduct } from "../../Redux/buynowSlice";
import axios from "axios";
import { COMPANY, SERVER } from "../../consts";

const JustIn = () => {
  const [images, setImages] = useState([]);
  const [image, setImage] = useState("");
  const [loading, setloading] = useState(false);
  const [shine, setShine] = useState(false);
  const [products, setproducts] = useState([]);

  const getHomeProduct = async () => {
    try {
      setloading(true);
      const response = await axios.get(`${SERVER}api/products/`);
      const { data } = response;
      setproducts(data);
      const filterproduct = data?.filter((item) => item.onHomepage);
      setImages(filterproduct[0].image);
      setImage(filterproduct[0].image[0]);
      setloading(false);
    } catch (error) {
      console.error("Error logging in:", error);
      // alert(error);
      setloading(false);
    }
  };

  useEffect(() => {
    getHomeProduct();
  }, []);

  const product = products?.filter((item) => item.onHomepage);
  console.log(product);

  const handleImageClick = (item) => {
    setShine(true);
    setImage(item);
    setTimeout(() => setShine(false), 500); // Remove the shine effect after 1 second
  };
  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const navigate = useNavigate();

  return (
    <div className="flex flex-col">
      {" "}
      <p className="text-3xl font-[r] md:text-2xl self-center lg:text-4xl mt-20 font-semibold">
        Just In!
      </p>
      {loading ? (
        <>
          <div className="w-full justify-between space-y-10 lg:space-y-0 lg:space-x-12 py-10 lg:py-20 px-4 sm:px-10 md:px-10 lg:px-20 xl:px-40 flex flex-col lg:flex-row p-10">
            <div className="flex flex-col lg:flex-row lg:space-x-8 lg:w-[60%] w-full">
              <div className="relative w-full h-auto lg:h-[650px]">
                <div
                  alt=""
                  className="w-full bg-gray-100 animate-pulse h-full object-cover rounded-md"
                />
              </div>
            </div>
            <div className="lg:w-[40%] self-start w-full flex flex-col justify-center items-start">
              <p className="text-sm font-medium bg-gray-100 animate-pulse text-gray-100 mb-3 uppercase">
                {COMPANY} Admin
              </p>
              <p className="md:text-4xl bg-gray-100 animate-pulse text-gray-100 font-[MyFont] capitalize text-2xl font-bold mb-3">
                PEARL BEIGE KURTA SET
              </p>
              <p className="md:text-lg bg-gray-100 animate-pulse text-gray-100 text-base">
                Rs. 14,995.00
              </p>
              <p className="md:text-sm bg-gray-100 mt-2 animate-pulse text-gray-100 text-xs">
                Tax included. Shipping calculated at checkout
              </p>

              <div className="h-[1px] bg-gray-400 w-full mt-5" />

              <p className="md:text-base bg-gray-100 animate-pulse text-gray-100 mt-5 text-sm">
                This elegant cream-colored kurta set features intricate
                embroidery on premium, breathable fabric. The tailored fit,
                mandarin collar, and full sleeves offer both style and comfort.
                Perfect for weddings and festive celebrations, this kurta
                promises a regal look for any occasion.
              </p>

              <div className="flex mt-5 rounded-lg justify-start items-center w-[100%]">
                <h1 className="p-3 lg:p-5 bg-gray-100 animate-pulse text-gray-100 w-full rounded-lg text-sm lg:text-base font-medium">
                  Note: Before buying please discuss the size, color, and design
                  by contacting us.
                </h1>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="w-full justify-between space-y-10 lg:space-y-0 lg:space-x-12 py-10 lg:py-20 px-4 sm:px-10 md:px-10 lg:px-20 xl:px-40 flex flex-col lg:flex-row p-10">
            <div className="flex flex-col lg:flex-row lg:space-x-8 lg:w-[60%] w-full">
              <div className="hidden lg:flex flex-col mt-5 space-y-8">
                {images.length > 1 && (
                  <>
                    {images.map((item) => (
                      <img
                        onClick={() => handleImageClick(item)}
                        src={item}
                        alt=""
                        className={`w-20 bg-gray-100 ${
                          item === image && "border-[2px] border-black"
                        } cursor-pointer rounded-md h-auto`}
                      />
                    ))}
                  </>
                )}
              </div>
              <div className="relative w-full h-auto ">
                <img
                  src={image}
                  alt=""
                  className="w-full bg-gray-100 h-full object-cover rounded-md"
                />
                {shine && (
                  <div className="absolute inset-0 bg-white opacity-30 animate-shine rounded-md"></div>
                )}
              </div>
              <div className="flex overflow-x-auto py-3 lg:hidden flex-row mt-5 space-x-3">
                {images.length > 1 && (
                  <>
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
                  </>
                )}
              </div>
            </div>
            <div className="lg:w-[40%] self-start w-full flex flex-col justify-center items-start">
              <p className="text-sm font-medium mb-3 uppercase">
                {COMPANY} Admin
              </p>
              <p className="md:text-4xl font-[MyFont] capitalize text-2xl font-bold mb-3">
                {product[0]?.name}
              </p>
              <p className="md:text-lg text-base">
                Rs. {product[0]?.price?.toLocaleString()}
              </p>
              <p className="md:text-sm text-xs">
                Tax included. Shipping calculated at checkout
              </p>

              <div className="h-[1px] bg-gray-400 w-full mt-5" />

              <p className="md:text-base mt-5 text-sm">
                {product[0]?.description}
              </p>

              <div className="flex mt-5 rounded-lg justify-start items-center w-[100%]">
                <h1 className="p-3 lg:p-5 w-full rounded-lg text-sm lg:text-base font-medium text-green-600 bg-green-50">
                  Note: Before buying please discuss the size, color, and design
                  by contacting us.
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

              <div
                onClick={() => {
                  if (userInfo) {
                    dispatch(
                      addProduct({
                        name: product[0]?.name,
                        price: product[0]?.price,
                        image: product[0]?.image[0],
                        _id: product[0]?._id,
                      })
                    );
                    navigate("/buynow")
                  }else{
                    dispatch(openLoginModal())
                  }
                }}
                to={"/buynow"}
                className="p-3 justify-center flex px-5 mt-3 shadow-md w-full disabled:bg-gray-200 disabled:text-white rounded-md bg-[#10171F] cursor-pointer"
              >
                <span className="text-base text-white font-semibold">
                  Buy Now
                </span>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default JustIn;
