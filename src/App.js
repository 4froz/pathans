import React from "react";
import {
  BrowserRouter,
  createBrowserRouter,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";
import HomeScreen from "./Screens/HomeScreen";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import ShopScreen from "./Screens/ShopScreen";
import ProductScreen from "./Screens/ProductScreen";
import ScrollToTop from "./Components/ScrollToTop";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Header />
          <HomeScreen />
          <Footer />
        </>
      ),
    },
    {
      path: "/shop",
      element: (
        <>
          <Header />
          <ShopScreen />
          <Footer />
        </>
      ),
    },
    {
      path: "/product/:id",
      element: (
        <>
          <Header />
          <ProductScreen />
          <Footer />
        </>
      ),
    },
  ]);
  return (
    <BrowserRouter>
      <Header />
      <ScrollToTop>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/product/:id" element={<ProductScreen />} />
          <Route path="/shop" element={<ShopScreen />} />
          {/* Company */}
        </Routes>
      </ScrollToTop>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
