import CircleAvatar from "./CircleAvatar";
import CustomButton from "../Custom/Form/CustomButton";
import linkedInIconSVG from "../../../public/linkedin-outline.svg";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import Image from "next/image";

/** Creates the Name and position sectionn */
function NameandPosition(name?: string, position?: string) {
  const _name = name === undefined ? "Kofi Manu" : name;
  const _position =
    position === undefined ? "Software Engineering Intern" : position;
  return (
    <div className="flex flex-col xs:text-center lg:text-left">
      <h3 className=" font-bold text-2xl ">{_name}</h3>
      <h2 className=" font-medium text-slate-500 dark:text-slate-300">
        {_position}
      </h2>
    </div>
  );
}

/** Creates the Avatar, name section and position */
function AvatarAndName() {
  const tempURL =
    "https://api.dicebear.com/6.x/initials/svg?seed=KM&backgroundType=gradientLinear&backgroundColor=3b7777,050A18";
  return (
    <div className="outline outline-red-600 flex gap-4 justify-center items-center p-1 xs:flex-col lg:flex-row">
      <CircleAvatar
        src={tempURL}
        alt={"Profile Image"}
      />
      {NameandPosition()}
    </div>
  );
}

/** Creates the about section */
function AboutSection(
  lineClamp: string,
  butttonText: string,
  setter: Dispatch<SetStateAction<string[]>>
) {
  function showMore() {
    if (lineClamp === "") {
      setter(["line-clamp-4", "Show More"]);
    } else {
      setter(["", "Show Less"]);
    }
  }
  return (
    <div className="outline outline-orange-500 w-full flex flex-col px-2">
      <h3 className=" font-semibold text-lg">About</h3>
      <p className={lineClamp}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut laudantium
        consequatur dignissimos eveniet, magni totam quidem doloremque sint
        voluptatum nam, in cupiditate dolore autem. Officiis, vero. Amet
        suscipit placeat magni!Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Aut laudantium consequatur dignissimos eveniet, magni
        totam quidem doloremque sint voluptatum nam, in cupiditate dolore autem.
        Officiis, vero. Amet suscipit placeat magni!Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Aut laudantium consequatur dignissimos
        eveniet, magni totam quidem doloremque sint voluptatum nam, in
        cupiditate dolore autem. Officiis, vero. Amet suscipit placeat magni!
      </p>
      <div className=" self-center">
        <CustomButton
          variant="ghost"
          onClick={showMore}
          className=" font-semibold "
          colorScheme="slate"
        >
          {butttonText}
        </CustomButton>
      </div>
    </div>
  );
}

/** Creates the links and resume section */
function LinksandResume(mode: string) {
  const linkClass =
    " relative aspect-square w-7 focus:outline-blue-800 dark:focus:outline-blue-400 outline outline-2 rounded-sm p-1 outline-sky-700";

  function createSVG() {
    const svgClass =
      " fill-current hover:fill-blue-800 dark:hover:fill-blue-400 focus:scale-110 focus:fill-blue-800 dark:focus:fill-blue-400 focus:scale-110 ";
    if (mode === "light") {
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 50 50"
          className={svgClass}
        >
          <path d="M 8 3.0117188 C 6.3126093 3.0117188 4.8354789 3.4916328 3.7539062 4.3652344 C 2.6723337 5.238836 2.0117188 6.533218 2.0117188 7.9472656 C 2.0117188 10.690836 4.4687078 12.814467 7.7167969 12.941406 A 0.98809878 0.98809878 0 0 0 8 12.988281 C 9.753566 12.988281 11.246191 12.474267 12.3125 11.564453 C 13.378809 10.654639 13.988281 9.3429353 13.988281 7.9472656 A 0.98809878 0.98809878 0 0 0 13.986328 7.8925781 C 13.832307 5.1316834 11.374781 3.0117187 8 3.0117188 z M 8 4.9882812 C 10.60907 4.9882812 11.895883 6.2693448 12.005859 7.9726562 C 11.998759 8.8049335 11.676559 9.5118991 11.03125 10.0625 C 10.378809 10.619186 9.371434 11.011719 8 11.011719 C 5.3980542 11.011719 3.9882813 9.5991704 3.9882812 7.9472656 C 3.9882812 7.1213132 4.3276663 6.4422421 4.9960938 5.9023438 C 5.6645211 5.3624454 6.6873907 4.9882813 8 4.9882812 z M 3 15 A 1.0001 1.0001 0 0 0 2 16 L 2 45 A 1.0001 1.0001 0 0 0 3 46 L 13 46 A 1.0001 1.0001 0 0 0 14 45 L 14 35.664062 L 14 16 A 1.0001 1.0001 0 0 0 13 15 L 3 15 z M 18 15 A 1.0001 1.0001 0 0 0 17 16 L 17 45 A 1.0001 1.0001 0 0 0 18 46 L 28 46 A 1.0001 1.0001 0 0 0 29 45 L 29 29 L 29 28.75 L 29 28.5 C 29 26.555577 30.555577 25 32.5 25 C 34.444423 25 36 26.555577 36 28.5 L 36 45 A 1.0001 1.0001 0 0 0 37 46 L 47 46 A 1.0001 1.0001 0 0 0 48 45 L 48 28 C 48 23.873476 46.787888 20.604454 44.744141 18.375 C 42.700394 16.145546 39.849212 15 36.787109 15 C 32.882872 15 30.521631 16.426076 29 17.601562 L 29 16 A 1.0001 1.0001 0 0 0 28 15 L 18 15 z M 4 17 L 12 17 L 12 35.664062 L 12 44 L 4 44 L 4 17 z M 19 17 L 27 17 L 27 19.638672 A 1.0001 1.0001 0 0 0 28.744141 20.306641 C 28.744141 20.306641 31.709841 17 36.787109 17 C 39.360007 17 41.615528 17.922268 43.269531 19.726562 C 44.923534 21.530858 46 24.261524 46 28 L 46 44 L 38 44 L 38 28.5 A 1.0001 1.0001 0 0 0 37.916016 28.089844 C 37.694061 25.26411 35.38033 23 32.5 23 C 29.474423 23 27 25.474423 27 28.5 L 27 28.75 L 27 29 L 27 44 L 19 44 L 19 17 z" />
        </svg>
      );
    } else {
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
          className={svgClass}
        >
          <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" />
        </svg>
      );
    }
  }

  //TODO add aria-labels to the links
  return (
    <div className="flex justify-evenly gap-2 outline outline-purple-500 p-1 w-fit self-end">
      <a
        href="https://linkedin.com/"
        target="_blank"
        rel="noopener"
        className={linkClass}
      >
        {createSVG()}
      </a>
      <a
        href="https://linkedin.com/"
        target="_blank"
        rel="noopener"
        className={linkClass}
      >
        {createSVG()}
      </a>
      <a
        href="https://linkedin.com/"
        target="_blank"
        rel="noopener"
        className={linkClass}
      >
        {createSVG()}
      </a>
      <a
        href="https://linkedin.com/"
        target="_blank"
        rel="noopener"
        className={linkClass}
      >
        {createSVG()}
      </a>
      <a
        href="https://resume.com"
        target="_blank"
        rel="noopener"
        className="font-semibold hover:bg-blue-200 dark:hover:bg-blue-600 hover:scale-105 focus:outline-blue-400 outline outline-2 outline-sky-700 rounded-sm px-1"
      >
        {/* TODO request must be made for the particular resume */}
        Resume
      </a>
    </div>
  );
}

