import React from "react";
import Logo from "./navbar-components/action-buttons";

// Start Generation Here
const Navbar = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        <Logo />
        <ul className="flex space-x-4">
          <li>
            <a href="/" className="text-gray-700 hover:text-gray-900">
              Home
            </a>
          </li>
          <li>
            <a href="/about" className="text-gray-700 hover:text-gray-900">
              About
            </a>
          </li>
          <li>
            <a href="/contact" className="text-gray-700 hover:text-gray-900">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
