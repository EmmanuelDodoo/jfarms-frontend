"use client";

import { ComponentProps, useState, useEffect } from "react";
import CustomButton from "./CustomButton";

type DefaultInputProps = ComponentProps<"input">;

type CustomInputProps = DefaultInputProps & {
  label?: string;
  labelClass?: string;
  floatLabel?: boolean; //requires placeholder text
  variant?: "line";
  groupClass?: string;
  colorScheme?:
    | "red"
    | "blue"
    | "green"
    | "orange"
    | "yellow"
    | "amber"
    | "teal"
    | "emerald"
    | "sky"
    | "lime"
    | "cyan"
    | "purple"
    | "indigo"
    | "violet"
    | "fuchsia"
    | "pink"
    | "rose";
};
//TODO icons

//
function shouldTypeLabelFloat(type: string | undefined) {
  const floaters = new Set([
    "text",
    "date",
    "email",
    "password",
    "number",
    "search",
    "tel",
    "url",
    "datetime-local",
    "month",
    "time",
    "week",
    undefined,
  ]);
  return floaters.has(type);
}

/** Creates a Custom Input component. A random, unique id is given to the input
 * if none is supplied. Password inputs are automatically given a hide/show
 * button with appropriate functionality. Invalid and required inputs are
 * themed red regardless of the colorScheme provided. Use the `className`
 * to directly style the input component.
 *
 * @param colorScheme The color scheme to apply to the component. Accepts any
 *                    any Tailwind CSS color name except for white tones. See
 *                    the Tailwind CSS documentation for a list of available
 *                    colors.
 *
 * @param variant The variant of the component. Currently supports only the
 *                default and `line` variants. Leave as undefined to use the
 *                default.
 *
 * @param label The label for this particular input. Label is implememnted
 *              according to standard.
 *
 * @param labelClass  A list of classes to for styling the label.
 *                    Requires a label to take effect.
 *
 * @param groupClass A list of classes for styling both the input and its label.
 *
 * @param floatLabel Whether the label should float. Requires both the label
 *                   and placeholder fields be provided to take effect.
 *                   Not all input types can have floating labels though.
 *
 */
