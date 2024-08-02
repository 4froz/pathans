import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { closeLoginModal } from "../../Redux/modalSlice";
import axios from "axios";
import { login } from "../../Redux/userSlice";
import { SERVER } from "../../consts";

const LoginModal = ({ loginModal, setLoginModal }) => {
  const customStyles = {
    content: {
      top: "0%",
      left: "auto",
      right: "0%",
      bottom: "auto",
      height: "100%",
      padding: "0",
      width: "100%",
      background: "transparent",
      background: "transparent",
      border: "transparent",
      borderRadius: "0",
      overflow: "hidden",
      display: "flex",
    },
    overlay: { zIndex: 2000, background: "rgba(0,0,0,.5)" },
  };
  const [open, setOpen] = useState(true);
  const [loading, setloading] = useState(false);
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const verifyPhoneNumber = (e) => {
    e.preventDefault();
    // Add your phone number verification logic here
  };

  const loginUser = async () => {
    try {
      setloading(true);
      const response = await axios.post(
        `${SERVER}api/users/login`,
        {
          name,
          number,
        }
      );
      const { data } = response;
      setOpen(false);
      setTimeout(() => {
        dispatch(closeLoginModal());
      }, 300);
      console.log("iiiiii"+data.name);

      dispatch(login( data ));
      localStorage.setItem("userInfo", JSON.stringify(data));

      setloading(false);
    } catch (error) {
      console.error("Error logging in:", error);
      // alert(error);
      setloading(false);
    }
  };

  useEffect(() => {
    if (loginModal) {
      setLoginModal(true);
      document.body.style.overflow = "hidden";
    } else {
      dispatch(closeLoginModal());
      document.body.style.overflow = "auto";
    }
  }, [loginModal]);

  Modal.setAppElement("#root");
  return (
    <Modal
      onAfterClose={() => {
        dispatch(closeLoginModal());
        setOpen(true);
      }}
      isOpen={loginModal}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <div
        onClick={() => {
          setOpen(false);
          setTimeout(() => {
            dispatch(closeLoginModal());
          }, 300);
        }}
        className={`xl:w-[70%] lg:w-[60%] sm:w-[50%] ${
          !open && "animate-cartCloseAnim"
        } h-full flex justify-end items-start`}
      ></div>
      <div
        className={`bg-[#fff] shadowModal animate-cartOpenAnim ${
          !open && "animate-close"
        } relative h-full xl:w-[30%] lg:w-[40%] w-[100%] flex flex-col`}
      >
        <div className="relative w-full h-screen">
          {/* <div className="h-full w-full">
            <img
              src={
                "https://vagads.com/cdn/shop/files/Vagad-_Cover-2000x1000-01.jpg?v=1701753274&width=2000"
              }
              alt="Background"
              className="w-full h-full object-cover"
            />
          </div> */}
          <div className="flex flex-col w-[100%] lg:w-[95%] h-[100%] justify-center items-center rounded-t-md bg-white absolute p-5 bottom-0 mx-auto left-0 right-0">
            <h1 className="text-3xl absolute top-24 cursor-pointer font-bold">
              Sign In / Sign Up
            </h1>
            <h1 className="text-[24px] mt-10 text-center font-normal">
              Welcome back! you've been missed
            </h1>
            <form className="w-full mt-5" onSubmit={verifyPhoneNumber}>
              <div className="flex flex-col mt-4 text-left w-full">
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="flex focus:outline-none bg-gray-50 pr-2 w-full items-center border border-gray-200 p-2.5"
                  placeholder="Enter Your Name"
                />
              </div>
              <div className="flex flex-col my-4 text-left w-full">
                <input
                  type="tel"
                  required
                  maxLength={10}
                  value={number}
                  onChange={(e) => setNumber(e.target.value)}
                  className="flex focus:outline-none bg-gray-50 pr-2 w-full items-center border border-gray-200 p-2.5"
                  placeholder="Enter Your Mobile Number"
                />
              </div>
              <button
                onClick={() => loginUser()}
                disabled={!name || number.length < 10 || loading}
                type="submit"
                className="p-3 mt-8 rounded-md w-full self-start disabled:bg-gray-100 disabled:text-gray-500 bg-stone-800 text-lg font-semibold text-white"
              >
                {loading ? "Loading" : "Confirm"}
              </button>
            </form>
            <div className="flex items-center flex-row  mt-10 ">
              <span className="lg:text-base text-center text-sm">
                By signing in you agree to our Terms and Condition
              </span>
            </div>
          </div>
          <div
            onClick={() => {
              setOpen(false);
              setTimeout(() => {
                dispatch(closeLoginModal());
              }, 300);
            }}
            className="absolute overflow-hidden left-5 w-10 shadow-md cursor-pointer h-10 justify-center items-center flex rounded-full bg-white top-5"
          >
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAP1BMVEX///8AAADo6Ojr6+vl5eXt7e0LCwsVFRUmJib5+fnDw8Pi4uITExOQkJBsbGx2dnYdHR3Pz88xMTGWlpYrKyuM1lhVAAACZUlEQVR4nO3c6XbCIBCGYTFq1BqX1vu/1ko3A0QNSyozvs9/PDPnk2AScDYDAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADAq3vb78y62ySP33Tvpt2/FayosK35smsSxzft9wdsi1ZV0Nz8Smux+Rs/L1xZKYe/Cs0yYfjyOvxQvLYy2muJCSnOe6PbCaorwfTFprh0Rk9SX76zU2RcinNn7PtEFeb6cKqMStFN0HxMVmOmo1vn+BTdBM1xwhrzeIWObrHxxtW6WFwsklr0G1xMXGWWlBYFJWjFtyiswXAuPio4de4+kZ/i/UXDWybqT9CKSVFggtb4FEUmaI29eMTO2YqM+/KJu4r2jWlRdINjWhTe4OMWxTf4qAWhy4TLb6K/aIhdJly3U1SRoHUrRSUJWsNLuuCFPjT0dVRwFe0LW1TWYNDi6rRS1mCYoroGw3nnz0sFbqeoIkHrVopKErSGU1SToDXUoqoGLy16i4RZKWtwNjt5HZ6eXVBpYYaKLjPW0DxU1aL6a6n69VD9bxr1v0vV31sE94faWgzv8VU9pXmB5zTqn7Wpf16q/pm3+vcW6t89qX9/qP4dsPr3+Or3YvhbhtTtp1G/JypmIRC5aOTtTax6f/C32FTEzcW4BC1Ru7xfYJ93mb36Fbd4727iHjEtblq30OQzM236KdRpdWkJWkLOPa0TE7TcFNcTVZgrOUFLxPnDXXKCloQzpJnngHtX1FrPAeee5b6Or3a5+DmPf0w+j/9zRLPa8/iXFL7+UyHjA7qzaffVJggAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIB/8wlnwAz/znrbLQAAAABJRU5ErkJggg=="
              alt=""
              className="w-9 h-9"
            />
          </div>
        </div>
      </div>

      {/* overlay */}
    </Modal>
  );
};

export default LoginModal;
