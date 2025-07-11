import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../customer/pages/HomePage/HomePage";
import Navigation from "../customer/components/Navigation/Navigation";
import Footer from "../customer/components/Footer/Footer";
import Cart from "../customer/components/Cart/Cart";
import Product from "../customer/components/product/Product";
import ProductDetails from "../customer/components/ProductDetails/ProductDetails";
import Checkout from "../customer/components/Checkout/Checkout";
import Order from "../customer/components/Order/Order";
import OrderDetails from "../customer/components/Order/OrderDetails";

const CustomerRoutes = () => {
  return (
    <div>
      <div>
        <Navigation />
     
      </div>
      <Routes>
        <Route path="/login" element={<HomePage />}></Route>
        <Route path="/register" element={<HomePage />}></Route>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route
          path="/:levelOne/:levelTwo/:levelThree"
          element={<Product />}
        ></Route>
        <Route path="/:product/:productId" element={<ProductDetails />}></Route>
        <Route path="/checkout" element={<Checkout />}></Route>
        <Route path="/account/order" element={<Order />}></Route>
        <Route
          path="/account/order/:orderId"
          element={<OrderDetails />}
        ></Route>
      </Routes>
      {/* <MainCarousel /> */}
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default CustomerRoutes;
