import { ComponentProps } from "react";

type ButtonProps = ComponentProps<"button">;

type CustomButtonProps = ButtonProps & {
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  rounded?: boolean;
  variant?: "solid" | "ghost" | "outline" | "link" | "soft";
  colorScheme?: "primary" | "secondary";
};

/** Given a size, return the appropriate tailwind class name */
function handleSize(size: string) {
  switch (size) {
    case "xs":
      return " scale-50 ";
    case "sm":
      return " scale-75 ";
    case "md":
      return " scale-100 ";
    case "lg":
      return " scale-125 ";
    case "xl":
      return " scale-150 ";
    default:
      return " scale-100 ";
  }
}

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

function handleSoftVariant(colorScheme: string) {
  const focusring = " focus:ring-1 focus:ring-offset-1 focus:outline-none ";

  if (colorScheme === "primary") {
    return (
      " text-green-900 bg-green-100 hover:bg-green-200 focus:bg-green-200 focus:ring-green-500 " +
      focusring
    );
  }
  return (
    " text-purple-900 bg-purple-100 hover:bg-purple-200 focus:bg-purple-200 focus:ring-purple-500 " +
    focusring
  );
}

/** Return the appropriate tailwind class names given a variant value and colorScheme*/
function handleVariant(variant: string, colorScheme: string) {
  switch (variant) {
    case "solid":
      return handleSolidVariant(colorScheme);
    case "ghost":
      return handleGhostVariant(colorScheme);
    case "outline":
      return handleOutlineVariant(colorScheme);
    case "link":
      return handleLinkVariant(colorScheme);
    case "soft":
      return handleSoftVariant(colorScheme);
    default:
      return handleSoftVariant(colorScheme);
  }
}

/** Create a custom button component. Optional fields for size, rounded, variant and colorScheme
 *
 * @param size takes arguments `xs`, `sm`, `md`, `lg`, `xl`. Defualt is `md`.
 * @param rounded takes a boolean. Default is `false`.
 * @param variant takes arguments `solid`, `ghost`, `link`, `soft`, `outline`. Default is `solid`.
 * @param colorScheme takes arguments `primary`, `secondary`. Default is `primary`.
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

  const baseClassList = "inline-flex justify-center px-2 py-1 m-1";
  const classList =
    rest.className +
    baseClassList +
    handleSize(_size) +
    handleRounded(_rounded) +
    handleVariant(_variant, _colorScheme);

  return (
    <button
      {...rest}
      className={classList}
    ></button>
  );
}
