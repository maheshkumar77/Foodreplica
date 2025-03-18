import React, { useState, useEffect } from "react";
import { useLocation, useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { MapPin, Star, Timer, Truck } from "lucide-react";
import axios from "axios";

const OrderDetails = () => {
  const { state } = useLocation();
  const { id } = useParams();
  const navigate = useNavigate();
  const [userLocation, setUserLocation] = useState(null);
  const [distance, setDistance] = useState(null);
  const [deliveryTime, setDeliveryTime] = useState(null);
  const [error, setError] = useState("");
  const restaurant = state?.restaurant;

  const calculateHaversineDistance = (lat1, lon1, lat2, lon2) => {
    const R = 6371; // Radius of Earth in km
    const dLat = (lat2 - lat1) * (Math.PI / 180);
    const dLon = (lon2 - lon1) * (Math.PI / 180);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(lat1 * (Math.PI / 180)) * Math.cos(lat2 * (Math.PI / 180)) *
        Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c; // Distance in km
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setUserLocation({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
      },
      (err) => {
        setError("Failed to fetch location. Please allow location access.");
        console.error(err);
      }
    );
  }, []);

  useEffect(() => {
    if (userLocation && restaurant) {
      const { lat: userLat, lng: userLng } = userLocation;
      const { lat: restaurantLat, lng: restaurantLng } = restaurant.hotellocation.restaurant;

      const calculatedDistance = calculateHaversineDistance(userLat, userLng, restaurantLat, restaurantLng);
      setDistance(calculatedDistance.toFixed(2)); 

      const speed = 10; 
      const estimatedTime = (calculatedDistance / speed) * 60; 
      setDeliveryTime(Math.round(estimatedTime)); 
    }
  }, [userLocation, restaurant]);

  if (!restaurant) {
    return <div className="text-center text-xl mt-10">Restaurant Not Found</div>;
  }

  const handleConfirmOrder =  () => {
   
      navigate("/order-confirmation", {
        state: { restaurant, distance, deliveryTime },
      });
  
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
          <h1 className="text-3xl font-bold">{restaurant.hotelname}</h1>
          <p className="text-gray-500 text-lg flex items-center gap-2 mt-2">
            <MapPin size={20} className="text-red-500" /> {restaurant.location}
          </p>
          <p className="text-yellow-500 font-semibold text-lg flex items-center gap-1 mt-1">
            <Star size={20} /> {restaurant.rating} / 5
          </p>
          <div className="mt-4 bg-gray-100 p-4 rounded-lg shadow-md">
            <p className="text-gray-700 flex items-center gap-2">
              <Truck size={20} className="text-blue-500" /> Restaurant is{" "}
              <span className="font-bold">{distance} km</span> away.
            </p>
            <p className="text-gray-700 flex items-center gap-2 mt-1">
              <Timer size={20} className="text-green-500" /> Estimated delivery time:{" "}
              <span className="font-bold">{deliveryTime} minutes</span>.
            </p>
          </div>
          <h3 className="mt-6 font-semibold text-xl">Your Order</h3>
          <ul className="list-disc pl-6 text-gray-700">
            {restaurant.menu.map((item, index) => (
              <li key={index} className="mt-1">
                {item.name} - <span className="font-bold">{item.price}</span>
              </li>
            ))}
          </ul>
          <button
            onClick={handleConfirmOrder}
            className="mt-6 bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-6 rounded-lg text-lg shadow-lg"
          >
            Confirm Order
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default OrderDetails;
