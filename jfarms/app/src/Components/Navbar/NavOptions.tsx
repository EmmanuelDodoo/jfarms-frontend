"use client";

import { useState, useEffect } from "react";

const closedSVG = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="w-6 h-6 "
    aria-hidden="true"
    fill="currentColor"
    viewBox="0 -960 960 960"
  >
    <path
      fillRule="evenodd"
      d="m249-207-42-42 231-231-231-231 42-42 231 231 231-231 42 42-231 231 231 231-42 42-231-231-231 231Z"
      clipRule="evenodd"
    />
  </svg>
);

const hamburgerSVG = (
  <svg
    className="w-6 h-6 "
    aria-hidden="true"
    fill="currentColor"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
      clipRule="evenodd"
    ></path>
  </svg>
);

export default function NavOptions() {
  const [hamburgerExpanded, setHamburgerExpanded] = useState(false);

  function mobileMenuToggle() {
    const menu = document.getElementById("nav-item-list");
    menu?.classList.toggle("hidden");
    setHamburgerExpanded(!hamburgerExpanded);
  }

  function handleCollapseOnOutsideClick(event: MouseEvent) {
    const dropdownMenu = document.getElementById("mobile-menu");
    const menu = document.getElementById("nav-item-list");

    //@ts-ignore
    if (dropdownMenu && !dropdownMenu.contains(event.target)) {
      menu?.classList.add("hidden");
      setHamburgerExpanded(false);
    }
  }

  useEffect(() => {
    if (hamburgerExpanded) {
      window.addEventListener("click", handleCollapseOnOutsideClick);
    }
    //Clean up function
    return () => {
      window.removeEventListener("click", handleCollapseOnOutsideClick);
    };
  }, [hamburgerExpanded]);

  return (
    <div
      className="items-center justify-between w-full lg:flex lg:w-auto relative"
      id="mobile-menu"
      aria-live="polite"
    >
      <button
        type="button"
        className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700"
        aria-controls="mobile-menu"
        aria-expanded={hamburgerExpanded}
        onClick={mobileMenuToggle}
      >
        <span className="sr-only">Open main menu</span>
        {hamburgerExpanded ? closedSVG : hamburgerSVG}
      </button>
      <ul
        id="nav-item-list"
        className="hidden absolute lg:relative top-10 lg:top-auto -right-5 md:-right-12 lg:right-auto w-72 md:w-96 lg:w-auto  z-50 lg:z-auto lg:flex flex-col font-medium p-4 lg:p-0 mt-4 border border-gray-100 rounded-lg lg:flex-row lg:space-x-8 lg:mt-0 lg:border-0  dark:bg-gray-800 lg:dark:bg-gray-900 dark:border-gray-700"
      >
        <li>
          <a
            href="#"
            className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded lg:bg-transparent lg:text-blue-700 lg:p-0 lg:dark:text-blue-500"
            aria-current="page"
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="#"
            className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 lg:hover:bg-transparent lg:hover:text-blue-700 lg:p-0 dark:text-white lg:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
          >
            About
          </a>
        </li>
        <li>
          <a
            href="#"
            className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 lg:hover:bg-transparent lg:hover:text-blue-700 lg:p-0 dark:text-white lg:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
          >
            Services
          </a>
        </li>
        <li>
          <a
            href="#"
            className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 lg:hover:bg-transparent lg:hover:text-blue-700 lg:p-0 dark:text-white lg:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
          >
            Pricing
          </a>
        </li>
        <li>
          <a
            href="#"
            className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 lg:hover:bg-transparent lg:hover:text-blue-700 lg:p-0 dark:text-white lg:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
          >
            Contact
          </a>
        </li>
      </ul>
    </div>
  );
}
