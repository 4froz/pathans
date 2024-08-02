import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import { Link } from "react-router-dom";
import { COMPANY } from "../../consts";

const MenuModal = ({ loginModal, setLoginModal }) => {
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

  // useEffect(() => {
  //   if (loginModal) {
  //     setLoginModal(true);
  //     document.body.style.overflow = "hidden";
  //   } else {
  //     setLoginModal(false);
  //     document.body.style.overflow = "auto";
  //   }
  // }, [loginModal]);

  Modal.setAppElement("#root");
  return (
    <Modal
      onAfterClose={() => {
        setLoginModal(false);
        setOpen(true);
      }}
      isOpen={loginModal}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <div
        className={`bg-[#fff] animate-login ${
          !open && "animate-loginClose"
        } relative h-full xl:w-[30%] lg:w-[40%] sm:w-[50%] w-[90%] flex flex-col items-center text-[#4A4A4F]`}
      >
        <div className="flex w-full flex-row py-4 px-5 justify-between items-center">
          <span
            onClick={() => {
              setOpen(false);
              setTimeout(() => {
                setLoginModal(false);
              }, 300);
            }}
            className="font-medium text-white cursor-pointer text-xl"
          >
            x
          </span>
          <h1 className="md:text-xl text-white text-md uppercase font-bold font-[MyFont] text-[#000]">
            {COMPANY}
          </h1>
          <span
            onClick={() => {
              setOpen(false);
              setTimeout(() => {
                setLoginModal(false);
              }, 300);
            }}
            className="font-medium text-sm underline cursor-pointer"
          >
            Close
          </span>
        </div>

        <Link
          to={"/"}
          onClick={() => setLoginModal(false)}
          className="border-b-[1px] cursor-pointer w-full py-3 px-5"
        >
          <span className="text-base">Home</span>
        </Link>
        <Link
          to={"/shop"}
          onClick={() => setLoginModal(false)}
          className="border-b-[1px] cursor-pointer w-full py-3 px-5"
        >
          <span className="text-base">Shop All</span>
        </Link>
        <Link
          onClick={() => setLoginModal(false)}
          to={"/storelocator"}
          className="border-b-[1px] cursor-pointer w-full py-3 px-5"
        >
          <span className="text-base">Store Locator</span>
        </Link>
      </div>

      {/* overlay */}
      <div
        onClick={() => {
          setOpen(false);
          setTimeout(() => {
            setLoginModal(false);
          }, 300);
        }}
        className={`xl:w-[70%] lg:w-[60%] sm:w-[50%] w-[10%] animate-fadeIn ${
          !open && "animate-loginClose"
        } h-full flex justify-end items-start`}
      ></div>
    </Modal>
  );
};

export default MenuModal;
