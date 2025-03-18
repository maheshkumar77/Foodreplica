import React, { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-900 shadow-lg z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <motion.div
          className="text-3xl font-extrabold text-white tracking-wide flex items-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          🍽️ Tasty<span className="text-yellow-400">Eats</span>
        </motion.div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          {[
            { name: "Home", path: "/" },
            { name: "Restaurant List", path: "/restaurantlist" },
            { name: "About", path: "/about" },
            { name: "Contact", path: "/contact" },
          ].map((item, index) => (
            <motion.div key={index} whileHover={{ scale: 1.1 }}>
              <Link to={item.path} className="text-white text-lg font-medium relative">
                {item.name}
                <motion.div
                  className="h-1 bg-yellow-400 absolute bottom-0 left-0 w-full scale-x-0 origin-left"
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          className="md:hidden bg-gray-800 w-full py-4 absolute top-full left-0"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex flex-col items-center space-y-4">
            {[
              { name: "Home", path: "/" },
              { name: "Restaurant List", path: "/restaurantlist" },
              { name: "OrderDetails", path: "/oderdet" },
              { name: "Contact", path: "/contact" },
            ].map((item, index) => (
              <motion.div key={index} whileHover={{ scale: 1.1, color: "#FFD700" }}>
                <Link to={item.path} className="text-white text-lg font-medium">
                  {item.name}
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default NavBar;
