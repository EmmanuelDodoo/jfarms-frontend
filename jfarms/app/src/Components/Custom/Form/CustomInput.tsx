"use client";

import { ComponentProps, useState, useEffect } from "react";

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
 * if none is supplied. Invalid and required inputs are themed red regardless
 * of the colorScheme provided. Use the `className` to directly style the
 * input component.
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
  ...rest
}: CustomInputProps) {
  //Every component starting with and empty string as its id throws a warning. Undefined does not
  const [componentID, setComponentId] = useState<string | undefined>(undefined);

  const labelShouldFloat =
    label && floatLabel && rest.placeholder && shouldTypeLabelFloat(rest.type); //require placeholder

  const hasNoBorder = !shouldTypeLabelFloat(rest.type);

  const _colorScheme = colorScheme === undefined ? "undefined" : colorScheme;
  const _variant = variant === undefined ? "undefined" : variant;

  useEffect(() => {
    setComponentId(() => Math.random().toString(36).substring(2));
  }, []);

  function provideLabel() {
    const baseLabelClassList =
      " font-medium mb-2 text-sm peer-invalid:text-red-500 ";
    const floatLabelClassList =
      " text-md pointer-events-none flex items-center transition-all duration-200 rounded-lg absolute top-0 peer-placeholder-shown:top-[5%] -left-[10%] peer-focus:-left-[10%] peer-placeholder-shown:left-1 w-[95%] h-2/5 peer-focus:h-2/5  peer-placeholder-shown:h-[90%] scale-75 peer-placeholder-shown:scale-100 peer-focus:scale-75 ";

    const _floatLabelBackgroundVariants = {
      undefined:
        _colorScheme === "undefined"
          ? " bg-gray-100 dark:bg-gray-700 "
          : " bg-slate-50 dark:bg-slate-950 ",
      line: " bg-transparent dark:bg-transparent ",
    };

    const requiredLabelClassList =
      " peer-placeholder-shown:peer-required:text-black peer-placeholder-shown:peer-required:dark:text-white peer-required:after:content-['*'] peer-required:after:ml-1 peer-required:after:text-red-500 ";
    return (
      <label
        htmlFor={id ? id : componentID}
        className={
          baseLabelClassList +
          (_colorScheme === "undefined"
            ? " text-black dark:text-white "
            : " text-current ") +
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
      " text-gray-900 dark:text-white invalid:text-red-700 invalid:dark:text-red-300 bg-gray-100 dark:bg-gray-700 border-gray-300 dark:border-gray-600 hover:border-blue-500 hover:invalid:border-red-500 focus:border-blue-500 focus:invalid:border-red-500 ring-blue-500 invalid:ring-red-500 ",
    blue: " text-blue-600 dark:text-blue-300 invalid:text-red-700 invalid:dark:text-red-300 bg-slate-50 dark:bg-gray-950 border-gray-300 dark:border-gray-600 hover:border-green-500 hover:invalid:border-red-500 focus:border-green-500 focus:invalid:border-red-500 ring-blue-500 invalid:ring-red-500 ",
    red: " text-red-600 dark:text-red-300 invalid:text-red-700 invalid:dark:text-red-300 bg-slate-50 dark:bg-gray-950 border-gray-300 dark:border-gray-600 hover:border-purple-500 hover:invalid:border-red-500 focus:border-purple-500 focus:invalid:border-red-500 ring-red-500 invalid:ring-red-500 ",
    green:
      " text-green-700 dark:text-green-300 invalid:text-red-700 invalid:dark:text-red-300 bg-slate-50 dark:bg-gray-950 border-gray-300 dark:border-gray-600 hover:border-amber-600 hover:invalid:border-red-500 focus:border-amber-600 focus:invalid:border-red-500 ring-green-500 invalid:ring-red-500 ",
    orange:
      " text-orange-700 dark:text-orange-300 invalid:text-red-700 invalid:dark:text-red-300 bg-slate-50 dark:bg-gray-950 border-gray-300 dark:border-gray-600 hover:border-rose-600 hover:invalid:border-red-500 focus:border-rose-600 focus:invalid:border-red-500 ring-orange-500 invalid:ring-red-500 ",
    yellow:
      " text-yellow-700 dark:text-yellow-300 invalid:text-red-700 invalid:dark:text-red-300 bg-slate-50 dark:bg-gray-950 border-gray-300 dark:border-gray-600 hover:border-pink-500 hover:invalid:border-red-500 focus:border-pink-500 focus:invalid:border-red-500 ring-yellow-500 invalid:ring-red-500 ",
    amber:
      " text-amber-700 dark:text-amber-300 invalid:text-red-700 invalid:dark:text-red-300 bg-slate-50 dark:bg-gray-950 border-gray-300 dark:border-gray-600 hover:border-rose-500 hover:invalid:border-red-500 focus:border-rose-500 focus:invalid:border-red-500 ring-amber-500 invalid:ring-red-500 ",
    lime: " text-lime-700 dark:text-lime-300 invalid:text-red-700 invalid:dark:text-red-300 bg-slate-50 dark:bg-gray-950 border-gray-300 dark:border-gray-600 hover:border-yellow-500 hover:invalid:border-red-500 focus:border-yellow-500 focus:invalid:border-red-500 ring-lime-500 invalid:ring-red-500 ",
    emerald:
      " text-emerald-700 dark:text-emerald-300 invalid:text-red-700 invalid:dark:text-red-300 bg-slate-50 dark:bg-gray-950 border-gray-300 dark:border-gray-600 hover:border-emerald-500 hover:invalid:border-red-500 focus:border-emerald-500 focus:invalid:border-red-500 ring-emerald-500 invalid:ring-red-500 ",
    teal: " text-teal-700 dark:text-teal-300 invalid:text-red-700 invalid:dark:text-red-300 bg-slate-50 dark:bg-gray-950 border-gray-300 dark:border-gray-600 hover:border-indigo-500 hover:invalid:border-red-500 focus:border-indigo-500 focus:invalid:border-red-500 ring-teal-500 invalid:ring-red-500 ",
    cyan: " text-cyan-700 dark:text-cyan-300 invalid:text-red-700 invalid:dark:text-red-300 bg-slate-50 dark:bg-gray-950 border-gray-300 dark:border-gray-600 hover:border-green-500 hover:invalid:border-red-500 focus:border-green-500 focus:invalid:border-red-500 ring-cyan-500 invalid:ring-red-500 ",
    sky: " text-sky-700 dark:text-sky-300 invalid:text-red-700 invalid:dark:text-red-300 bg-slate-50 dark:bg-gray-950 border-gray-300 dark:border-gray-600 hover:border-lime-500 hover:invalid:border-red-500 focus:border-lime-500 focus:invalid:border-red-500 ring-sky-500 invalid:ring-red-500 ",
    indigo:
      " text-indigo-700 dark:text-indigo-300 invalid:text-red-700 invalid:dark:text-red-300 bg-slate-50 dark:bg-gray-950 border-gray-300 dark:border-gray-600 hover:border-orange-500 hover:invalid:border-red-500 focus:border-orange-500 focus:invalid:border-red-500 ring-indigo-500 invalid:ring-red-500 ",
    purple:
      " text-purple-700 dark:text-purple-300 invalid:text-red-700 invalid:dark:text-red-300 bg-slate-50 dark:bg-gray-950 border-gray-300 dark:border-gray-600 hover:border-purple-500 hover:invalid:border-red-500 focus:border-purple-500 focus:invalid:border-red-500 ring-purple-500 invalid:ring-red-500 ",
    violet:
      " text-violet-700 dark:text-violet-300 invalid:text-red-700 invalid:dark:text-red-300 bg-slate-50 dark:bg-gray-950 border-gray-300 dark:border-gray-600 hover:border-red-500 hover:invalid:border-red-500 focus:border-red-500 focus:invalid:border-red-500 ring-violet-500 invalid:ring-red-500 ",
    fuchsia:
      " text-fuchsia-700 dark:text-fuchsia-300 invalid:text-red-700 invalid:dark:text-red-300 bg-slate-50 dark:bg-gray-950 border-gray-300 dark:border-gray-600 hover:border-amber-500 hover:invalid:border-red-500 focus:border-amber-500 focus:invalid:border-red-500 ring-fuchsia-500 invalid:ring-red-500 ",
    pink: " text-pink-700 dark:text-pink-300 invalid:text-red-700 invalid:dark:text-red-300 bg-slate-50 dark:bg-gray-950 border-gray-300 dark:border-gray-600 hover:border-blue-500 hover:invalid:border-red-500 focus:border-blue-500 focus:invalid:border-red-500 ring-pink-500 invalid:ring-red-500 ",
    rose: " text-rose-700 dark:text-rose-300 invalid:text-red-700 invalid:dark:text-red-300 bg-slate-50 dark:bg-gray-950 border-gray-300 dark:border-gray-600 hover:border-pink-500 hover:invalid:border-red-500 focus:border-pink-500 focus:invalid:border-red-500 ring-rose-500 invalid:ring-red-500 ",
  };

  const baseClassList = " w-fit p-1.5 text-sm peer focus:outline-none ";
  const hasFloatingLabelClassList = " pb-1.5 pt-4 ";

  const hasNoBorderRingClassList =
    " hover:ring-transparent focus:ring-transparent invalid:ring-transparent hover:outline hover:outline-current invalid:hover:outline-red-500 focus:outline focus:outline-current invalid:focus:outline-red-500 accent-current ";

  const _colorSchemeVariantsForDiv = {
    undefined: " text-white dark:text-black ",
    red: " text-white dark:text-black ",
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
      />

      {label ? provideLabel() : <></>}
    </div>
  );
}
