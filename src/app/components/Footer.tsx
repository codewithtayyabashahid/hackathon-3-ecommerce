import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-violet-50 text-gray-700 h-[532px] w-[1920px] mt-40">
      <div className="max-w-[1200px] mx-auto px-4 py-10">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-center border-b pb-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-800">Hekto</h2>
          <div className="flex items-center mt-4 md:mt-0">
            <input
              type="email"
              placeholder="Enter Email Address"
              className="p-2 border rounded-l-md w-[250px] focus:outline-none"
            />
            <button className="bg-pink-500 text-white px-4 py-2 rounded-r-md hover:bg-pink-600">
              Sign Up
            </button>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <p>17 Princess Road, London, Greater London NW1 8JR, UK</p>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Categories</h3>
            <ul>
              <li>Laptops & Computers</li>
              <li>Cameras & Photography</li>
              <li>Smart Phones & Tablets</li>
              <li>Video Games & Consoles</li>
              <li>Waterproof Headphones</li>
            </ul>
          </div>

          {/* Customer Care */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Customer Care</h3>
            <ul>
              <li>My Account</li>
              <li>Discount</li>
              <li>Returns</li>
              <li>Orders History</li>
              <li>Order Tracking</li>
            </ul>
          </div>

          {/* Pages */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Pages</h3>
            <ul>
              <li>Blog</li>
              <li>Browse the Shop</li>
              <li>Category</li>
              <li>Pre-Built Pages</li>
              <li>WooCommerce Pages</li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 text-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} EWebay - All Rights Reserved</p>
          <div className="flex justify-center mt-4 space-x-4">
            <span className="h-4 w-4 bg-gray-400 rounded-full"></span>
            <span className="h-4 w-4 bg-gray-400 rounded-full"></span>
            <span className="h-4 w-4 bg-gray-400 rounded-full"></span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;