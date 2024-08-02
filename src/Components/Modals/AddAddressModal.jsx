import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { closesuccesModal } from "../../Redux/modalSlice";

const SuccessModal = ({ addressModal, setAddressModal }) => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  Modal.setAppElement("#root");
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      padding: "0",
      width: `${
        width <= "640"
          ? "90%"
          : width <= "768"
          ? "60%"
          : width >= "1024" && "30%"
      }`,
    },
    overlay: { zIndex: 2500, background: "rgba(0,0,0,.7)" },
  };

  useEffect(() => {
    document.body.style.overflow = "hidden";
  }, []);

  const isOpen = useSelector((state) => state.modal.succesModal);

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const dispatch = useDispatch();

  return (
    <Modal
      shouldCloseOnOverlayClick={true}
      style={customStyles}
      isOpen={addressModal}
    >
      <div className="bg-white flex flex-col items-center p-5 md:px-5 px-7 py-7">
        <img
          className="lg:w-[200px] w-[100px] h-auto"
          src="https://static.vecteezy.com/system/resources/previews/024/212/031/original/cardboard-box-with-check-mark-confirmed-order-delivery-concept-return-parcel-to-courier-shipment-checklist-cartoon-free-png.png"
          alt=""
        />
        <span
          style={{ fontFamily: "Segoe UI" }}
          className="font-normal text-xl"
        >
          Hey {userInfo?.name},
        </span>
        <span
          style={{ fontFamily: "Segoe UI" }}
          className="font-bold mt-5 text-2xl"
        >
          Your Order is Confirmed
        </span>
        <span style={{ fontFamily: "Segoe UI" }} className="text-center mt-0">
          Our skilled artisans are crafting your dress with care 🥰.
        </span>

        <div className="flex flex-row mt-5 w-full  bg-white space-x-2">
          <Link
            to={`/order/${isOpen.orderId}`}
            onClick={() => dispatch(closesuccesModal())}
            className="p-3 justify-center flex px-5 w-full  bg-[#fff] border rounded-md cursor-pointer"
          >
            <span className="text-base text-black font-medium">View Order</span>
          </Link>

          <div
            onClick={() => dispatch(closesuccesModal())}
            className="p-3 justify-center flex px-5 w-full rounded-md bg-[#10171F] cursor-pointer"
          >
            <span className="text-base text-white font-medium">Continue</span>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default SuccessModal;
