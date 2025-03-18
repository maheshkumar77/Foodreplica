import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock, Facebook, Twitter, Instagram, Send } from "lucide-react";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Your message has been sent! We'll get back to you soon.");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center justify-center min-h-screen p-6 bg-gradient-to-r from-indigo-500 to-purple-600"
    >
      <motion.div
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-white shadow-2xl rounded-2xl p-8 w-full max-w-3xl relative"
      >
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-6">
          Get in Touch
        </h2>
        
        {/* Contact Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-700 mb-6">
          <div className="flex items-center gap-3 bg-gray-100 p-4 rounded-lg shadow-md">
            <Mail size={24} className="text-blue-500" />
            <p className="text-lg font-semibold">contact@example.com</p>
          </div>
          <div className="flex items-center gap-3 bg-gray-100 p-4 rounded-lg shadow-md">
            <Phone size={24} className="text-green-500" />
            <p className="text-lg font-semibold">+123 456 7890</p>
          </div>
          <div className="flex items-center gap-3 bg-gray-100 p-4 rounded-lg shadow-md">
            <MapPin size={24} className="text-red-500" />
            <p className="text-lg font-semibold">123 Street, City, Country</p>
          </div>
          <div className="flex items-center gap-3 bg-gray-100 p-4 rounded-lg shadow-md">
            <Clock size={24} className="text-yellow-500" />
            <p className="text-lg font-semibold">Mon-Fri: 9 AM - 6 PM</p>
          </div>
        </div>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            className="border border-gray-300 rounded-lg p-3 w-full focus:ring-2 focus:ring-blue-500 transition-all shadow-sm hover:shadow-md"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            className="border border-gray-300 rounded-lg p-3 w-full focus:ring-2 focus:ring-blue-500 transition-all shadow-sm hover:shadow-md"
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={form.message}
            onChange={handleChange}
            className="border border-gray-300 rounded-lg p-3 w-full h-24 focus:ring-2 focus:ring-blue-500 transition-all shadow-sm hover:shadow-md"
            required
          />
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg shadow-lg transition-all flex justify-center items-center gap-2"
          >
            <Send size={20} />
            Send Message
          </motion.button>
        </form>

        {/* Social Media Links */}
        <div className="mt-6 flex justify-center space-x-4">
          <a href="ll" className="text-blue-700 hover:text-blue-900 transition-all"><Facebook size={28} /></a>
          <a href="25" className="text-blue-400 hover:text-blue-600 transition-all"><Twitter size={28} /></a>
          <a href="255" className="text-pink-500 hover:text-pink-700 transition-all"><Instagram size={28} /></a>
        </div>

        {/* Embedded Map */}
        <div className="mt-8">
          <iframe
            className="w-full h-60 rounded-lg shadow-lg"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345086195!2d144.9537353153153!3d-37.81627997975181!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d43f1f0e3fd%3A0xb4b6c9140f5b6e7c!2sFlinders%20Street%20Station!5e0!3m2!1sen!2sus!4v1619226187463!5m2!1sen!2sus"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </motion.div>
    </motion.div>
  );
}
