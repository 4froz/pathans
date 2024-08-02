import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [shine, setShine] = useState(false);
  const [hasShined, setHasShined] = useState(false);

  const handleMouseEnter = () => {
   setIsHovered(true)
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  return (
    <div className="flex w-full flex-col bg-white">
      <Link
        to={`/product/${product._id}`}
        className="w-full"
      >
     <div className="h-56 relative overflow-hidden rounded-md md:h-[440px]">
      <img
        src={product.image[0]}
        className={`w-full h-full bg-gray-100  object-cover transition-opacity duration-500`}
        alt=""
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      />
      {shine && (
        <div className="absolute inset-0 bg-white opacity-30 animate-shine rounded-md"></div>
      )}
    </div>
      </Link>
      <div className="px-2 my-2 mt-4 text-center flex flex-col">
        {/* Name */}
        <span className="text-base line-clamp-1 uppercase  font-medium cursor-pointer">
          {product.name}
        </span>
        <span className="text-base  cursor-pointer">
          Rs. ₹{product.price.toLocaleString()}
        </span>
        {/* Desc */}
      </div>
    </div>
  );
};

export default ProductCard;
