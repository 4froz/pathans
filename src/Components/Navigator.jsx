import React from "react";

import { Link } from "react-router-dom";

const Navigator = ({ to, navigate, product,productName }) => {
  return (
    <div className="lg:flex mt-5 hidden text-sm items-center space-x-1">
      <Link to={`/`}>
        <span className="cursor-pointer">Home /</span>
      </Link>
      {product && (
        <>
          <Link to={`/${navigate}`}>
            <span className="cursor-pointer capitalize ml-1">{to }</span>
          </Link>
          <span>/</span>
        </>
      )}
      <span className="text-[#D11243] capitalize">{product ? productName : to}</span>
    </div>
  );
};

export default Navigator;
