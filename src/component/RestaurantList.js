import React from "react";
import { motion } from "framer-motion";
import { Star, MapPin } from "lucide-react";
import { useNavigate } from "react-router-dom";
import {restaurants } from "../data/data"

// const restaurants = [
//   {
//     id: 1,
//     name: "Spicy Bites",
//     location: "New York, NY",
//     rating: 4.5,
//     image: "https://source.unsplash.com/400x300/?restaurant,food",
//     menu: [
//       { name: "Burger", price: "$10" },
//       { name: "Pizza", price: "$15" },
//     ],
//   },
//   {
//     id: 2,
//     name: "Tandoori Treats",
//     location: "Los Angeles, CA",
//     rating: 4.7,
//     image: "https://source.unsplash.com/400x300/?restaurant,indian-food",
//     menu: [
//       { name: "Butter Chicken", price: "$12" },
//       { name: "Garlic Naan", price: "$5" },
//     ],
//   },
//   {
//     id: 3,
//     name: "Sushi World",
//     location: "San Francisco, CA",
//     rating: 4.8,
//     image: "https://source.unsplash.com/400x300/?restaurant,sushi",
//     menu: [
//       { name: "Salmon Roll", price: "$18" },
//       { name: "Tuna Nigiri", price: "$20" },
//     ],
//   },
// ];

const RestaurantList = () => {
  const navigate = useNavigate();

  const handleRestaurantClick = (restaurant) => {
    navigate(`/restaurant/${restaurant.id}`, { state: { restaurant } });
  };

  return (
    <div className="container mx-auto px-6 py-10">
      <h1 className="text-4xl font-bold text-center mb-10">Top Restaurants</h1>
      <div className="grid md:grid-cols-3 gap-6">
        {restaurants.map((restaurant) => (
          <motion.div
            key={restaurant.id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer"
            onClick={() => handleRestaurantClick(restaurant)}
          >
            <img src={restaurant.hotelimg} alt={restaurant.hoteladdress} className="w-full h-48 object-cover" />
            <div className="p-5">
              <h2 className="text-xl font-bold">{restaurant.hotelname}</h2>
              <p className="text-gray-600 flex items-center gap-2 mt-1">
                <MapPin size={16} className="text-red-500" /> {restaurant.location}
              </p>
              <p className="flex items-center gap-1 text-yellow-500 mt-2">
                <Star size={16} /> {restaurant.rating} / 5
              </p>
              <h3 className="mt-3 font-semibold">Menu</h3>
              <ul className="list-disc pl-4 text-gray-700">
                {restaurant.menu.map((item, index) => (
                  <li key={index}>
                    {item.name} - <span className="font-semibold">{item.price}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default RestaurantList;
