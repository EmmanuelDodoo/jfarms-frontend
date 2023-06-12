import { ComponentProps } from "react";

type ButtonProps = ComponentProps<"button">;

type CustomButtonProps = ButtonProps & {
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  rounded?: boolean;
  variant?: "solid" | "ghost" | "outline" | "link" | "soft";
  tooltipClass?: string;
  startIcon?: JSX.Element;
  endIcon?: JSX.Element;
  iconsClass?: string;
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
  //Loading states
  //gradient?
};

/** Given a rounded value, return the appropriate tailwind class name */
function handleRounded(rounded: boolean) {
  if (rounded) {
    return " rounded-full ";
  }
  return " rounded-md ";
}

/** Create a custom button component. Optional fields for size, rounded, variant and colorScheme.
 * If an aria-label is provided, a tooltip is created containing the label. Use `tooltipClass` to style tool tip directly.
 *
 * @param size takes arguments `xs`, `sm`, `md`, `lg`, `xl`. Defualt is `md`.
 * @param rounded takes a boolean. Default is `false`.
 * @param variant takes argument `solid`, `ghost`, `link`, `soft`, `outline`. Default is `solid`.
 * @param colorScheme takes `primary`, `secondary` and all default tailwind color values as an argument except `zinc` and `neutral`.
 * @param tooltipClass classes for directly styling the tool tip
 * @param startIcon Leading icon for the button. Works best with svgs with no height and width styles set
 * @param endIcon Ending icon for the button. Works best with svgs with no height and width styles set
 * @param iconsClass classes for directly styling both startIcons and endIcons.
 *
 */
