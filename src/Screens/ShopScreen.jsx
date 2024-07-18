import React from "react";
import Navigator from "../Components/Navigator";
import { useParams } from "react-router";
import ProductCard from "../Components/ProductCard";
import { products } from "../data";

const ShopScreen = () => {
  const params = useParams();
  return (
    <div className="flex bg-[#fff] pb-56 min-h-screen px-3 sm:px-10 md:px-10 lg:px-20 flex-col overflow-hidden">
      <Navigator to={"Shop"} />

      <p className="text-2xl self-center mt-10 font-[Myfont] lg:text-4xl font-semibold">
        Products
      </p>


      <p className="text-base self-center lg:text-lg mt-10 font-medium mb-4">
        17 Products
      </p>
      <div className="grid w-[100%] pb-16 gap-x-3 md:gap-x-5 gap-y-10 lg:grid-cols-3 xl:grid-cols-4 grid-cols-2">
        {products.map((item) => (

        <ProductCard product={item} key={item.img} />
        ))}
      </div>
    </div>
  );
};

export default ShopScreen;
