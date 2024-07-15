import React from "react";
const Footer = () => {
  return (
    <div className="bg-[#EFEFED] py-10 px-9 lg:p-28 lg:px-36 lg:items-start lg:justify-between flex lg:flex-row flex-col space-y-5">
      {/* First */}
      <div className="flex flex-col">
        <h1 className="text-5xl font-[MyFont] font-[800] capitalize">
          PATHAN'S COTURE
        </h1>
        <span className="font-semibold">© 2022 PATHAN'S COTURE.</span>
        <span className="font-semibold">All Rights Reserved</span>
      </div>
      <hr />

      <div className="flex flex-col space-y-4">
        <h1 className="font-semibold text-lg uppercase">About Us</h1>
        <span className="cursor-pointer">About Us</span>
        <span className="cursor-pointer">Contact Us</span>
      </div>
      <hr />

      <div className="flex flex-col space-y-4">
        <h1 className="font-semibold text-lg uppercase">Follow Us</h1>
        <span className="cursor-pointer">
          <i class="fa-brands fa-instagram"></i> Instagram
        </span>
        <span className="cursor-pointer">
          <i class="fa-brands fa-facebook-f"></i> Facebook
        </span>
        <span className="cursor-pointer">
          <i class="fa-brands fa-twitter"></i> Twitter
        </span>
      </div>
      <hr />

      <div className="flex flex-col space-y-4">
        <h1 className="font-semibold text-lg uppercase">Company</h1>
        <span className="cursor-pointer">Privacy Policy</span>
        <span className="cursor-pointer">Terms & Condition</span>
      </div>
      <hr />
    </div>
  );
};

export default Footer;
