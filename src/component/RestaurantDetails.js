import React from "react";
import { useLocation, useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const RestaurantDetail = () => {
  const { state } = useLocation();
  const { id } = useParams();
  const navigate = useNavigate();
  const restaurant = state?.restaurant;

  if (!restaurant) {
    return <div className="text-center text-xl mt-10">Restaurant Not Found</div>;
  }

  // Handle Order Navigation
  const handlePlaceOrder = () => {
    navigate(`/restaurant/${id}/order`, { state: { restaurant } });
  };

  return (
    <div className="container mx-auto px-6 py-10">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white shadow-lg rounded-lg overflow-hidden"
      >
        {/* Restaurant Image */}
        <img src={restaurant.hotelimg} alt={restaurant.hotelname} className="w-full h-64 object-cover" />

        <div className="p-6">
          {/* Restaurant Name */}
          <h1 className="text-3xl font-bold">{restaurant.hotelname}</h1>

          {/* Location */}
          <p className="text-gray-500 text-lg mt-2">{restaurant.location}</p>

          {/* Rating */}
          <p className="text-yellow-500 font-semibold text-lg mt-1">⭐ {restaurant.rating} / 5</p>

          {/* Menu List */}
          <h3 className="mt-4 font-semibold text-xl">Menu</h3>
          <ul className="list-disc pl-6 text-gray-700">
            {restaurant.menu.map((item, index) => (
              <li key={index} className="mt-1">
                {item.name} - <span className="font-bold">{item.price}</span>
              </li>
            ))}
          </ul>

          {/* Place Order Button */}
          <button
            onClick={handlePlaceOrder}
            className="mt-6 bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded-lg"
          >
            Place Order
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default RestaurantDetail;
