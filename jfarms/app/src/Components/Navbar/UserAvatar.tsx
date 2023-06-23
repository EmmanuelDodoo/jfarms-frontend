"use client";

import Image from "next/image";
import { useContext, useState, useEffect } from "react";
import { UserContext } from "../User/UserContext";

function Login() {
  return <h1>Login</h1>;
}

export default function UserAvatar() {
  const [expanded, setExpanded] = useState(false);
  const user = useContext(UserContext);

  function handleCollapseOnOutsideClick(event: MouseEvent) {
    const dropdownMenu = document.getElementById("dropdown-parent");
    //@ts-ignore
    if (dropdownMenu && !dropdownMenu.contains(event.target)) {
      setExpanded(false);
    }
  }

  useEffect(() => {
    if (expanded) {
      window.addEventListener("click", handleCollapseOnOutsideClick);
    }
    //Clean up function
    return () => {
      window.removeEventListener("click", handleCollapseOnOutsideClick);
    };
  }, [expanded]);

  if (user === null) {
    return Login();
  }
  // This is to give the dropdown menu a transition effect. Applies to the parent of the dropdown
  const dropDownParentOpacity = expanded ? " opacity-100 " : "";

  function provideDropDown() {
    return (
      <div id="dropdown-menu">
        <div className="px-4 py-3">
          <span className="block text-sm text-gray-900 dark:text-white">
            {user?.username}
          </span>
          <span className="block text-sm  text-gray-500 truncate dark:text-gray-400">
            {user?.email}
          </span>
        </div>
        <ul
          className="py-2"
          aria-labelledby="user-menu-button"
        >
          <li>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
            >
              Dashboard
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
            >
              Settings
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
            >
              Earnings
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
            >
              Sign out
            </a>
          </li>
        </ul>
      </div>
    );
  }

  return (
    <div
      className="relative text-base flex items-center gap-2"
      id="dropdown-parent"
    >
      {/* User Profile Image */}
      <button
        type="button"
        className=" flex mr-3 text-sm bg-gray-800 rounded-full lg:mr-0 aspect-square h-8"
        id="user-menu-button"
        aria-expanded={expanded}
        aria-controls="user-dropdown"
        onClick={() => setExpanded(!expanded)}
      >
        <span className="sr-only">Open user menu</span>
        <Image
          className=" aspect-square rounded-full"
          src={user.profileImage.toString()}
          alt="user photo"
          width={36}
          height={36}
          loading="lazy"
        />
      </button>
      {/* <!-- Dropdown menu --> */}
      <div
        className={
          "z-50 absolute top-4 -left-20 lg:-left-24  my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600 transition-opacity ease-in opacity-0" +
          dropDownParentOpacity
        }
        id="user-dropdown"
        aria-live="polite"
      >
        {expanded ? provideDropDown() : <></>}
      </div>
      <span className="hidden lg:block not-sr-only">{user.username}</span>
    </div>
  );
}
