import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { CheckCircle, Truck, Timer } from "lucide-react";

const OrderConfirmation = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  if (!state) {
    return <div className="text-center text-xl mt-10">No Order Found</div>;
  }

  const { restaurant, distance, deliveryTime } = state;

  return (
    <div className="container mx-auto px-6 py-10 text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-white shadow-lg rounded-lg p-10 max-w-lg mx-auto"
      >
        <CheckCircle size={80} className="text-green-500 mx-auto" />
        <h1 className="text-3xl font-bold mt-4">Order Confirmed!</h1>
        <p className="text-gray-600 mt-2">Your order from <span className="font-bold">{restaurant.name}</span> is being prepared.</p>

        <div className="mt-6 bg-gray-100 p-4 rounded-lg shadow-md">
          <p className="text-gray-700 flex items-center justify-center gap-2">
            <Truck size={20} className="text-blue-500" /> Distance: <span className="font-bold">{distance} km</span>
          </p>
          <p className="text-gray-700 flex items-center justify-center gap-2 mt-1">
            <Timer size={20} className="text-green-500" /> Estimated Delivery: <span className="font-bold">{deliveryTime} minutes</span>
          </p>
        </div>

        <button
          onClick={() => navigate("/")}
          className="mt-6 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded-lg text-lg shadow-lg"
        >
          Back to Home
        </button>
      </motion.div>
    </div>
  );
};

export default OrderConfirmation;
