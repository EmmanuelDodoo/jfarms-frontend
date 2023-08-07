import Image from "next/image";
import logo from "../../../public/jfarms-logo-files/svg/logo-no-background.svg";
import UserProvider from "../User/UserContext";
import UserAvatar from "./UserAvatar";
import NavOptions from "./NavOptions";

const Navbar = () => {
  return (
    <nav className=" shadow-md font-medium mx-0 px-0 border-gray-200 bg-white/10 dark:bg-black/20 backdrop-blur-sm text-gray-900 dark:text-white">
      <div className=" w-full flex flex-wrap items-center justify-evenly mx-auto p-4">
        <header className="items-center">
          <a
            href="" // TODO
            className="flex items-center px-2"
          >
            <Image
              src={logo}
              className=" aspect-square mr-3"
              alt="Flowbite Logo"
              width="40"
              height="40"
              loading="lazy"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              JFarms
            </span>
          </a>
        </header>
        <div className="flex gap-0 lg:gap-16 items-center">
          <div className=" order-2 lg:order-1">
            <NavOptions />
          </div>
          <div className="flex items-center order-1 lg:order-2">
            <UserProvider>
              <UserAvatar />
            </UserProvider>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
