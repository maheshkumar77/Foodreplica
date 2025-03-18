import React from "react";
import { motion } from "framer-motion";
import { Users, Briefcase, Star, Quote } from "lucide-react";

const AboutPage = () => {
  return (
    <div className="container mx-auto px-6 py-10 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="text-5xl font-extrabold text-gray-800">About Us</h1>
        <p className="text-lg text-gray-600 mt-4">
          Welcome to <span className="font-semibold text-indigo-600">Tasty Bites Delights</span>,
          your go-to platform for seamless and delicious food delivery. We aim
          to connect food lovers with their favorite restaurants while ensuring
          top-notch service and fast delivery.
        </p>

        <div className="mt-10 text-left">
          <h2 className="text-3xl font-bold text-gray-800 flex items-center gap-2">
            <Briefcase size={30} className="text-blue-500" /> Our Mission
          </h2>
          <p className="text-lg text-gray-600 mt-2">
            Our mission is to revolutionize food delivery by offering a
            user-friendly platform that ensures fast and reliable service,
            while supporting local restaurants and fostering a sustainable food
            ecosystem.
          </p>

          <h2 className="text-3xl font-bold text-gray-800 flex items-center gap-2 mt-8">
            <Users size={30} className="text-green-500" /> Our Leadership
          </h2>
          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-100 p-6 rounded-lg shadow-md text-center">
              <h3 className="text-2xl font-bold text-gray-900">John Doe</h3>
              <p className="text-gray-700 text-lg">CEO & Co-Founder</p>
              <p className="text-gray-600 mt-3">
                John has over 10 years of experience in the food tech industry
                and is dedicated to making food delivery more efficient and
                enjoyable.
              </p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-md text-center">
              <h3 className="text-2xl font-bold text-gray-900">Jane Smith</h3>
              <p className="text-gray-700 text-lg">COO & Co-Founder</p>
              <p className="text-gray-600 mt-3">
                Jane is a logistics expert who ensures that our operations run
                smoothly and that customers receive their food on time.
              </p>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-800 flex items-center gap-2 mt-8">
            <Star size={30} className="text-yellow-500" /> Customer Reviews
          </h2>
          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <Quote size={30} className="text-blue-500" />
              <p className="text-gray-700 mt-3 italic text-lg">
                "Amazing service! The food was delivered hot and fresh. I
                highly recommend this platform."
              </p>
              <p className="mt-3 text-right font-bold text-gray-900">- Sarah L.</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <Quote size={30} className="text-blue-500" />
              <p className="text-gray-700 mt-3 italic text-lg">
                "Fast delivery and great restaurant options. This is my go-to
                food delivery app!"
              </p>
              <p className="mt-3 text-right font-bold text-gray-900">- Mike D.</p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default AboutPage;
