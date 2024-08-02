import React from "react";
import { useLocation } from "react-router";
import { COMPANY } from "../consts";
const Footer = () => {
  const location = useLocation()
  return (
    <div className={`bg-[#EFEFED] ${location.pathname === '/buynow' && 'hidden'} pb-10 flex flex-col`}>
      <div className=" py-10 px-9 lg:py-5 lg:px-16 lg:items-center lg:justify-between flex lg:flex-row flex-col space-y-8">
        {/* First */}
        {/* <div className="flex flex-col">
        <h1 className="text-5xl font-[MyFont] font-[800] capitalize">
          PATHAN'S COTURE
        </h1>
        <span className="font-semibold">© 2022 PATHAN'S COTURE.</span>
        <span className="font-semibold">All Rights Reserved</span>
      </div> */}

        <div className="flex flex-col space-y-4">
          <h1 className="font-semibold text-lg uppercase">About Us</h1>
          <div className="flex flex-col text-sm space-y-1">
            <span className="cursor-pointer">About Us</span>
            <span className="cursor-pointer">Contact Us</span>
          </div>
        </div>

        <div className="flex flex-col space-y-4">
          <h1 className="font-semibold text-lg uppercase">Follow Us</h1>
          <div className="flex flex-col space-y-1">
            <span className="cursor-pointer text-sm">
              <i class="fa-brands fa-instagram"></i> Instagram
            </span>
            <span className="cursor-pointer text-sm">
              <i class="fa-brands fa-facebook-f"></i> Facebook
            </span>
            <span className="cursor-pointer text-sm">
              <i class="fa-brands fa-twitter"></i> Twitter
            </span>
          </div>
        </div>

        <div className="flex flex-col space-y-4">
          <h1 className="font-semibold text-lg uppercase">Company</h1>
          <div className="flex flex-col text-sm space-y-1">
            <span className="cursor-pointer">Privacy Policy</span>
            <span className="cursor-pointer">Refund Policy</span>
            <span className="cursor-pointer">Shipping Policy</span>
            <span className="cursor-pointer">Terms & Condition</span>
          </div>
        </div>
      </div>
      <span className="text-sm px-9 lg:px-16 text-black">
        {COMPANY} &#x2022; © 2024 All Rights Reserved{" "}
      </span>
    </div>
  );
};

export default Footer;
