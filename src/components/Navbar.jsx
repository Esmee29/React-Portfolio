import { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/logo-1.svg';
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";

const Navbar = () => {
  const [isNavbarVisible, setIsNavbarVisible] = useState(false);
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const [activeItem, setActiveItem] = useState(null);

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
    <nav className="bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src={Logo} className="h-8" alt="Logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Esmee Fulcher</span>
        </Link>
        <button
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
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
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <Link
                to="/"
                className={`block py-2 px-3 ${activeItem === 'home' ? 'text-blue-700 dark:text-blue-500' : 'text-gray-900 dark:text-white'} rounded md:bg-transparent md:p-0`}
                aria-current="page"
                onClick={() => handleItemClick('home')}
              >
                Home
              </Link>
            </li>
            <li className="relative">
              <button
                onClick={toggleDropdown}
                className="flex items-center justify-between w-full py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
              >
                Projects {isDropdownVisible ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
              </button>
              <div id="dropdownNavbar" className={`absolute left-0 top-full mt-2 z-10 ${isDropdownVisible ? 'block' : 'hidden'} font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600`}>
                <ul className="py-2 text-sm text-gray-700 dark:text-gray-400" aria-labelledby="dropdownLargeButton">
                  
                  <li>
                    <Link
                      to="/design-projects"
                      className={`block px-4 py-2 ${activeItem === 'design-projects' ? 'text-blue-700 dark:text-blue-500' : 'text-gray-900 dark:text-white'} hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white`}
                      aria-current="page"
                      onClick={() => handleItemClick('design-projects')}
                    >
                      Design Projects
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/developer-projects"
                      className={`block px-4 py-2 ${activeItem === 'developer-projects' ? 'text-blue-700 dark:text-blue-500' : 'text-gray-900 dark:text-white'} hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white`}
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
                className={`block py-2 px-3 ${activeItem === 'about' ? 'text-blue-700 dark:text-blue-500' : 'text-gray-900 dark:text-white'} rounded md:bg-transparent md:p-0`}
                aria-current="page"
                onClick={() => handleItemClick('about')}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className={`block py-2 px-3 ${activeItem === 'contact' ? 'text-blue-700 dark:text-blue-500' : 'text-gray-900 dark:text-white'} rounded md:bg-transparent md:p-0`}
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