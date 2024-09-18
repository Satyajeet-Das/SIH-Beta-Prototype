import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "./logo.png";


const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // State for sidebar visibility

  return (
    <div className="py-4">
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
          <button className="text-white rounded-full py-1 px-4 font-bold bg-gradient-to-br from-[#00fcd3] from-10% via-[#2f74db] via-45% to-[#b63cb3] to-90% hover:from-[#00e6bf] hover:via-[#2968c5] hover:to-[#a834a1] transition duration-300 flex items-center space-x-2">
            <img src="src/assets/ai.webp" alt="Dhrti" className="h-6 w-auto filter invert brightness-0" />
            Generate Resume
          </button>


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