export default function CustomInput({
  label,
  labelClass,
  floatLabel,
  colorScheme,
  variant,
  groupClass,
  id,
  type,
  ...rest
}: CustomInputProps) {
  //Every component starting with and empty string as its id throws a warning. Undefined does not
  const [componentID, setComponentId] = useState<string | undefined>(undefined);
  const [passwordShown, setPasswordShown] = useState(false);

  const labelShouldFloat =
    label && floatLabel && rest.placeholder && shouldTypeLabelFloat(type); //require placeholder

  const hasNoBorder = !shouldTypeLabelFloat(type);

  const _colorScheme = colorScheme === undefined ? "undefined" : colorScheme;
  const _variant = variant === undefined ? "undefined" : variant;

  useEffect(() => {
    setComponentId(() => Math.random().toString(36).substring(2));
  }, []);

  function provideLabel() {
    const baseLabelClassList =
      " font-medium mb-2 text-sm peer-invalid:text-red-500 ";
    const floatLabelClassList =
      " text-md pointer-events-none flex items-center transition-all duration-200 rounded-lg absolute w-[95%] top-[5%] left-[2.5%] h-2/5 peer-focus:h-2/5 peer-placeholder-shown:h-[90%] scale-[70%] peer-focus:scale-[70%] peer-placeholder-shown:scale-100 -translate-x-[15%] peer-focus:-translate-x-[15%] peer-placeholder-shown:-translate-x-0 ";

    const _floatLabelBackgroundVariants = {
      undefined:
        _colorScheme === "undefined"
          ? " bg-gray-100 dark:bg-gray-700 "
          : " bg-slate-50 peer-focus:bg-transparent dark:bg-slate-950 peer-focus:dark:bg-transparent ", // The peer focus is for when the browser suggests input options to the user.
      line: " bg-transparent dark:bg-transparent ",
    };

    const requiredLabelClassList =
      " peer-placeholder-shown:peer-required:text-current  peer-required:after:content-['*'] peer-required:after:ml-1 peer-required:after:text-red-500 ";
    return (
      <label
        htmlFor={id ? id : componentID}
        className={
          baseLabelClassList +
          (labelShouldFloat
            ? floatLabelClassList + _floatLabelBackgroundVariants[_variant]
            : " order-1 ") +
          (rest.required ? requiredLabelClassList : "") +
          labelClass
        }
      >
        {label}
      </label>
    );
  }

  function providePasswordVisibilityButton() {
    const divPositioningFragment = variant ? " bottom-[18%] " : " bottom-[5%] ";
    const svgClass = " fill-current w-5 h-5 ";
    const showIcon = (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 -960 960 960"
        className={svgClass}
      >
        <path d="M480.118-330Q551-330 600.5-379.618q49.5-49.617 49.5-120.5Q650-571 600.382-620.5q-49.617-49.5-120.5-49.5Q409-670 359.5-620.382q-49.5 49.617-49.5 120.5Q310-429 359.618-379.5q49.617 49.5 120.5 49.5Zm-.353-58Q433-388 400.5-420.735q-32.5-32.736-32.5-79.5Q368-547 400.735-579.5q32.736-32.5 79.5-32.5Q527-612 559.5-579.265q32.5 32.736 32.5 79.5Q592-453 559.265-420.5q-32.736 32.5-79.5 32.5ZM480-200q-146 0-264-83T40-500q58-134 176-217t264-83q146 0 264 83t176 217q-58 134-176 217t-264 83Zm0-300Zm-.169 240Q601-260 702.5-325.5 804-391 857-500q-53-109-154.331-174.5-101.332-65.5-222.5-65.5Q359-740 257.5-674.5 156-609 102-500q54 109 155.331 174.5 101.332 65.5 222.5 65.5Z" />
      </svg>
    );
    const hideIcon = (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 -960 960 960"
        className={svgClass}
      >
        <path d="m629-419-44-44q26-71-27-118t-115-24l-44-44q17-11 38-16t43-5q71 0 120.5 49.5T650-500q0 22-5.5 43.5T629-419Zm129 129-40-40q49-36 85.5-80.5T857-500q-50-111-150-175.5T490-740q-42 0-86 8t-69 19l-46-47q35-16 89.5-28T485-800q143 0 261.5 81.5T920-500q-26 64-67 117t-95 93Zm58 226L648-229q-35 14-79 21.5t-89 7.5q-146 0-265-81.5T40-500q20-52 55.5-101.5T182-696L56-822l42-43 757 757-39 44ZM223-654q-37 27-71.5 71T102-500q51 111 153.5 175.5T488-260q33 0 65-4t48-12l-64-64q-11 5-27 7.5t-30 2.5q-70 0-120-49t-50-121q0-15 2.5-30t7.5-27l-97-97Zm305 142Zm-116 58Z" />
      </svg>
    );
    return (
      <div
        className={
          "order-3 text-sm absolute right-[1%] w-fit h-fit " +
          divPositioningFragment
        }
      >
        <button
          type="button"
          aria-label={passwordShown ? "hide password" : "show password"}
          onClick={() => setPasswordShown(!passwordShown)}
          className="hover:scale-[105%] transition-all ease-in-out bg-transparent dark:bg-transparent outline-current "
        >
          {passwordShown ? hideIcon : showIcon}
        </button>
      </div>
    );
  }

  const _variantsStyles = {
    undefined:
      " rounded-lg border hover:ring-2 focus:ring-2 invalid:ring-2 disabled:border-none disabled:hover:border-none disabled:hover:ring-0 ",
    line:
      " border-b-2 mb-1.5 hover:border-b-current focus:border-b-current bg-transparent dark:bg-transparent " +
      (labelShouldFloat
        ? " placeholder:opacity-0 focus:placeholder:opacity-100 "
        : ""),
  };

  const _colorSchemeBaseClassListVariants = {
    undefined:
      " text-gray-900 dark:text-white invalid:text-red-700 invalid:dark:text-red-300 bg-gray-100 dark:bg-gray-700 border-gray-300 dark:border-gray-600 hover:border-blue-500 hover:invalid:border-red-500 hover:placeholder-shown:invalid:border-blue-500 focus:border-blue-500 focus:invalid:border-red-500 focus:placeholder-shown:invalid:border-blue-500 ring-blue-500 invalid:ring-red-500 placeholder-shown:invalid:ring-blue-500 ",
    blue: " text-blue-600 dark:text-blue-300 invalid:text-red-700 invalid:dark:text-red-300 bg-slate-50 dark:bg-gray-950 border-gray-300 dark:border-gray-600 hover:border-green-500 hover:invalid:border-red-500 hover:placeholder-shown:invalid:border-green-500 focus:border-green-500 focus:invalid:border-red-500 focus:placeholder-shown:invalid:border-green-500 ring-blue-500 invalid:ring-red-500 placeholder-shown:invalid:ring-blue-500 ",
    red: " text-red-600 dark:text-red-300 invalid:text-red-700 invalid:dark:text-red-300 bg-slate-50 dark:bg-gray-950 border-gray-300 dark:border-gray-600 hover:border-purple-500 hover:invalid:border-red-500 hover:placeholder-shown:invalid:border-purple-500 focus:border-purple-500 focus:invalid:border-red-500 focus:placeholder-shown:invalid:border-purple-500 ring-red-500 invalid:ring-red-500 placeholder-shown:invalid:ring-red-500 ",
    green:
      " text-green-700 dark:text-green-300 invalid:text-red-700 invalid:dark:text-red-300 bg-slate-50 dark:bg-gray-950 border-gray-300 dark:border-gray-600 hover:border-amber-600 hover:invalid:border-red-500 hover:placeholder-shown:invalid:border-amber-500 focus:border-amber-600 focus:invalid:border-red-500 focus:placeholder-shown:invalid:border-amber-500 ring-green-500 invalid:ring-red-500 placeholder-shown:invalid:ring-green-500 ",
    orange:
      " text-orange-700 dark:text-orange-300 invalid:text-red-700 invalid:dark:text-red-300 bg-slate-50 dark:bg-gray-950 border-gray-300 dark:border-gray-600 hover:border-rose-600 hover:invalid:border-red-500 hover:placeholder-shown:invalid:border-rose-500 focus:border-rose-600 focus:invalid:border-red-500 focus:placeholder-shown:invalid:border-rose-500 ring-orange-500 invalid:ring-red-500 placeholder-shown:invalid:ring-orange-500 ",
    yellow:
      " text-yellow-700 dark:text-yellow-300 invalid:text-red-700 invalid:dark:text-red-300 bg-slate-50 dark:bg-gray-950 border-gray-300 dark:border-gray-600 hover:border-pink-500 hover:invalid:border-red-500 hover:placeholder-shown:invalid:border-pink-500 focus:border-pink-500 focus:invalid:border-red-500 focus:placeholder-shown:invalid:border-pink-500 ring-yellow-500 invalid:ring-red-500 placeholder-shown:invalid:ring-yellow-500 ",
    amber:
      " text-amber-700 dark:text-amber-300 invalid:text-red-700 invalid:dark:text-red-300 bg-slate-50 dark:bg-gray-950 border-gray-300 dark:border-gray-600 hover:border-rose-500 hover:invalid:border-red-500 hover:placeholder-shown:invalid:border-rose-500 focus:border-rose-500 focus:invalid:border-red-500 focus:placeholder-shown:invalid:border-rose-500 ring-amber-500 invalid:ring-red-500 placeholder-shown:invalid:ring-amber-500 ",
    lime: " text-lime-700 dark:text-lime-300 invalid:text-red-700 invalid:dark:text-red-300 bg-slate-50 dark:bg-gray-950 border-gray-300 dark:border-gray-600 hover:border-yellow-500 hover:invalid:border-red-500 hover:placeholder-shown:invalid:border-yellow-500 focus:border-yellow-500 focus:invalid:border-red-500 focus:placeholder-shown:invalid:border-yellow-500 ring-lime-500 invalid:ring-red-500 placeholder-shown:invalid:ring-lime-500 ",
    emerald:
      " text-emerald-700 dark:text-emerald-300 invalid:text-red-700 invalid:dark:text-red-300 bg-slate-50 dark:bg-gray-950 border-gray-300 dark:border-gray-600 hover:border-emerald-500 hover:invalid:border-red-500 hover:placeholder-shown:invalid:border-emerald-500 focus:border-emerald-500 focus:invalid:border-red-500 focus:placeholder-shown:invalid:border-emerald-500 ring-emerald-500 invalid:ring-red-500 placeholder-shown:invalid:ring-emerald-500 ",
    teal: " text-teal-700 dark:text-teal-300 invalid:text-red-700 invalid:dark:text-red-300 bg-slate-50 dark:bg-gray-950 border-gray-300 dark:border-gray-600 hover:border-indigo-500 hover:invalid:border-red-500 hover:placeholder-shown:invalid:border-indigo-500 focus:border-indigo-500 focus:invalid:border-red-500 focus:placeholder-shown:invalid:border-indigo-500 ring-teal-500 invalid:ring-red-500 placeholder-shown:invalid:ring-teal-500 ",
    cyan: " text-cyan-700 dark:text-cyan-300 invalid:text-red-700 invalid:dark:text-red-300 bg-slate-50 dark:bg-gray-950 border-gray-300 dark:border-gray-600 hover:border-green-500 hover:invalid:border-red-500 hover:placeholder-shown:invalid:border-green-500 focus:border-green-500 focus:invalid:border-red-500 focus:placeholder-shown:invalid:border-green-500 ring-cyan-500 invalid:ring-red-500 placeholder-shown:invalid:ring-cyan-500 ",
    sky: " text-sky-700 dark:text-sky-300 invalid:text-red-700 invalid:dark:text-red-300 bg-slate-50 dark:bg-gray-950 border-gray-300 dark:border-gray-600 hover:border-lime-500 hover:invalid:border-red-500 hover:placeholder-shown:invalid:border-lime-500 focus:border-lime-500 focus:invalid:border-red-500 focus:placeholder-shown:invalid:border-lime-500 ring-sky-500 invalid:ring-red-500 placeholder-shown:invalid:ring-sky-500 ",
    indigo:
      " text-indigo-700 dark:text-indigo-300 invalid:text-red-700 invalid:dark:text-red-300 bg-slate-50 dark:bg-gray-950 border-gray-300 dark:border-gray-600 hover:border-orange-500 hover:invalid:border-red-500 hover:placeholder-shown:invalid:border-orange-500 focus:border-orange-500 focus:invalid:border-red-500 focus:placeholder-shown:invalid:border-orange-500 ring-indigo-500 invalid:ring-red-500 placeholder-shown:invalid:ring-indigo-500 ",
    purple:
      " text-purple-700 dark:text-purple-300 invalid:text-red-700 invalid:dark:text-red-300 bg-slate-50 dark:bg-gray-950 border-gray-300 dark:border-gray-600 hover:border-purple-500 hover:invalid:border-red-500 hover:placeholder-shown:invalid:border-purple-500 focus:border-purple-500 focus:invalid:border-red-500 focus:placeholder-shown:invalid:border-purple-500 ring-purple-500 invalid:ring-red-500 placeholder-shown:invalid:ring-purple-500 ",
    violet:
      " text-violet-700 dark:text-violet-300 invalid:text-red-700 invalid:dark:text-red-300 bg-slate-50 dark:bg-gray-950 border-gray-300 dark:border-gray-600 hover:border-red-500 hover:invalid:border-red-500 hover:placeholder-shown:invalid:border-red-500 focus:border-red-500 focus:invalid:border-red-500 focus:placeholder-shown:invalid:border-red-500 ring-violet-500 invalid:ring-red-500 placeholder-shown:invalid:ring-violet-500 ",
    fuchsia:
      " text-fuchsia-700 dark:text-fuchsia-300 invalid:text-red-700 invalid:dark:text-red-300 bg-slate-50 dark:bg-gray-950 border-gray-300 dark:border-gray-600 hover:border-amber-500 hover:invalid:border-red-500 hover:placeholder-shown:invalid:border-amber-500 focus:border-amber-500 focus:invalid:border-red-500 focus:placeholder-shown:invalid:border-amber-500 ring-fuchsia-500 invalid:ring-red-500 placeholder-shown:invalid:ring-fuchsia-500 ",
    pink: " text-pink-700 dark:text-pink-300 invalid:text-red-700 invalid:dark:text-red-300 bg-slate-50 dark:bg-gray-950 border-gray-300 dark:border-gray-600 hover:border-blue-500 hover:invalid:border-red-500 hover:placeholder-shown:invalid:border-blue-500 focus:border-blue-500 focus:invalid:border-red-500 focus:placeholder-shown:invalid:border-blue-500 ring-pink-500 invalid:ring-red-500 placeholder-shown:invalid:ring-pink-500 ",
    rose: " text-rose-700 dark:text-rose-300 invalid:text-red-700 invalid:dark:text-red-300 bg-slate-50 dark:bg-gray-950 border-gray-300 dark:border-gray-600 hover:border-pink-500 hover:invalid:border-red-500 hover:placeholder-shown:invalid:border-pink-500 focus:border-pink-500 focus:invalid:border-red-500 focus:placeholder-shown:invalid:border-pink-500 ring-rose-500 invalid:ring-red-500 placeholder-shown:invalid:ring-rose-500 ",
  };

  const baseClassList = " w-fit p-1.5 text-sm peer focus:outline-none ";
  const hasFloatingLabelClassList = " pb-1.5 pt-4 ";

  const hasNoBorderRingClassList =
    " hover:ring-transparent focus:ring-transparent invalid:ring-transparent hover:outline hover:outline-current invalid:hover:outline-red-500 focus:outline focus:outline-current invalid:focus:outline-red-500 accent-current ";

  const _colorSchemeVariantsForDiv = {
    undefined: " text-black dark:text-white ",
    red: " text-black dark:text-white ",
    blue: " text-blue-600 dark:text-blue-300 ",
    green: " text-green-700 dark:text-green-300 ",
    orange: " text-orange-700 dark:text-orange-300 ",
    amber: " text-amber-700 dark:text-amber-300 ",
    yellow: " text-yellow-700 dark:text-yellow-300 ",
    teal: " text-teal-700 dark:text-teal-300 ",
    emerald: " text-emerald-700 dark:text-emerald-300 ",
    lime: " text-lime-700 dark:text-lime-300 ",
    cyan: " text-cyan-700 dark:text-cyan-300 ",
    sky: " text-sky-700 dark:text-sky-300 ",
    indigo: " text-indigo-700 dark:text-indigo-300 ",
    violet: " text-violet-700 dark:text-violet-300 ",
    purple: " text-purple-700 dark:text-purple-300 ",
    fuchsia: " text-fuchsia-700 dark:text-fuchsia-300 ",
    pink: " text-pink-700 dark:text-pink-300 ",
    rose: " text-rose-700 dark:text-rose-300 ",
  };
  return (
    <div
      className={
        " relative flex flex-col w-fit " +
        _colorSchemeVariantsForDiv[_colorScheme] +
        groupClass
      }
    >
      <input
        {...rest}
        className={
          baseClassList +
          _colorSchemeBaseClassListVariants[_colorScheme] +
          _variantsStyles[_variant] +
          (labelShouldFloat ? hasFloatingLabelClassList : " order-2 ") +
          (hasNoBorder ? hasNoBorderRingClassList : "") +
          rest.className
        }
        id={id ? id : componentID}
        type={type === "password" && passwordShown ? "text" : type}
      />

      {label ? provideLabel() : <></>}
      {type === "password" ? providePasswordVisibilityButton() : <></>}
    </div>
  );
}