export default function CustomButton({
  size,
  rounded,
  variant,
  colorScheme,
  startIcon,
  endIcon,
  tooltipClass,
  iconsClass,
  ...rest
}: CustomButtonProps) {
  const _size = size === undefined ? "md" : size;
  const _rounded = rounded === undefined ? false : rounded;
  const _variant = variant === undefined ? "solid" : variant;
  const _colorScheme = colorScheme == undefined ? "primary" : colorScheme;

  const _sizeStyleVariants = {
    xs: " text-xs scale-75 max-h-6 ",
    sm: " text-xs max-h-7 ",
    md: " text-base max-w-[10rem] font-medium ",
    lg: " text-xl max-w-[10rem] font-semibold ",
    xl: " text-2xl max-w-[12rem] font-bold ",
    undefined: " text-base max-w-[10rem] ",
  };

  const _softStyleVariants = {
    primary:
      " text-zinc-900 dark:text-zinc-200 bg-zinc-100 dark:bg-zinc-900 hover:bg-zinc-200 dark:hover:bg-zinc-700 focus:bg-zinc-200 dark:focus:bg-zinc-700 focus:ring-zinc-500 focus:ring-1 focus:ring-offset-1 focus:outline-transparent fill-zinc-700 dark:fill-zinc-400 ",
    secondary:
      " text-neutral-200 dark:text-neutral-900 bg-neutral-900 dark:bg-neutral-100 hover:bg-neutral-700 dark:hover:bg-neutral-300 focus:bg-neutral-700 dark:focus:bg-neutral-300 focus:ring-neutral-500 focus:ring-1 focus:ring-offset-1 focus:outline-transparent fill-neutral-700 dark:fill-neutral-400 ",
    red: " text-red-700 dark:text-red-200 bg-red-100 dark:bg-red-900 hover:bg-red-200 dark:hover:bg-red-700 focus:bg-red-200 dark:focus:bg-red-700 focus:ring-red-500 focus:ring-1 focus:ring-offset-1 focus:outline-transparent fill-red-700 dark:fill-red-400 ",
    green:
      " text-green-700 dark:text-green-200 bg-green-100 dark:bg-green-900 hover:bg-green-200 dark:hover:bg-green-700 focus:bg-green-200 dark:focus:bg-green-700 focus:ring-green-500 focus:ring-1 focus:ring-offset-1 focus:outline-transparent fill-green-700 dark:fill-green-400 ",
    blue: " text-blue-700 dark:text-blue-200 bg-blue-100 dark:bg-blue-900 hover:bg-blue-200 dark:hover:bg-blue-700 focus:bg-blue-200 dark:focus:bg-blue-200 focus:ring-blue-500 focus:ring-1 focus:ring-offset-1 focus:outline-transparent fill-blue-700 dark:fill-blue-400 ",
    slate:
      " text-slate-900 dark:text-slate-200 bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700 focus:bg-slate-300 dark:focus:bg-slate-700 focus:ring-slate-700 focus:ring-1 focus:ring-offset-1 focus:outline-transparent fill-slate-700 dark:fill-slate-400 ",
    gray: " text-black dark:text-slate-200 bg-gray-200 dark:bg-gray-900 hover:bg-gray-300 dark:hover:bg-gray-800 focus:bg-gray-300 dark:focus:bg-gray-500 focus:ring-gray-800 focus:ring-1 focus:ring-offset-1 focus:outline-transparent fill-gray-700 dark:fill-gray-400 ",
    stone:
      " text-black dark:text-stone-200 bg-stone-300 dark:bg-stone-800 hover:bg-stone-200 dark:hover:bg-stone-700 focus:bg-stone-200 dark:focus:bg-stone-700 focus:ring-stone-500 focus:ring-1 focus:ring-offset-1 focus:outline-transparent fill-stone-700 dark:fill-stone-400 ",
    orange:
      " text-orange-700 dark:text-orange-200 bg-orange-100 dark:bg-orange-900 hover:bg-orange-200 dark:hover:bg-orange-700 focus:bg-orange-200 dark:focus:bg-orange-700 focus:ring-orange-500 focus:ring-1 focus:ring-offset-1 focus:outline-transparent fill-orange-700 dark:fill-orange-400 ",
    amber:
      " text-amber-700 dark:text-amber-200 bg-amber-100 dark:bg-amber-900 hover:bg-amber-200 dark:hover:bg-amber-700 focus:bg-amber-200 dark:focus:bg-amber-700 focus:ring-amber-500 focus:ring-1 focus:ring-offset-1 focus:outline-transparent fill-amber-700 dark:fill-amber-400 ",
    yellow:
      " text-yellow-700 dark:text-yellow-200 bg-yellow-100 dark:bg-yellow-900 hover:bg-yellow-200 dark:hover:bg-yellow-700 focus:bg-yellow-200 dark:focus:bg-yellow-700 focus:ring-yellow-500 focus:ring-1 focus:ring-offset-1 focus:outline-transparent fill-yellow-700 dark:fill-yellow-400 ",
    lime: " text-lime-700 dark:text-lime-200 bg-lime-100 dark:bg-lime-900 hover:bg-lime-200 dark:hover:bg-lime-700 focus:bg-lime-200 dark:focus:bg-lime-700 focus:ring-lime-500 focus:ring-1 focus:ring-offset-1 focus:outline-transparent fill-lime-700 dark:fill-lime-400 ",
    emerald:
      " text-emerald-700 dark:text-emerald-200 bg-emerald-100 dark:bg-emerald-900 hover:bg-emerald-200 dark:hover:bg-emerald-700 focus:bg-emerald-200 dark:focus:bg-emerald-700 focus:ring-emerald-500 focus:ring-1 focus:ring-offset-1 focus:outline-transparent fill-emerald-700 dark:fill-emerald-400 ",
    teal: " text-teal-700 dark:text-teal-200 bg-teal-100 dark:bg-teal-900 hover:bg-teal-200 dark:hover:bg-teal-700 focus:bg-teal-200 dark:focus:bg-teal-700 focus:ring-teal-500 focus:ring-1 focus:ring-offset-1 focus:outline-transparent fill-teal-700 dark:fill-teal-400 ",
    cyan: " text-cyan-700 dark:text-cyan-200 bg-cyan-100 dark:bg-cyan-900 hover:bg-cyan-200 dark:hover:bg-cyan-700 focus:bg-cyan-200 dark:focus:bg-cyan-700 focus:ring-cyan-500 focus:ring-1 focus:ring-offset-1 focus:outline-transparent fill-cyan-700 dark:fill-cyan-400 ",
    sky: " text-sky-700 dark:text-sky-200 bg-sky-100 dark:bg-sky-900 hover:bg-sky-200 dark:hover:bg-sky-700 focus:bg-sky-200 dark:focus:bg-sky-700 focus:ring-sky-500 focus:ring-1 focus:ring-offset-1 focus:outline-transparent fill-sky-700 dark:fill-sky-400 ",
    indigo:
      " text-indigo-700 dark:text-indigo-200 bg-indigo-100 dark:bg-indigo-900 hover:bg-indigo-200 dark:hover:bg-indigo-700 focus:bg-indigo-200 dark:focus:bg-indigo-700 focus:ring-indigo-500 focus:ring-1 focus:ring-offset-1 focus:outline-transparent fill-indigo-700 dark:fill-indigo-400 ",
    violet:
      " text-violet-700 dark:text-violet-200 bg-violet-100 dark:bg-violet-900 hover:bg-violet-200 dark:hover:bg-violet-700 focus:bg-violet-200 dark:focus:bg-violet-700 focus:ring-violet-500 focus:ring-1 focus:ring-offset-1 focus:outline-transparent fill-violet-700 dark:fill-violet-400 ",
    purple:
      " text-purple-700 dark:text-purple-200 bg-purple-100 dark:bg-purple-900 hover:bg-purple-200 dark:hover:bg-purple-700 focus:bg-purple-200 dark:focus:bg-purple-700 focus:ring-purple-500 focus:ring-1 focus:ring-offset-1 focus:outline-transparent fill-purple-700 dark:fill-purple-400 ",
    fuchsia:
      " text-fuchsia-700 dark:text-fuchsia-200 bg-fuchsia-100 dark:bg-fuchsia-900 hover:bg-fuchsia-200 dark:hover:bg-fuchsia-700 focus:bg-fuchsia-200 dark:focus:bg-fuchsia-700 focus:ring-fuchsia-500 focus:ring-1 focus:ring-offset-1 focus:outline-transparent fill-fushcia-700 dark:fill-fushcia-400 ",
    pink: " text-pink-700 dark:text-pink-200 bg-pink-100 dark:bg-pink-900 hover:bg-pink-200 dark:hover:bg-pink-700 focus:bg-pink-200 dark:focus:bg-pink-700 focus:ring-pink-500 focus:ring-1 focus:ring-offset-1 focus:outline-transparent fill-pink-700 dark:fill-pink-400 ",
    rose: " text-rose-700 dark:text-rose-200 bg-rose-100 dark:bg-rose-900 hover:bg-rose-200 dark:hover:bg-rose-700 focus:bg-rose-200 dark:focus:bg-rose-700 focus:ring-rose-500 focus:ring-1 focus:ring-offset-1 focus:outline-transparent fill-rose-700 dark:fill-rose-400 ",
  };

  const _linkStyleVariants = {
    primary:
      " text-zinc-900 dark:text-zinc-200 hover:underline focus:outline focus:underline fill-zinc-700 dark:fill-zinc-400 ",
    secondary:
      " text-neutral-900 dark:text-neutral-200 hover:underline focus:outline focus:underline fill-neutal-700 dark:fill-neutal-400 ",
    red: " text-red-700 dark:text-red-200 hover:underline focus:outline focus:underline fill-red-700 dark:fill-red-400 ",
    green:
      " text-green-700 dark:text-green-200 hover:underline focus:outline focus:underline fill-green-700 dark:fill-green-400 ",
    blue: " text-blue-700 dark:text-blue-200 hover:underline focus:outline focus:underline fill-blue-700 dark:fill-blue-400 ",
    slate:
      " text-slate-900 dark:text-slate-200 hover:underline focus:outline focus:underline fill-slate-700 dark:fill-slate-400 ",
    gray: " text-black dark:text-slate-200 hover:underline focus:outline focus:underline fill-gray-700 dark:fill-gray-400 ",
    stone:
      " text-black dark:text-stone-200 hover:underline focus:outline focus:underline fill-stone-700 dark:fill-stone-400 ",
    orange:
      " text-orange-700 dark:text-orange-200 hover:underline focus:outline focus:underline fill-orange-700 dark:fill-orange-400 ",
    amber:
      " text-amber-700 dark:text-amber-200 hover:underline focus:outline focus:underline fill-amber-700 dark:fill-amber-400 ",
    yellow:
      " text-yellow-700 dark:text-yellow-200 hover:underline focus:outline focus:underline fill-yellow-700 dark:fill-yellow-400 ",
    lime: " text-lime-700 dark:text-lime-200 hover:underline focus:outline focus:underline fill-lime-700 dark:fill-lime-400 ",
    emerald:
      " text-emerald-700 dark:text-emerald-200 hover:underline focus:outline focus:underline fill-emerald-700 dark:fill-emerald-400 ",
    teal: " text-teal-700 dark:text-teal-200 hover:underline focus:outline focus:underline fill-teal-700 dark:fill-teal-400 ",
    cyan: " text-cyan-700 dark:text-cyan-200 hover:underline focus:outline focus:underline fill-cyan-700 dark:fill-cyan-400 ",
    sky: " text-sky-700 dark:text-sky-200 hover:underline focus:outline focus:underline fill-sky-700 dark:fill-blue-400 ",
    indigo:
      " text-indigo-700 dark:text-indigo-200 hover:underline focus:outline focus:underline fill-indigo-700 dark:fill-indigo-400 ",
    violet:
      " text-violet-700 dark:text-violet-200 hover:underline focus:outline focus:underline fill-violet-700 dark:fill-violet-400 ",
    purple:
      " text-purple-700 dark:text-purple-200 hover:underline focus:outline focus:underline fill-purple-700 dark:fill-purple-400 ",
    fuchsia:
      " text-fuchsia-700 dark:text-fuchsia-200 hover:underline focus:outline focus:underline fill-fuchsia-700 dark:fill-fuchsia-400 ",
    pink: " text-pink-700 dark:text-pink-200 hover:underline focus:outline focus:underline fill-pink-700 dark:fill-pink-400 ",
    rose: " text-rose-700 dark:text-rose-200 hover:underline focus:outline focus:underline fill-rose-700 dark:fill-rose-400 ",
  };

  const _outlinedStyleVariants = {
    primary:
      " text-zinc-900 dark:text-zinc-200 outline outline-2 hover:bg-zinc-100 dark:hover:bg-zinc-700 focus:ring-zinc-900 dark:focus:ring-zinc-500 focus:bg-zinc-100 dark:focus:bg-zinc-900 focus:ring-2 focus:ring-offset-1 focus:outline-transparent fill-zinc-700 dark:fill-zinc-400 ",
    secondary:
      " text-neutral-900 dark:text-neutral-200 outline outline-2 hover:bg-neutral-100 dark:hover:bg-neutral-700 focus:ring-neutral-900 dark:focus:ring-neutral-500 focus:bg-neutral-100 dark:focus:bg-neutral-900 focus:ring-2 focus:ring-offset-1 focus:outline-transparent fill-neutral-700 dark:fill-neutral-400 ",
    red: " text-red-700 dark:text-red-200 outline outline-2 hover:bg-red-100 dark:hover:bg-red-700 focus:ring-red-900 dark:focus:ring-red-500 focus:bg-red-100 dark:focus:bg-red-900 focus:ring-2 focus:ring-offset-1 focus:outline-transparent fill-red-700 dark:fill-red-400 ",
    green:
      " text-green-700 dark:text-green-200 outline outline-2 hover:bg-green-100 dark:hover:bg-green-700 focus:ring-green-900 dark:focus:ring-green-500 focus:bg-green-100 dark:focus:bg-green-900 focus:ring-2 focus:ring-offset-1 focus:outline-transparent fill-green-700 dark:fill-green-400 ",
    blue: " text-blue-700 dark:text-blue-200 outline outline-2 hover:bg-blue-100 dark:hover:bg-blue-700 focus:ring-blue-900 dark:focus:ring-blue-500 focus:bg-blue-100 dark:focus:bg-blue-900 focus:ring-2 focus:ring-offset-1 focus:outline-transparent fill-blue-700 dark:fill-blue-400 ",
    slate:
      " text-slate-900 dark:text-slate-200 outline outline-2 hover:bg-slate-200 dark:hover:bg-slate-700 focus:ring-slate-900 dark:focus:ring-slate-500 focus:bg-slate-100 dark:focus:bg-slate-900 focus:ring-2 focus:ring-offset-1 focus:outline-transparent fill-slate-700 dark:fill-slate-400 ",
    gray: " text-gray-900 dark:text-gray-200 outline outline-2 hover:bg-gray-100 dark:hover:bg-gray-500 focus:ring-gray-900 dark:focus:ring-gray-500 focus:bg-gray-100 dark:focus:bg-gray-900 focus:ring-2 focus:ring-offset-1 focus:outline-transparent fill-gray-700 dark:fill-gray-400 ",
    stone:
      " text-stone-900 dark:text-stone-200 outline outline-2 hover:bg-stone-100 dark:hover:bg-stone-700 focus:ring-stone-900 dark:focus:ring-stone-500 focus:bg-stone-100 dark:focus:bg-stone-900 focus:ring-2 focus:ring-offset-1 focus:outline-transparent fill-stone-700 dark:fill-stone-400 ",
    orange:
      " text-orange-700 dark:text-orange-200 outline outline-2 hover:bg-orange-100 dark:hover:bg-orange-700 focus:ring-orange-900 dark:focus:ring-orange-500 focus:bg-orange-100 dark:focus:bg-orange-900 focus:ring-2 focus:ring-offset-1 focus:outline-transparent fill-orange-700 dark:fill-orange-400 ",
    amber:
      " text-amber-700 dark:text-amber-200 outline outline-2 hover:bg-amber-100 dark:hover:bg-amber-700 focus:ring-amber-900 dark:focus:ring-amber-500 focus:bg-amber-100 dark:focus:bg-amber-900 focus:ring-2 focus:ring-offset-1 focus:outline-transparent fill-amber-700 dark:fill-amber-400 ",
    yellow:
      " text-yellow-700 dark:text-yellow-200 outline outline-2 hover:bg-yellow-100 dark:hover:bg-yellow-700 focus:ring-yellow-900 dark:focus:ring-yellow-500 focus:bg-yellow-100 dark:focus:bg-yellow-900 focus:ring-2 focus:ring-offset-1 focus:outline-transparent fill-yellow-700 dark:fill-yellow-400 ",
    lime: " text-lime-700 dark:text-lime-200 outline outline-2 hover:bg-lime-100 dark:hover:bg-lime-700 focus:ring-lime-900 dark:focus:ring-lime-500 focus:bg-lime-100 dark:focus:bg-lime-900 focus:ring-2 focus:ring-offset-1 focus:outline-transparent fill-lime-700 dark:fill-lime-400 ",
    emerald:
      " text-emerald-700 dark:text-emerald-200 outline outline-2 hover:bg-emerald-100 dark:hover:bg-emerald-700 focus:ring-emerald-900 dark:focus:ring-emerald-500 focus:bg-emerald-100 dark:focus:bg-emerald-900 focus:ring-2 focus:ring-offset-1 focus:outline-transparent fill-emerald-700 dark:fill-emerald-400 ",
    teal: " text-teal-700 dark:text-teal-200 outline outline-2 hover:bg-teal-100 dark:hover:bg-teal-700 focus:ring-teal-900 dark:focus:ring-teal-500 focus:bg-teal-100 dark:focus:bg-teal-900 focus:ring-2 focus:ring-offset-1 focus:outline-transparent fill-teal-700 dark:fill-teal-400 ",
    cyan: " text-cyan-700 dark:text-cyan-200 outline outline-2 hover:bg-cyan-100 dark:hover:bg-cyan-700 focus:ring-cyan-900 dark:focus:ring-cyan-500 focus:bg-cyan-100 dark:focus:bg-cyan-900 focus:ring-2 focus:ring-offset-1 focus:outline-transparent fill-cyan-700 dark:fill-cyan-400 ",
    sky: " text-sky-700 dark:text-sky-200 outline outline-2 hover:bg-sky-100 dark:hover:bg-sky-700 focus:ring-sky-900 dark:focus:ring-sky-500 focus:bg-sky-100 dark:focus:bg-sky-900 focus:ring-2 focus:ring-offset-1 focus:outline-transparent fill-sky-700 dark:fill-sky-400 ",
    indigo:
      " text-indigo-700 dark:text-indigo-200 outline outline-2 hover:bg-indigo-100 dark:hover:bg-indigo-700 focus:ring-indigo-900 dark:focus:ring-indigo-500 focus:bg-indigo-100 dark:focus:bg-indigo-900 focus:ring-2 focus:ring-offset-1 focus:outline-transparent fill-indigo-700 dark:fill-indigo-400 ",
    violet:
      " text-violet-700 dark:text-violet-200 outline outline-2 hover:bg-violet-100 dark:hover:bg-violet-700 focus:ring-violet-900 dark:focus:ring-violet-500 focus:bg-violet-100 dark:focus:bg-violet-900 focus:ring-2 focus:ring-offset-1 focus:outline-transparent fill-violet-700 dark:fill-violet-400 ",
    purple:
      " text-purple-700 dark:text-purple-200 outline outline-2 hover:bg-purple-100 dark:hover:bg-purple-700 focus:ring-purple-900 dark:focus:ring-purple-500 focus:bg-purple-100 dark:focus:bg-purple-900 focus:ring-2 focus:ring-offset-1 focus:outline-transparent fill-purple-700 dark:fill-purple-400 ",
    fuchsia:
      " text-fuchsia-700 dark:text-fuchsia-200 outline outline-2 hover:bg-fuchsia-100 dark:hover:bg-fuchsia-700 focus:ring-fuchsia-900 dark:focus:ring-fuchsia-500 focus:bg-fuchsia-100 dark:focus:bg-fuchsia-900 focus:ring-2 focus:ring-offset-1 focus:outline-transparent fill-fuchsia-700 dark:fill-fuchsia-400 ",
    pink: " text-pink-700 dark:text-pink-200 outline outline-2 hover:bg-pink-100 dark:hover:bg-pink-700 focus:ring-pink-900 dark:focus:ring-pink-500 focus:bg-pink-100 dark:focus:bg-pink-900 focus:ring-2 focus:ring-offset-1 focus:outline-transparent fill-pink-700 dark:fill-pink-400 ",
    rose: " text-rose-700 dark:text-rose-200 outline outline-2 hover:bg-rose-100 dark:hover:bg-rose-700 focus:ring-rose-900 dark:focus:ring-rose-500 focus:bg-rose-100 dark:focus:bg-rose-900 focus:ring-2 focus:ring-offset-1 focus:outline-transparent fill-rose-700 dark:fill-rose-400 ",
  };

  const _ghostStyleVariants = {
    primary:
      " text-zinc-900 dark:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-900 focus:bg-zinc-200 dark:focus:bg-zinc-700 focus:ring-zinc-500 focus:ring-1 focus:ring-offset-1 focus:outline-transparent fill-zinc-700 dark:fill-zinc-400 ",
    secondary:
      " text-neutral-900 hover:text-neutral-200 focus:text-neutral-200 dark:text-neutral-200 dark:hover:text-neutral-900 dark:focus:text-neutral-900 hover:bg-neutral-900 dark:hover:bg-neutral-100 focus:bg-neutral-700 dark:focus:bg-neutral-300 focus:ring-neutral-500 focus:ring-1 focus:ring-offset-1 focus:outline-transparent fill-neutral-700 dark:fill-neutral-400 ",
    red: " text-red-700 dark:text-red-200 hover:bg-red-100 dark:hover:bg-red-900 focus:bg-red-200 dark:focus:bg-red-700 focus:ring-red-500 focus:ring-1 focus:ring-offset-1 focus:outline-transparent fill-red-700 dark:fill-red-400 ",
    green:
      " text-green-700 dark:text-green-200 hover:bg-green-100 dark:hover:bg-green-900 focus:bg-green-200 dark:focus:bg-green-700 focus:ring-green-500 focus:ring-1 focus:ring-offset-1 focus:outline-transparent fill-green-700 dark:fill-green-400 ",
    blue: " text-blue-700 dark:text-blue-200 hover:bg-blue-100 dark:hover:bg-blue-900 focus:bg-blue-200 dark:focus:bg-blue-200 focus:ring-blue-500 focus:ring-1 focus:ring-offset-1 focus:outline-transparent fill-blue-700 dark:fill-blue-400 ",
    slate:
      " text-slate-900 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-800 focus:bg-slate-300 dark:focus:bg-slate-700 focus:ring-slate-700 focus:ring-1 focus:ring-offset-1 focus:outline-transparent fill-slate-700 dark:fill-slate-400 ",
    gray: " text-black dark:text-slate-200 hover:bg-gray-200 dark:hover:bg-gray-900 focus:bg-gray-300 dark:focus:bg-gray-500 focus:ring-gray-800 focus:ring-1 focus:ring-offset-1 focus:outline-transparent fill-gray-700 dark:fill-gray-400 ",
    stone:
      " text-black dark:text-stone-200 hover:bg-stone-300 dark:hover:bg-stone-800 focus:bg-stone-200 dark:focus:bg-stone-700 focus:ring-stone-500 focus:ring-1 focus:ring-offset-1 focus:outline-transparent fill-stone-700 dark:fill-stone-400 ",
    orange:
      " text-orange-700 dark:text-orange-200 hover:bg-orange-100 dark:hover:bg-orange-900 focus:bg-orange-200 dark:focus:bg-orange-700 focus:ring-orange-500 focus:ring-1 focus:ring-offset-1 focus:outline-transparent fill-orange-700 dark:fill-orange-400 ",
    amber:
      " text-amber-700 dark:text-amber-200 hover:bg-amber-100 dark:hover:bg-amber-900 focus:bg-amber-200 dark:focus:bg-amber-700 focus:ring-amber-500 focus:ring-1 focus:ring-offset-1 focus:outline-transparent fill-amber-700 dark:fill-amber-400 ",
    yellow:
      " text-yellow-700 dark:text-yellow-200 hover:bg-yellow-100 dark:hover:bg-yellow-900 focus:bg-yellow-200 dark:focus:bg-yellow-700 focus:ring-yellow-500 focus:ring-1 focus:ring-offset-1 focus:outline-transparent fill-yellow-700 dark:fill-yellow-400 ",
    lime: " text-lime-700 dark:text-lime-200 hover:bg-lime-100 dark:hover:bg-lime-900 focus:bg-lime-200 dark:focus:bg-lime-700 focus:ring-lime-500 focus:ring-1 focus:ring-offset-1 focus:outline-transparent fill-lime-700 dark:fill-lime-400 ",
    emerald:
      " text-emerald-700 dark:text-emerald-200 hover:bg-emerald-100 dark:hover:bg-emerald-900 focus:bg-emerald-200 dark:focus:bg-emerald-700 focus:ring-emerald-500 focus:ring-1 focus:ring-offset-1 focus:outline-transparent fill-emerald-700 dark:fill-emerald-400 ",
    teal: " text-teal-700 dark:text-teal-200 hover:bg-teal-100 dark:hover:bg-teal-900 focus:bg-teal-200 dark:focus:bg-teal-700 focus:ring-teal-500 focus:ring-1 focus:ring-offset-1 focus:outline-transparent fill-teal-700 dark:fill-teal-400 ",
    cyan: " text-cyan-700 dark:text-cyan-200 hover:bg-cyan-100 dark:hover:bg-cyan-900 focus:bg-cyan-200 dark:focus:bg-cyan-700 focus:ring-cyan-500 focus:ring-1 focus:ring-offset-1 focus:outline-transparent fill-cyan-700 dark:fill-cyan-400 ",
    sky: " text-sky-700 dark:text-sky-200 hover:bg-sky-100 dark:hover:bg-sky-900 focus:bg-sky-200 dark:focus:bg-sky-700 focus:ring-sky-500 focus:ring-1 focus:ring-offset-1 focus:outline-transparent fill-sky-700 dark:fill-sky-400 ",
    indigo:
      " text-indigo-700 dark:text-indigo-200 hover:bg-indigo-100 dark:hover:bg-indigo-900 focus:bg-indigo-200 dark:focus:bg-indigo-700 focus:ring-indigo-500 focus:ring-1 focus:ring-offset-1 focus:outline-transparent fill-indigo-700 dark:fill-indigo-400 ",
    violet:
      " text-violet-700 dark:text-violet-200 hover:bg-violet-100 dark:hover:bg-violet-900 focus:bg-violet-200 dark:focus:bg-violet-700 focus:ring-violet-500 focus:ring-1 focus:ring-offset-1 focus:outline-transparent fill-violet-700 dark:fill-violet-400 ",
    purple:
      " text-purple-700 dark:text-purple-200 hover:bg-purple-100 dark:hover:bg-purple-900 focus:bg-purple-200 dark:focus:bg-purple-700 focus:ring-purple-500 focus:ring-1 focus:ring-offset-1 focus:outline-transparent fill-purple-700 dark:fill-purple-400 ",
    fuchsia:
      " text-fuchsia-700 dark:text-fuchsia-200 hover:bg-fuchsia-100 dark:hover:bg-fuchsia-900 focus:bg-fuchsia-200 dark:focus:bg-fuchsia-700 focus:ring-fuchsia-500 focus:ring-1 focus:ring-offset-1 focus:outline-transparent fill-fushcia-700 dark:fill-fushcia-400 ",
    pink: " text-pink-700 dark:text-pink-200 hover:bg-pink-100 dark:hover:bg-pink-900 focus:bg-pink-200 dark:focus:bg-pink-700 focus:ring-pink-500 focus:ring-1 focus:ring-offset-1 focus:outline-transparent fill-pink-700 dark:fill-pink-400 ",
    rose: " text-rose-700 dark:text-rose-200 hover:bg-rose-100 dark:hover:bg-rose-900 focus:bg-rose-200 dark:focus:bg-rose-700 focus:ring-rose-500 focus:ring-1 focus:ring-offset-1 focus:outline-transparent fill-rose-700 dark:fill-rose-400 ",
  };

  const _solidStyleVariants = {
    primary:
      " text-zinc-50 bg-zinc-500 dark:bg-zinc-700 hover:bg-zinc-600 dark:hover:bg-zinc-600 focus:bg-zinc-600 dark:focus:bg-zinc-600 focus:ring-zinc-500 focus:ring-1 focus:ring-offset-1 focus:outline-transparent fill-zinc-700 dark:fill-zinc-400 ",
    secondary:
      " text-neutral-50 dark:text-neutral-100 bg-neutral-600 dark:bg-neutral-700 hover:bg-neutral-700 dark:hover:bg-neutral-600 focus:bg-neutral-700 dark:focus:bg-neutral-600 focus:ring-neutral-500 focus:ring-1 focus:ring-offset-1 focus:outline-transparent fill-neutral-700 dark:fill-neutral-400 ",
    red: " text-red-50 bg-red-500 dark:bg-red-600 hover:bg-red-600 dark:hover:bg-red-500 focus:bg-red-600 dark:focus:bg-red-500 focus:ring-red-500 focus:ring-1 focus:ring-offset-1 focus:outline-transparent fill-red-700 dark:fill-red-400 ",
    green:
      " text-green-50 dark:text-green-100 bg-green-500 dark:bg-green-700 hover:bg-green-600 dark:hover:bg-green-600 focus:bg-green-600 dark:focus:bg-green-600 focus:ring-green-500 focus:ring-1 focus:ring-offset-1 focus:outline-transparent fill-green-700 dark:fill-green-400 ",
    blue: " text-blue-50 dark:text-blue-100 bg-blue-500 dark:bg-blue-700 hover:bg-blue-600 dark:hover:bg-blue-600 focus:bg-blue-600 dark:focus:bg-blue-600 focus:ring-blue-500 focus:ring-1 focus:ring-offset-1 focus:outline-transparent fill-blue-700 dark:fill-blue-400 ",
    slate:
      " text-slate-100 bg-slate-500 dark:bg-slate-600 hover:bg-slate-600 dark:hover:bg-slate-500 focus:bg-slate-600 dark:focus:bg-slate-500 focus:ring-slate-500 focus:ring-1 focus:ring-offset-1 focus:outline-transparent fill-slate-700 dark:fill-slate-400 ",
    gray: " text-gray-50 bg-gray-500 dark:bg-gray-700 hover:bg-gray-600 dark:hover:bg-gray-600 focus:bg-gray-600 dark:focus:bg-gray-600 focus:ring-gray-500 focus:ring-1 focus:ring-offset-1 focus:outline-transparent fill-gray-700 dark:fill-gray-400 ",
    stone:
      " text-stone-50 dark:text-stone-100 bg-stone-500 dark:bg-stone-700 hover:bg-stone-600 dark:hover:bg-stone-600 focus:bg-stone-600 dark:focus:bg-stone-600 focus:ring-stone-500 focus:ring-1 focus:ring-offset-1 focus:outline-transparent fill-stone-700 dark:fill-stone-400 ",
    orange:
      " text-orange-50 dark:text-orange-100 bg-orange-500 dark:bg-orange-700 hover:bg-orange-600 dark:hover:bg-orange-600 focus:bg-orange-600 dark:focus:bg-orange-600 focus:ring-orange-500 focus:ring-1 focus:ring-offset-1 focus:outline-transparent fill-orange-700 dark:fill-orange-400 ",
    amber:
      " text-black dark:text-amber-100 bg-amber-500 dark:bg-amber-600 hover:bg-amber-600 dark:hover:bg-amber-500 focus:bg-amber-600 dark:focus:bg-amber-500 focus:ring-amber-500 focus:ring-1 focus:ring-offset-1 focus:outline-transparent fill-amber-700 dark:fill-amber-400 ",
    yellow:
      " text-black dark:text-yellow-50 bg-yellow-400 dark:bg-yellow-600 hover:bg-yellow-500 dark:hover:bg-yellow-500 focus:bg-yellow-500 dark:focus:bg-yellow-500 focus:ring-yellow-500 focus:ring-1 focus:ring-offset-1 focus:outline-transparent fill-yellow-700 dark:fill-yellow-400 ",
    lime: " text-black dark:text-lime-100 bg-lime-500 dark:bg-lime-600 hover:bg-lime-600 dark:hover:bg-lime-500 focus:bg-lime-600 dark:focus:bg-lime-500 focus:ring-lime-500 focus:ring-1 focus:ring-offset-1 focus:outline-transparent fill-lime-700 dark:fill-lime-400 ",
    emerald:
      " text-emerald-50 dark:text-emerald-100 bg-emerald-600 dark:bg-emerald-700 hover:bg-emerald-700 dark:hover:bg-emerald-600 focus:bg-emerald-700 dark:focus:bg-emerald-600 focus:ring-emerald-500 focus:ring-1 focus:ring-offset-1 focus:outline-transparent fill-emerald-700 dark:fill-emerald-400 ",
    teal: " text-black dark:text-teal-100 bg-teal-500 dark:bg-teal-700 hover:bg-teal-600 dark:hover:bg-teal-600 focus:bg-teal-600 dark:focus:bg-teal-600 focus:ring-teal-500 focus:ring-1 focus:ring-offset-1 focus:outline-transparent fill-teal-700 dark:fill-teal-400 ",
    cyan: " text-black dark:text-cyan-100 bg-cyan-500 dark:bg-cyan-700 hover:bg-cyan-600 dark:hover:bg-cyan-600 focus:bg-cyan-600 dark:focus:bg-cyan-600 focus:ring-cyan-500 focus:ring-1 focus:ring-offset-1 focus:outline-transparent fill-cyan-700 dark:fill-cyan-400 ",
    sky: " text-sky-100 bg-sky-500 dark:bg-sky-700 hover:bg-sky-600 dark:hover:bg-sky-600 focus:bg-sky-600 dark:focus:bg-sky-600 focus:ring-sky-500 focus:ring-1 focus:ring-offset-1 focus:outline-transparent fill-sky-700 dark:fill-sky-400 ",
    indigo:
      " text-indigo-100 dark:text-indigo-200 bg-indigo-600 dark:bg-indigo-800 hover:bg-indigo-700 dark:hover:bg-indigo-700 focus:bg-indigo-700 dark:focus:bg-indigo-700 focus:ring-indigo-500 focus:ring-1 focus:ring-offset-1 focus:outline-transparent fill-indigo-700 dark:fill-indigo-400 ",
    violet:
      " text-violet-100 dark:text-violet-200 bg-violet-600 dark:bg-violet-800 hover:bg-violet-700 dark:hover:bg-violet-700 focus:bg-violet-700 dark:focus:bg-violet-700 focus:ring-violet-500 focus:ring-1 focus:ring-offset-1 focus:outline-transparent fill-violet-700 dark:fill-violet-400 ",
    purple:
      " text-purple-100 dark:text-purple-100 bg-purple-600 dark:bg-purple-500 hover:bg-purple-700 dark:hover:bg-purple-400 focus:bg-purple-700 dark:focus:bg-purple-400 focus:ring-purple-500 focus:ring-1 focus:ring-offset-1 focus:outline-transparent fill-purple-700 dark:fill-purple-400 ",
    fuchsia:
      " text-fuchsia-100 bg-fuchsia-600 dark:bg-fuchsia-800 hover:bg-fuchsia-700 dark:hover:bg-fuchsia-700 focus:bg-fuchsia-700 dark:focus:bg-fuchsia-700 focus:ring-fuchsia-500 focus:ring-1 focus:ring-offset-1 focus:outline-transparent fill-fuchsia-700 dark:fill-fuchsia-400 ",
    pink: " text-pink-100 bg-pink-600 dark:bg-pink-800 hover:bg-pink-700 dark:hover:bg-pink-700 focus:bg-pink-700 dark:focus:bg-pink-700 focus:ring-pink-500 focus:ring-1 focus:ring-offset-1 focus:outline-transparent fill-pink-700 dark:fill-pink-400 ",
    rose: " text-rose-100 bg-rose-600 dark:bg-rose-500 hover:bg-rose-700 dark:hover:bg-rose-400 focus:bg-rose-700 dark:focus:bg-rose-400 focus:ring-rose-500 focus:ring-1 focus:ring-offset-1 focus:outline-transparent fill-rose-700 dark:fill-rose-400 ",
  };

  /** Return the appropriate tailwind class names given a variant value and colorScheme*/
  function handleVariant(variant: string) {
    switch (variant) {
      case "solid":
        return _solidStyleVariants[_colorScheme];
      case "ghost":
        return _ghostStyleVariants[_colorScheme];
      case "outline":
        return _outlinedStyleVariants[_colorScheme];
      case "link":
        return _linkStyleVariants[_colorScheme];
      case "soft":
        return _softStyleVariants[_colorScheme];
      default:
        return _softStyleVariants[_colorScheme];
    }
  }

  /** Wraps both start and end icons with appropriate styles */
  function createIcon(icon: JSX.Element) {
    const _iconSizeVariants = {
      xs: " w-3 ",
      sm: " w-3 ",
      md: " w-5 ",
      lg: " w-6 ",
      xl: " w-6 ",
    };

    return (
      <div
        aria-hidden
        className={
          " mx-1 my-0 aspect-square flex-grow-0 flex-shrink-0 fill-current " +
          _iconSizeVariants[_size] +
          iconsClass
        }
      >
        {icon}
      </div>
    );
  }

  //Tool tip stuff
  function createTooltip() {
    const _tooltipColorVariants = {
      primary:
        " text-zinc-800 dark:text-zinc-100 bg-zinc-100 dark:bg-zinc-600 ",
      secondary:
        " text-neutral-800 dark:text-neutral-100 bg-neutral-200 dark:bg-neutral-400 ",
      red: " text-red-800 dark:text-red-100 bg-red-100 dark:bg-red-500 ",
      blue: " text-blue-800 dark:text-blue-100 bg-blue-100 dark:bg-blue-500 ",
      green:
        " text-green-800 dark:text-green-50 bg-green-100 dark:bg-green-500 ",
      slate:
        " text-slate-800 dark:text-slate-100 bg-slate-100 dark:bg-slate-500 ",
      gray: " text-gray-800 dark:text-gray-100 bg-gray-100 dark:bg-gray-700 ",
      stone:
        " text-stone-800 dark:text-stone-100 bg-stone-200 dark:bg-stone-600 ",
      orange:
        " text-orange-800 dark:text-orange-100 bg-orange-100 dark:bg-orange-500 ",
      amber:
        " text-amber-800 dark:text-amber-100 bg-amber-100 dark:bg-amber-500 ",
      yellow:
        " text-yellow-800 dark:text-yellow-100 bg-yellow-100 dark:bg-yellow-500 ",
      lime: " text-lime-800 dark:text-lime-100 bg-lime-100 dark:bg-lime-500 ",
      teal: " text-teal-800 dark:text-teal-100 bg-teal-100 dark:bg-teal-500 ",
      emerald:
        " text-emerald-800 dark:text-emerald-100 bg-emerald-100 dark:bg-emerald-500 ",
      cyan: " text-cyan-800 dark:text-cyan-100 bg-cyan-100 dark:bg-cyan-500 ",
      sky: " text-sky-800 dark:text-sky-100 bg-sky-100 dark:bg-sky-500 ",
      indigo:
        "text-indigo-800 dark:text-indigo-100 bg-indigo-100 dark:bg-indigo-500 ",
      violet:
        " text-violet-800 dark:text-violet-100 bg-violet-100 dark:bg-violet-500 ",
      purple:
        " text-purple-800 dark:text-purple-100 bg-purple-100 dark:bg-purple-500 ",
      fuchsia:
        " text-fuchsia-800 dark:text-fuchsia-100 bg-fuchsia-100 dark:bg-fuchsia-500 ",
      pink: " text-pink-800 dark:text-pink-100 bg-pink-100 dark:bg-pink-500 ",
      rose: " text-rose-800 dark:text-rose-100 bg-rose-100 dark:bg-rose-600 ",
    };

    const _tooltipClass =
      " absolute bottom-10 left-0 inline-block z-10 px-3 py-2 text-xs font-medium rounded-lg shadow-sm box-border min-w-max opacity-0 invisible translate-y-1/2 transition-all duration-300 peer-hover:opacity-100 peer-hover:translate-y-0 peer-hover:visible " +
      _tooltipColorVariants[_colorScheme] +
      tooltipClass;

    const tooltipContent =
      rest["aria-label"] === undefined ? "" : rest["aria-label"];
    return rest.disabled ? (
      <></>
    ) : (
      <div
        aria-hidden
        role="tooltip"
        className={_tooltipClass}
      >
        {tooltipContent}
      </div>
    );
  }

  // Disableled button stuff
  const _disabledStyle = rest.disabled
    ? " opacity-50 grayscale cursor-not-allowed "
    : "";

  const _startIcon = startIcon === undefined ? <></> : createIcon(startIcon);
  const _endIcon = endIcon === undefined ? <></> : createIcon(endIcon);

  //Accumulating the class list for the button itself
  const baseClassList =
    "inline-flex justify-center px-2 py-1 m-1 relative peer items-center group ";
  const classList =
    baseClassList +
    _sizeStyleVariants[_size] +
    handleRounded(_rounded) +
    handleVariant(_variant) +
    _disabledStyle +
    rest.className;

  return (
    <div className="relative px-0">
      <button
        {...rest}
        className={classList}
      >
        {_startIcon}
        {rest.children}
        {_endIcon}
      </button>
      {rest["aria-label"] === undefined ? <></> : createTooltip()}
    </div>
  );
}
