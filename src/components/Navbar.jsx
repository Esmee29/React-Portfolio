import { useState, useEffect } from 'react'; // Import useEffect here
import { Link, useLocation } from 'react-router-dom';
import Logo from '../assets/favicon-32x32.png';
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";

const Navbar = () => {
  const [isNavbarVisible, setIsNavbarVisible] = useState(false);
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const [activeItem, setActiveItem] = useState(null);
  const location = useLocation(); // Get the current location

  // Update active item based on current path
  const updateActiveItem = () => {
    const path = location.pathname;
    if (path === '/') {
      setActiveItem('home');
    } else if (path === '/design-projects') {
      setActiveItem('design-projects');
    } else if (path === '/developer-projects') {
      setActiveItem('developer-projects');
    } else if (path === '/about') {
      setActiveItem('about');
    } else if (path === '/contact') {
      setActiveItem('contact');
    }
  };

  // Update active item on location change
  useEffect(() => {
    updateActiveItem();
  }, [location]);

  const toggleNavbar = () => {
    setIsNavbarVisible(!isNavbarVisible);
  };

  const toggleDropdown = () => {
    setIsDropdownVisible(!isDropdownVisible);
  };

  const handleItemClick = (item) => {
    setActiveItem(item);
  };

  return (
    <nav className="bg-blue-900 text-white border-gray-200 dark:border-gray-700">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        {/* Logo - visible only on mobile screens */}
        <Link 
          to="/" 
          className="flex items-center space-x-3 rtl:space-x-reverse md:hidden"
          onClick={() => handleItemClick('home')} // Set activeItem to 'home'
        >
          <img src={Logo} className="h-8" alt="Logo" />
        </Link>
        
        {/* "Esmee Fulcher" - visible only on larger screens */}
        <Link 
          to="/" 
          className="hidden md:flex items-center space-x-3 rtl:space-x-reverse"
          onClick={() => handleItemClick('home')} // Set activeItem to 'home'
        >
          <span className="self-center text-2xl font-semibold whitespace-nowrap">Esmee Fulcher</span>
        </Link>
        
        <button
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-200 rounded-lg md:hidden hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-600"
          onClick={toggleNavbar}
          aria-controls="navbar-dropdown"
          aria-expanded={isNavbarVisible}
        >
          <span className="sr-only">Open main menu</span>
          <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
          </svg>
        </button>
        <div className={`w-full md:block md:w-auto ${isNavbarVisible ? 'block' : 'hidden'}`} id="navbar-dropdown">
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-blue-900 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
            <li>
              <Link
                to="/"
                className={`block py-2 px-3 ${activeItem === 'home' ? 'text-blue-300' : 'text-gray-200'} rounded md:p-0 hover:text-blue-300`}
                aria-current="page"
                onClick={() => handleItemClick('home')}
              >
                Home
              </Link>
            </li>
            <li className="relative">
              <button
                onClick={toggleDropdown}
                className="flex items-center justify-between w-full py-2 px-3 text-gray-200 rounded hover:bg-blue-800 md:hover:bg-transparent md:border-0 md:hover:text-blue-300 md:p-0"
              >
                Projects {isDropdownVisible ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
              </button>
              <div id="dropdownNavbar" className={`absolute left-0 top-full mt-2 z-10 ${isDropdownVisible ? 'block' : 'hidden'} font-normal bg-blue-900 divide-y divide-gray-700 rounded-lg shadow w-44`}>
                <ul className="py-2 text-sm">
                  <li>
                    <Link
                      to="/design-projects"
                      className={`block px-4 py-2 rounded ${activeItem === 'design-projects' ? 'bg-blue-800 text-blue-300' : 'text-gray-200 hover:bg-blue-800 hover:text-blue-300'}`}
                      aria-current="page"
                      onClick={() => handleItemClick('design-projects')}
                    >
                      Design Projects
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/developer-projects"
                      className={`block px-4 py-2 rounded ${activeItem === 'developer-projects' ? 'bg-blue-800 text-blue-300' : 'text-gray-200 hover:bg-blue-800 hover:text-blue-300'}`}
                      aria-current="page"
                      onClick={() => handleItemClick('developer-projects')}
                    >
                      Developer Projects
                    </Link>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <Link
                to="/about"
                className={`block py-2 px-3 ${activeItem === 'about' ? 'text-blue-300' : 'text-gray-200 hover:text-blue-300'} rounded md:p-0`} // Updated styles
                aria-current="page"
                onClick={() => handleItemClick('about')}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className={`block py-2 px-3 ${activeItem === 'contact' ? 'text-blue-300' : 'text-gray-200 hover:text-blue-300'} rounded md:p-0`} // Updated styles
                aria-current="page"
                onClick={() => handleItemClick('contact')}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
