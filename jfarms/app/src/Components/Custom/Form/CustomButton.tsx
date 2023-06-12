import { ComponentProps } from "react";

type ButtonProps = ComponentProps<"button">;

type CustomButtonProps = ButtonProps & {
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  rounded?: boolean;
  variant?: "solid" | "ghost" | "outline" | "link" | "soft";
  colorScheme?:
    | "primary"
    | "secondary"
    | "red"
    | "green"
    | "blue"
    | "slate"
    | "gray"
    | "stone"
    | "orange"
    | "amber"
    | "yellow"
    | "lime"
    | "emerald"
    | "teal"
    | "cyan"
    | "sky"
    | "indigo"
    | "violet"
    | "purple"
    | "fuchsia"
    | "pink"
    | "rose";
  //shadows
};

/** Given a rounded value, return the appropriate tailwind class name */
function handleRounded(rounded: boolean) {
  if (rounded) {
    return " rounded-full ";
  }
  return " rounded-md ";
}

function focusAndHover(colorScheme: string) {
  const focusRing = " focus:ring-2 focus:ring-offset-1 focus:outline-none";
  if (colorScheme === "primary") {
    return " focus:ring-purple-500 hover:bg-purple-500 " + focusRing;
  }
  return " focus:ring-green-500 hover:bg-green-500 " + focusRing;
}

function handleSolidVariant(colorScheme: string) {
  const fnh = focusAndHover(colorScheme);
  if (colorScheme === "primary") {
    return fnh + " bg-green-600 text-white";
  }
  return fnh + " bg-purple-600 text-white";
}

function handleGhostVariant(colorScheme: string) {
  if (colorScheme === "primary") {
    return " text-green-900 hover:bg-green-100 focus:outline-green-700 ";
  }
  return " text-purple-900 hover:bg-purple-100 focus:outline-puple-700 ";
}

function handleOutlineVariant(colorScheme: string) {
  const focusring = " focus:ring-2 focus:ring-offset-1 focus:outline-none";

  if (colorScheme === "primary") {
    return (
      " text-green-900 outline outline-2 hover:bg-green-100 focus:ring-green-900 focus:bg-green-100" +
      focusring
    );
  }
  return (
    " text-purple-900 outline outline-2 hover:bg-purple-100 focus:ring-purple-900 focus:bg-purple-100" +
    focusring
  );
}

function handleLinkVariant(colorScheme: string) {
  if (colorScheme == "primary") {
    return " text-green-900 hover:underline focus:outline focus:underline";
  }
  return " text-purple-900 hover:underline focus:outline focus:underline";
}

/** Create a custom button component. Optional fields for size, rounded, variant and colorScheme.
 * If an aria-label is provided, a tooltip is created containing the label
 *
 * @param size takes arguments `xs`, `sm`, `md`, `lg`, `xl`. Defualt is `md`.
 * @param rounded takes a boolean. Default is `false`.
 * @param variant takes argument `solid`, `ghost`, `link`, `soft`, `outline`. Default is `solid`.
 * @param colorScheme takes `primary`, `secondary` and all default tailwind color values as an argument except `zinc` and `neutral`.
 *
 */
