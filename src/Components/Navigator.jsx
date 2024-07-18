import React from "react";

import { Link } from "react-router-dom";

const Navigator = ({ to, navigate, product,productName }) => {
  return (
    <div className="lg:flex hidden flex-row mt-5 text-sm items-center space-x-1">
      <Link to={`/`}>
        <span className="cursor-pointer mr-1">Home</span>
        <span>/</span>
      </Link>
      {product && (
        <>
          <Link to={`/${navigate}`}>
            <span className="cursor-pointer capitalize">{to }</span>
          </Link>
          <span>/</span>
        </>
      )}
      <span className="text-[#D11243] line-clamp-1 w-[50%] capitalize">{product ? productName : to}</span>
    </div>
  );
};

export default Navigator;
