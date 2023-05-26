import React from "react";
import { useState } from "react";


// Note: Change <a> to <Link> for react-router-dom
function NavBar() {
  // Nav Bar State
  const [showNavBar, setShowNavBar] = useState(false);

  function toggleNavBar() {
    setShowNavBar(!showNavBar);
  }

  return (
    <div>
      <nav className="border-gray-200 bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="/" className="flex items-center">
            <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">NU EATS</span>
          </a>
          <button onClick={toggleNavBar} type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-hamburger" aria-expanded="false">
            <span className="sr-only">Open main menu</span>
            <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
          </button>
          { showNavBar && 
            <div className="w-full" id="navbar-hamburger">
              <ul className="flex flex-col font-medium mt-4 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
                <li>
                  <a href="/" className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded dark:bg-blue-600" aria-current="page">About</a>
                </li>
                <li>
                  <a href="/" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Daily Activity</a>
                </li>
                <li>
                  <a href="/" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white">Menu</a>
                </li>
              </ul>
            </div>
          }
        </div>
      </nav>
    </div>

  );
}

export default NavBar;