export default function CustomButton({
  size,
  rounded,
  variant,
  colorScheme,
  ...rest
}: CustomButtonProps) {
  const _size = size === undefined ? "md" : size;
  const _rounded = rounded === undefined ? false : rounded;
  const _variant = variant === undefined ? "solid" : variant;
  const _colorScheme = colorScheme == undefined ? "primary" : colorScheme;

  //Tool tip stuff
  const tooltipContent =
    rest["aria-label"] === undefined ? "" : rest["aria-label"];
  const tooltip = (
    <div
      aria-hidden
      role="tooltip"
      className="absolute bottom-10 left-0 inline-block z-10 
    px-3 py-2 text-xs font-medium text-black dark:text-white
    rounded-lg shadow-sm bg-slate-100 dark:bg-gray-700 
    box-border min-w-max opacity-0 invisible transition-all duration-300 translate-y-1/2
    peer-hover:opacity-100 peer-hover:translate-y-0 peer-hover:visible"
    >
      {tooltipContent}
    </div>
  );

  const _sizeStyleVariants = {
    xs: " text-xs scale-75 max-w-[2rem] ",
    sm: " text-xs max-w-[3.1rem] ",
    md: " text-base max-w-[10rem] ",
    lg: " text-xl max-w-[10rem] ",
    xl: " text-2xl max-w-[10rem] ",
    undefined: " ",
  };

  const _softStyleVariants = {
    primary:
      " text-zinc-900 dark:text-zinc-200 bg-zinc-100 dark:bg-zinc-900 hover:bg-zinc-200 dark:hover:bg-zinc-700 focus:bg-zinc-200 dark:focus:bg-zinc-700 focus:ring-zinc-500 focus:ring-1 focus:ring-offset-1 focus:outline-transparent ",
    secondary:
      " text-neutral-200 dark:text-neutral-900 bg-neutral-900 dark:bg-neutral-100 hover:bg-neutral-700 dark:hover:bg-neutral-300 focus:bg-neutral-700 dark:focus:bg-neutral-300 focus:ring-neutral-500 focus:ring-1 focus:ring-offset-1 focus:outline-transparent ",
    red: " text-red-900 dark:text-red-200 bg-red-100 dark:bg-red-900 hover:bg-red-200 dark:hover:bg-red-700 focus:bg-red-200 dark:focus:bg-red-700 focus:ring-red-500 focus:ring-1 focus:ring-offset-1 focus:outline-transparent ",
    green:
      " text-green-900 dark:text-green-200 bg-green-100 dark:bg-green-900 hover:bg-green-200 dark:hover:bg-green-700 focus:bg-green-200 dark:focus:bg-green-700 focus:ring-green-500 focus:ring-1 focus:ring-offset-1 focus:outline-transparent ",
    blue: " text-blue-900 dark:text-blue-200 bg-blue-100 dark:bg-blue-900 hover:bg-blue-200 dark:hover:bg-blue-700 focus:bg-blue-200 dark:focus:bg-blue-200 focus:ring-blue-500 focus:ring-1 focus:ring-offset-1 focus:outline-transparent ",
    slate:
      " text-slate-900 dark:text-slate-200 bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700 focus:bg-slate-300 dark:focus:bg-slate-700 focus:ring-slate-700 focus:ring-1 focus:ring-offset-1 focus:outline-transparent ",
    gray: " text-black dark:text-slate-200 bg-gray-200 dark:bg-gray-900 hover:bg-gray-300 dark:hover:bg-gray-800 focus:bg-gray-300 dark:focus:bg-gray-500 focus:ring-gray-800 focus:ring-1 focus:ring-offset-1 focus:outline-transparent ",
    stone:
      " text-black dark:text-stone-200 bg-stone-300 dark:bg-stone-800 hover:bg-stone-200 dark:hover:bg-stone-700 focus:bg-stone-200 dark:focus:bg-stone-700 focus:ring-stone-500 focus:ring-1 focus:ring-offset-1 focus:outline-transparent ",
    orange:
      " text-orange-900 dark:text-orange-200 bg-orange-100 dark:bg-orange-900 hover:bg-orange-200 dark:hover:bg-orange-700 focus:bg-orange-200 dark:focus:bg-orange-700 focus:ring-orange-500 focus:ring-1 focus:ring-offset-1 focus:outline-transparent ",
    amber:
      " text-amber-900 dark:text-amber-200 bg-amber-100 dark:bg-amber-900 hover:bg-amber-200 dark:hover:bg-amber-700 focus:bg-amber-200 dark:focus:bg-amber-700 focus:ring-amber-500 focus:ring-1 focus:ring-offset-1 focus:outline-transparent ",
    yellow:
      " text-yellow-900 dark:text-yellow-200 bg-yellow-100 dark:bg-yellow-900 hover:bg-yellow-200 dark:hover:bg-yellow-700 focus:bg-yellow-200 dark:focus:bg-yellow-700 focus:ring-yellow-500 focus:ring-1 focus:ring-offset-1 focus:outline-transparent ",
    lime: " text-lime-900 dark:text-lime-200 bg-lime-100 dark:bg-lime-900 hover:bg-lime-200 dark:hover:bg-lime-700 focus:bg-lime-200 dark:focus:bg-lime-700 focus:ring-lime-500 focus:ring-1 focus:ring-offset-1 focus:outline-transparent ",
    emerald:
      " text-emerald-900 dark:text-emerald-200 bg-emerald-100 dark:bg-emerald-900 hover:bg-emerald-200 dark:hover:bg-emerald-700 focus:bg-emerald-200 dark:focus:bg-emerald-700 focus:ring-emerald-500 focus:ring-1 focus:ring-offset-1 focus:outline-transparent ",
    teal: " text-teal-900 dark:text-teal-200 bg-teal-100 dark:bg-teal-900 hover:bg-teal-200 dark:hover:bg-teal-700 focus:bg-teal-200 dark:focus:bg-teal-700 focus:ring-teal-500 focus:ring-1 focus:ring-offset-1 focus:outline-transparent ",
    cyan: " text-cyan-900 dark:text-cyan-200 bg-cyan-100 dark:bg-cyan-900 hover:bg-cyan-200 dark:hover:bg-cyan-700 focus:bg-cyan-200 dark:focus:bg-cyan-700 focus:ring-cyan-500 focus:ring-1 focus:ring-offset-1 focus:outline-transparent ",
    sky: " text-sky-900 dark:text-sky-200 bg-sky-100 dark:bg-sky-900 hover:bg-sky-200 dark:hover:bg-sky-700 focus:bg-sky-200 dark:focus:bg-sky-700 focus:ring-sky-500 focus:ring-1 focus:ring-offset-1 focus:outline-transparent ",
    indigo:
      " text-indigo-900 dark:text-indigo-200 bg-indigo-100 dark:bg-indigo-900 hover:bg-indigo-200 dark:hover:bg-indigo-700 focus:bg-indigo-200 dark:focus:bg-indigo-700 focus:ring-indigo-500 focus:ring-1 focus:ring-offset-1 focus:outline-transparent ",
    violet:
      " text-violet-900 dark:text-violet-200 bg-violet-100 dark:bg-violet-900 hover:bg-violet-200 dark:hover:bg-violet-700 focus:bg-violet-200 dark:focus:bg-violet-700 focus:ring-violet-500 focus:ring-1 focus:ring-offset-1 focus:outline-transparent ",
    purple:
      " text-purple-900 dark:text-purple-200 bg-purple-100 dark:bg-purple-900 hover:bg-purple-200 dark:hover:bg-purple-700 focus:bg-purple-200 dark:focus:bg-purple-700 focus:ring-purple-500 focus:ring-1 focus:ring-offset-1 focus:outline-transparent ",
    fuchsia:
      " text-fuchsia-900 dark:text-fuchsia-200 bg-fuchsia-100 dark:bg-fuchsia-900 hover:bg-fuchsia-200 dark:hover:bg-fuchsia-700 focus:bg-fuchsia-200 dark:focus:bg-fuchsia-700 focus:ring-fuchsia-500 focus:ring-1 focus:ring-offset-1 focus:outline-transparent ",
    pink: " text-pink-900 dark:text-pink-200 bg-pink-100 dark:bg-pink-900 hover:bg-pink-200 dark:hover:bg-pink-700 focus:bg-pink-200 dark:focus:bg-pink-700 focus:ring-pink-500 focus:ring-1 focus:ring-offset-1 focus:outline-transparent ",
    rose: " text-rose-900 dark:text-rose-200 bg-rose-100 dark:bg-rose-900 hover:bg-rose-200 dark:hover:bg-rose-700 focus:bg-rose-200 dark:focus:bg-rose-700 focus:ring-rose-500 focus:ring-1 focus:ring-offset-1 focus:outline-transparent ",
  };


  /** Return the appropriate tailwind class names given a variant value and colorScheme*/
  function handleVariant(variant: string) {
    switch (variant) {
      case "solid":
        return handleSolidVariant(_colorScheme);
      case "ghost":
        return handleGhostVariant(_colorScheme);
      case "outline":
        return handleOutlineVariant(_colorScheme);
      case "link":
        return handleLinkVariant(_colorScheme);
      case "soft":
        return _softStyleVariants[_colorScheme];
      default:
        return _softStyleVariants[_colorScheme];
    }
  }

  //Accumulating the class list for the button itself
  const baseClassList =
    "inline-flex justify-center px-2 py-1 m-1 relative peer items-center ";
  const classList =
    baseClassList +
    _sizeStyleVariants[_size] +
    handleRounded(_rounded) +
    handleVariant(_variant) +
    rest.className;

  return (
    <div className="relative px-0">
      <button
        {...rest}
        className={classList}
      ></button>
      {rest["aria-label"] === undefined ? <></> : tooltip}
    </div>
  );
}
