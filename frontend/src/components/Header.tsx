import { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import logo from "./logo.png"


const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // State for sidebar visibility

  return (
    <div className="bg-green-950 py-4">
      <div className="px-9 mx-auto flex justify-between items-center">
        {/* Sidebar Toggle Button */}
        <div className="flex items-center space-x-4">
            <FontAwesomeIcon
            className="cursor-pointer text-white md:hidden"
            icon={isSidebarOpen ? faTimes : faBars}
            onClick={() => setIsSidebarOpen(!isSidebarOpen)} // Toggle sidebar visibility
            />

            {/* Website Name */}
           
            <Link to="/" className="flex items-center text-sans text-xl md:text-2xl text-white font-bold tracking-tight">
              <img src={logo} alt="Dhrti" className="h-9 w-auto " />
            </Link>
            
        </div>

        {/* Links for medium screens and up */}
        <div className="hidden md:flex space-x-1 text-sm md:text-base">
          <Link
            to="/sign-in"
            className="flex items-center text-white py-1 px-5 font-bold rounded-2xl hover:text-green-700 hover:bg-white"
          >
            Log In
          </Link>
          <Link
            to="/register"
            className="flex items-center text-white py-1 px-5 font-bold rounded-2xl hover:text-green-700 hover:bg-white"
          >
            Register
          </Link>
        </div>
      </div>

    </div>
  );
};

export default Header;
