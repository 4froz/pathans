import React from "react";
import Navigator from "../Components/Navigator";
import { useParams } from "react-router";
import ProductCard from "../Components/ProductCard";
import { products } from "../data";

const ShopScreen = () => {
  const params = useParams();
  return (
    <div className="flex bg-[#fff] pb-56 min-h-screen px-3 sm:px-10 md:px-10 lg:px-10 flex-col overflow-hidden">
      <Navigator to={"Shop"} />

      <p className="text-2xl self-center font-[Myfont] lg:text-4xl mt-5 font-semibold">
        Products
      </p>

      <div className="grid mt-5 w-[100%] pb-16 gap-x-2 md:gap-x-5 gap-y-4 lg:grid-cols-3 xl:grid-cols-4 grid-cols-2">
        {products.map((item) => (

        <ProductCard product={item} key={item.img} />
        ))}
      </div>
    </div>
  );
};

export default ShopScreen;
