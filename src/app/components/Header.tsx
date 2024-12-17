"use client";
import Link from "next/link";
import { FaRegEnvelope } from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";
import { RiUser3Line } from "react-icons/ri";
import { CiHeart } from "react-icons/ci";
import { BsFillCartFill } from "react-icons/bs";
import { useState } from "react";

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  return (
    <header className="bg-purple-600 text-white w-[1920px] h-[44px]">
    <div className="container mx-auto flex items-center justify-between py-4 px-6">
      <div className="flex  justify-between items-center space-x-5 gap-9">
        <div className="flex items-center space-x-2">
          <FaRegEnvelope />
          <p>mhhasanul@gmail.com</p>
        </div>
        <div className="flex items-center space-x-2">
          <FiPhoneCall />
          <p>(12345)67890</p>
        </div>
      </div>
      <div className="flex items-center gap-4">
      <select className="bg-purple-600 text-white outline-none">
            <option>English</option>
            <option>Spanish</option>
          </select>
          <select className="bg-purple-600 text-white outline-none ml-2 ">
            <option>USD</option>
            <option>EUR</option>
          </select>
          <button className="ml-2 hover:text-sky-500">Login</button>
          <RiUser3Line />
          <button className="ml-2 hover:text-sky-500">Wishlist</button>
          <CiHeart className="text-2xl" />
          <BsFillCartFill  className="text-2xl"/>
        </div>
    </div>
{/**Main Navigation */}
<nav className="bg-white text-black h-[100px]  ">
        <div className="container mx-auto flex items-center justify-between py-4 px-6">
          <div className="text-3xl font-extrabold">Hekto</div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-6">
           <Link href="#">Home</Link>
            <Link href="#">Pages</Link>
            <Link href="#">Products</Link>
            <Link href="#">Blog</Link>
            <Link href="#">Shop</Link>
          <Link href="/Contactus">Contact</Link>
          </ul>

          {/* Mobile Menu Button */}
          <button
            className="block md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            ☰
          </button>
          {/* Search */}
          <div>
            <input
              type="text"
              placeholder="Search"
              className="rounded px-4 py-2"
            />
            <button className="bg-white text-purple-700 px-4 py-2">🔍</button>
          </div>
          </div>
           {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <ul className="md:hidden bg-purple-600">
            <li className="py-2 px-4 border-b">Home</li>
            <li className="py-2 px-4 border-b">Pages</li>
            <li className="py-2 px-4 border-b">Products</li>
            <li className="py-2 px-4 border-b">Blog</li>
            <li className="py-2 px-4 border-b">Shop</li>
            <li className="py-2 px-4">Contact</li>
          </ul>
        )}
          </nav>
  </header>
  )
}
export default Navbar;
          