function NoMansLand() {
  return (
    <div className=" grid grid-cols-2 gap-5">
      <div className=" outline outline-green-600">
        <h3 className=" font-semibold text-slate-500 dark:text-slate-200 text-lg">
          Skills & expertise
        </h3>
        <ul>
          <li>Flying</li>
          <li>Reading minds</li>
          <li>Being broke</li>
        </ul>
      </div>
      <div className=" outline outline-green-600">
        <h3 className=" font-semibold text-slate-500 dark:text-slate-200 text-lg">
          Highest Education
        </h3>
        <p>Some school bi</p>
      </div>
      <div className=" outline outline-green-600">
        <h3 className=" font-semibold text-slate-500 dark:text-slate-200 text-lg">
          Salary range
        </h3>
        <p> $0 - $0</p>
      </div>
      <div className=" outline outline-green-600">
        No Idea what to add here....
      </div>
    </div>
  );
}

export default function AltHeader() {
  const [lineClampAndButton, setLineClampAndButton] = useState([
    "line-clamp-4",
    "Show more",
  ]);
  const [mode, setMode] = useState("light");

  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setMode("dark");
    }
  }, []);

  return (
    <div className="bg-slate-100 dark:bg-slate-600 dark:text-slate-200 rounded-md shadow-lg my-2 p-3 w-80 xs:w-11/12 flex lg:flex-row xs:flex-col justify-between">
      <div className="flex flex-col gap-8 outline outline-green-700 xs:m-0 lg:m-2 p-2 lg:w-2/5">
        {AvatarAndName()}
        {AboutSection(
          lineClampAndButton[0],
          lineClampAndButton[1],
          setLineClampAndButton
        )}
      </div>
      <div className="outline outline-blue-700 flex flex-col gap-8 xs:m-0 lg:m-2 p-2 lg:w-5/12">
        {LinksandResume(mode)}
        {NoMansLand()}
        <svg
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          className=" aspect-square w-8 self-end fill-current outline outline-red-600"
        >
          {/*TODO Should be a button which opens the edit page/ modal dialog */}
          <path d="M834.3 705.7c0 82.2-66.8 149-149 149H325.9c-82.2 0-149-66.8-149-149V346.4c0-82.2 66.8-149 149-149h129.8v-42.7H325.9c-105.7 0-191.7 86-191.7 191.7v359.3c0 105.7 86 191.7 191.7 191.7h359.3c105.7 0 191.7-86 191.7-191.7V575.9h-42.7v129.8z" />
          <path d="M889.7 163.4c-22.9-22.9-53-34.4-83.1-34.4s-60.1 11.5-83.1 34.4L312 574.9c-16.9 16.9-27.9 38.8-31.2 62.5l-19 132.8c-1.6 11.4 7.3 21.3 18.4 21.3 0.9 0 1.8-0.1 2.7-0.2l132.8-19c23.7-3.4 45.6-14.3 62.5-31.2l411.5-411.5c45.9-45.9 45.9-120.3 0-166.2zM362 585.3L710.3 237 816 342.8 467.8 691.1 362 585.3zM409.7 730l-101.1 14.4L323 643.3c1.4-9.5 4.8-18.7 9.9-26.7L436.3 720c-8 5.2-17.1 8.7-26.6 10z m449.8-430.7l-13.3 13.3-105.7-105.8 13.3-13.3c14.1-14.1 32.9-21.9 52.9-21.9s38.8 7.8 52.9 21.9c29.1 29.2 29.1 76.7-0.1 105.8z" />
        </svg>
      </div>
    </div>
  );
}
