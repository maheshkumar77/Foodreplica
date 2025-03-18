import React from "react";
import {  Routes, Route } from "react-router-dom";
import ContactPage from "./component/Contactpage";
import Hero from "./component/Hero";
import NavBar from "./component/Navbar";
import OrderConfirmation from "./component/OrderConfirmation";
import OrderDetails from "./component/OrderDetails";
import AboutPage from "./component/OrderDetailsss";
import RestaurantDetails from "./component/RestaurantDetails";
import RestaurantList from "./component/RestaurantList";

function App() {
  return (
    
      <div className="min-h-screen w-full flex flex-col gap-6 bg-gray-50">
        <NavBar />
        <div className=" mt-3 py-6">
      
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/restaurantlist" element={<RestaurantList />} />
            <Route path="/restaurant/:id" element={<RestaurantDetails />} />
            <Route path="/restaurant/:id/order" element={<OrderDetails />} />
            <Route path="/order-confirmation" element={<OrderConfirmation />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/about" element={<AboutPage />} />
          </Routes>
        </div>
      </div>
  
  );
}

export default App;
