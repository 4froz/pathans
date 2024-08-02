import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeScreen from "./Screens/HomeScreen";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import ShopScreen from "./Screens/ShopScreen";
import ProductScreen from "./Screens/ProductScreen";
import ScrollToTop from "./Components/ScrollToTop";
import ProfileScreen from "./Screens/ProfileScreen";
import OrderScreen from "./Screens/OrdersScreen";
import BuyNowScreen from "./Screens/BuyNowScreen";


const App = () => {
  return (
    <div className="overflow-auto">
      <BrowserRouter>
          <Header />
        <ScrollToTop>
          <Routes>
            <Route path="/" element={<HomeScreen />} />
            <Route path="/product/:id" element={<ProductScreen />} />
            <Route path="/order/:id" element={<OrderScreen />} />
            <Route path="/shop" element={<ShopScreen />} />
            <Route path="/profile" element={<ProfileScreen />} />
            <Route path="/buynow" element={<BuyNowScreen />} />
            {/* Company */}
          </Routes>
        </ScrollToTop>
          <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
