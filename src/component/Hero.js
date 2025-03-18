import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Hero = () => {
   const navigate = useNavigate();
   const handleConfirmOrder =  () => {
   
    navigate("/restaurantlist");

};
  return (
    <div className="relative h-screen bg-gray-900 flex items-center justify-center overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-yellow-500 to-red-500 opacity-90"></div>

      {/* Hero Content */}
      <motion.div
        className="relative text-center text-white z-10 p-8"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-6xl font-extrabold drop-shadow-lg">
          🍔 Tasty Bites <span className="text-yellow-300">Delights</span> 🍕
        </h1>
        <p className="mt-4 text-xl font-medium">
          Experience the best food from your favorite restaurants, delivered hot & fresh! 🚀
        </p>

        {/* Call-to-Action Button */}
        <motion.button
        onClick={handleConfirmOrder}
          className="mt-6 bg-white text-red-500 px-8 py-4 rounded-full font-bold text-lg shadow-xl 
          hover:bg-red-500 hover:text-white transition-all duration-300"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Order Now
        </motion.button>
      </motion.div>

      {/* Floating Food Items */}
      <motion.img
        src="https://www.englishclub.com/images/vocabulary/food/good-foods.jpg"
        alt="Burger"
        className="absolute top-16 left-20 w-44 h-44 rounded-full shadow-xl border-4 border-white"
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 3, repeat: Infinity }}
      />

      <motion.img
        src="https://media.istockphoto.com/id/1045841884/photo/fresh-italian-pizza.jpg?s=612x612&w=0&k=20&c=3jg9mV9ZW6Pdt8mV02dGzTkm5j7qp0y7CQtQjyh8Dno="
        alt="Pizza"
        className="absolute bottom-16 right-24 w-52 h-52 rounded-full shadow-xl border-4 border-white"
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 3, repeat: Infinity, delay: 1 }}
      />

      <motion.img
        src="https://media.istockphoto.com/id/1144823591/photo/spaghetti-in-a-dish-on-a-white-background.jpg?s=612x612&w=0&k=20&c=SeEWmJfPQlX1zVUHPKjL-cgYeMs9cZ97-kdZMm7feA4="
        alt="Pasta"
        className="absolute top-32 right-40 w-40 h-40 rounded-full shadow-xl border-4 border-white"
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 3, repeat: Infinity, delay: 2 }}
      />

      <motion.img
        src="https://media.istockphoto.com/id/1345624336/photo/chicken-biriyani.jpg?s=612x612&w=0&k=20&c=adU_N0P-1SKMQLZu5yu7aPknfLLgbViI8XILqLP92A4="
        alt="Sushi"
        className="absolute bottom-24 left-32 w-36 h-36 rounded-full shadow-xl border-4 border-white"
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 3, repeat: Infinity, delay: 3 }}
      />
    </div>
  );
};

export default Hero;
