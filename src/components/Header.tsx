import React, { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import picofme from '../images/picofme_gradient.png';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.getItem("darkMode") === "true" ||
    (window.matchMedia("(prefers-color-scheme: dark)").matches)
  );

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => {
      const newMode = !prevMode;
      // Update the document class for dark mode
      document.documentElement.classList.toggle("dark", newMode);
      // Save the new mode to localStorage
      localStorage.setItem("darkMode", newMode.toString());
      return newMode;
    });
  };


  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="fixed w-full z-50 bg-neutral-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <a href="#hero" className="text-xl font-bold">
                <img className="max-h-[50px] mt-[14px]" src={picofme} alt="Logo"/>
              </a>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a href="#featuredPosts" className="hover:bg-neutral-700 px-3 py-2 rounded-md text-sm font-medium">
                Featured
              </a>
              <a href="#categories" className="hover:bg-neutral-700 px-3 py-2 rounded-md text-sm font-medium">
                Categories
              </a>
              <a href="#latestArticles" className="hover:bg-neutral-700 px-3 py-2 rounded-md text-sm font-medium">
                Latest
              </a>
              <a href="#portfolio" className="hover:bg-neutral-700 px-3 py-2 rounded-md text-sm font-medium">
                Portfolio
              </a>
              <a href="#about" className="hover:bg-neutral-700 px-3 py-2 rounded-md text-sm font-medium">
                About
              </a>
              <button onClick={toggleDarkMode} className="p-2 rounded-full hover:bg-neutral-700">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
                </svg>
              </button>
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="inline-flex items-center justify-center p-2 rounded-md hover:bg-neutral-700 focus:outline-none"
            >
              <FaBars className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
      {isMobileMenuOpen && (
        <div id="mobileMenu" className="bg-neutral-900">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#featuredPosts" className="block hover:bg-neutral-700 px-3 py-2 rounded-md text-base font-medium">
              Featured
            </a>
            <a href="#categories" className="block hover:bg-neutral-700 px-3 py-2 rounded-md text-base font-medium">
              Categories
            </a>
            <a href="#latestArticles" className="block hover:bg-neutral-700 px-3 py-2 rounded-md text-base font-medium">
              Latest
            </a>
            <a href="#portfolio" className="block hover:bg-neutral-700 px-3 py-2 rounded-md text-base font-medium">
              Portfolio
            </a>
            <a href="#about" className="block hover:bg-neutral-700 px-3 py-2 rounded-md text-base font-medium">
              About
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
