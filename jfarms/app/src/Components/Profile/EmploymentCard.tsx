"use client";

import { useState } from "react";
import CustomButton from "../Custom/Form/CustomButton";
import HorDivider from "../Custom/Util/Divider";

type Props = {};

const svgIconClass = " aspect-square w-5 ";

const visibilityIDOn = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 -960 960 960"
    className={svgIconClass}
  >
    <path d="M480.118-330Q551-330 600.5-379.618q49.5-49.617 49.5-120.5Q650-571 600.382-620.5q-49.617-49.5-120.5-49.5Q409-670 359.5-620.382q-49.5 49.617-49.5 120.5Q310-429 359.618-379.5q49.617 49.5 120.5 49.5Zm-.353-58Q433-388 400.5-420.735q-32.5-32.736-32.5-79.5Q368-547 400.735-579.5q32.736-32.5 79.5-32.5Q527-612 559.5-579.265q32.5 32.736 32.5 79.5Q592-453 559.265-420.5q-32.736 32.5-79.5 32.5ZM480-200q-146 0-264-83T40-500q58-134 176-217t264-83q146 0 264 83t176 217q-58 134-176 217t-264 83Zm0-300Zm-.169 240Q601-260 702.5-325.5 804-391 857-500q-53-109-154.331-174.5-101.332-65.5-222.5-65.5Q359-740 257.5-674.5 156-609 102-500q54 109 155.331 174.5 101.332 65.5 222.5 65.5Z" />
  </svg>
);

const visibilityIDOff = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 -960 960 960"
    className={svgIconClass}
  >
    <path d="m629-419-44-44q26-71-27-118t-115-24l-44-44q17-11 38-16t43-5q71 0 120.5 49.5T650-500q0 22-5.5 43.5T629-419Zm129 129-40-40q49-36 85.5-80.5T857-500q-50-111-150-175.5T490-740q-42 0-86 8t-69 19l-46-47q35-16 89.5-28T485-800q143 0 261.5 81.5T920-500q-26 64-67 117t-95 93Zm58 226L648-229q-35 14-79 21.5t-89 7.5q-146 0-265-81.5T40-500q20-52 55.5-101.5T182-696L56-822l42-43 757 757-39 44ZM223-654q-37 27-71.5 71T102-500q51 111 153.5 175.5T488-260q33 0 65-4t48-12l-64-64q-11 5-27 7.5t-30 2.5q-70 0-120-49t-50-121q0-15 2.5-30t7.5-27l-97-97Zm305 142Zm-116 58Z" />
  </svg>
);

const expandMore = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={svgIconClass}
    viewBox="0 -960 960 960"
  >
    <path d="M480-345 240-585l43-43 197 198 197-197 43 43-240 239Z" />
  </svg>
);

const expandLess = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={svgIconClass}
    viewBox="0 -960 960 960"
  >
    <path d="m283-345-43-43 240-240 240 239-43 43-197-197-197 198Z" />
  </svg>
);

const formatList = (list: string[]) => {
  return (
    <ul className=" list-disc w-fit ml-8">
      {list.map((skill) => (
        <li
          className=" font-semibold"
          key={"EmploymentCard skill- " + skill}
        >
          {skill}
        </li>
      ))}
    </ul>
  );
};

export default function EmploymentCard(props: Props) {
  const [visibleID, setVisibleID] = useState(false);
  const [visibleSkills, setVisibleSkills] = useState(false);
  const [visibleProjects, setVisibleProjects] = useState(false);
  const [visibleWork, setVisibleWork] = useState(false);

  const dummySkills = ["Till Day Breaks", "True or False", "Speed Race"];
  const dummyProjects = ["ProjectX", "ProjectY", "ProjectZ"];
  const dummyWork = ["Nothing", "Something", "Everything", "Where"];

  function toggleID() {
    setVisibleID(!visibleID);
  }

  function toggleSkills() {
    setVisibleSkills(!visibleSkills);
  }

  function toggleProjects() {
    setVisibleProjects(!visibleProjects);
  }

  function toggleWork() {
    setVisibleWork(!visibleWork);
  }

  return (
    <div className=" rounded-md py-4 px-3 shadow-md flex flex-col gap-2 bg-white dark:bg-slate-600 text-slate-800 dark:text-slate-200">
      <div className=" flex flex-col gap-2 ">
        <h3 className="text-slate-700 font-bold dark:text-slate-200">
          Employement Details
        </h3>
        <div className=" inline-flex gap-2">
          <span className=" font-semibold text-slate-500 dark:text-slate-300">
            Employement Status:{" "}
          </span>
          <span className="font-semibold">Active</span>
        </div>
        <div className=" inline-flex gap-2">
          <span className=" font-semibold text-slate-500 dark:text-slate-300">
            Employment start date:{" "}
          </span>
          <span className="font-semibold">YYYY/MM/DD</span>
        </div>
        <div className=" inline-flex gap-2 items-center">
          <span className=" font-semibold text-slate-500 dark:text-slate-300">
            Employee ID:{" "}
          </span>
          <span className="font-semibold">
            {visibleID ? "420-69-0001" : "XXX-XX-XXXX"}
          </span>
          <CustomButton
            size="sm"
            variant="soft"
            onClick={toggleID}
            aria-label={visibleID ? "hide" : "unhide"}
            colorScheme="blue"
          >
            {visibleID ? visibilityIDOff : visibilityIDOn}
          </CustomButton>
        </div>
        <div className=" inline-flex gap-2">
          <span className=" font-semibold text-slate-500 dark:text-slate-300">
            Onboarding Status:{" "}
          </span>
          <span className="font-semibold">Completed</span>
        </div>
      </div>
      <HorDivider />
      <div className=" flex flex-col gap-2">
        <h3 className="text-slate-700 font-bold dark:text-slate-200">
          Work Details
        </h3>
        <div>
          <div className=" inline-flex items-center">
            <span className=" font-semibold text-slate-500 dark:text-slate-300">
              Work history
            </span>
            <CustomButton
              size="sm"
              variant="soft"
              colorScheme="slate"
              onClick={toggleWork}
              aria-label={visibleWork ? "collapse" : "expand"}
            >
              {visibleWork ? expandLess : expandMore}
            </CustomButton>
          </div>
          {visibleWork ? formatList(dummyWork) : <></>}
        </div>
        <div>
          <div className="inline-flex items-center ">
            <span className=" font-semibold text-slate-500 dark:text-slate-300">
              Projects Worked on
            </span>
            <CustomButton
              size="sm"
              variant="soft"
              colorScheme="slate"
              onClick={toggleProjects}
              aria-label={visibleProjects ? "collapse" : "expand"}
            >
              {visibleProjects ? expandLess : expandMore}
            </CustomButton>
          </div>
          {visibleProjects ? formatList(dummyProjects) : <></>}
        </div>
        <div>
          <div className=" inline-flex items-center">
            <span className=" font-semibold text-slate-500 dark:text-slate-300">
              Skills and Expertise
            </span>
            <CustomButton
              size="sm"
              variant="soft"
              colorScheme="slate"
              onClick={toggleSkills}
              aria-label={visibleSkills ? "collapse" : "expand"}
            >
              {visibleSkills ? expandLess : expandMore}
            </CustomButton>
          </div>
          {visibleSkills ? formatList(dummySkills) : <></>}
        </div>
      </div>
    </div>
  );
}
