import React, { ReactNode, useEffect, useState, ComponentProps } from "react";
import AlertTitle from "./AlertTitle";

type DivProps = ComponentProps<"button">;

type alertProps = DivProps & {
  children?: ReactNode;
  status: "info" | "error" | "success" | "warning" | "debug";
  leadingIcon?: JSX.Element;
  actionIcon?: JSX.Element;
  onClose?: CallableFunction;
};

// Default icons
const errorIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 -960 960 960"
    aria-hidden
  >
    <path d="M480-281q14 0 24.5-10.5T515-316q0-14-10.5-24.5T480-351q-14 0-24.5 10.5T445-316q0 14 10.5 24.5T480-281Zm-30-144h60v-263h-60v263ZM330-120 120-330v-300l210-210h300l210 210v300L630-120H330Zm25-60h250l175-175v-250L605-780H355L180-605v250l175 175Zm125-300Z" />
  </svg>
);

const successIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 -960 960 960"
    aria-hidden
  >
    <path d="M480-80q-85 0-158-30.5T195-195q-54-54-84.5-127T80-480q0-84 30.5-157T195-764q54-54 127-85t158-31q75 0 140 24t117 66l-43 43q-44-35-98-54t-116-19q-145 0-242.5 97.5T140-480q0 145 97.5 242.5T480-140q145 0 242.5-97.5T820-480q0-30-4.5-58.5T802-594l46-46q16 37 24 77t8 83q0 85-31 158t-85 127q-54 54-127 84.5T480-80Zm-59-218L256-464l45-45 120 120 414-414 46 45-460 460Z" />
  </svg>
);

const infoIcon = (
  <svg
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden
  >
    <path
      fillRule="evenodd"
      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
      clipRule="evenodd"
    ></path>
  </svg>
);

const warningIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 -960 960 960"
    aria-hidden
  >
    <path d="m40-120 440-760 440 760H40Zm104-60h672L480-760 144-180Zm340.175-57q12.825 0 21.325-8.675 8.5-8.676 8.5-21.5 0-12.825-8.675-21.325-8.676-8.5-21.5-8.5-12.825 0-21.325 8.675-8.5 8.676-8.5 21.5 0 12.825 8.675 21.325 8.676 8.5 21.5 8.5ZM454-348h60v-224h-60v224Zm26-122Z" />
  </svg>
);

const debugIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 -960 960 960"
    aria-hidden
  >
    <path d="M480-120q-65 0-121-31t-83-89H160v-60h92q-7-26-7-52.5V-406h-86v-60h86q0-29 .5-57.5T254-580h-94v-60h120q14-28 37-49t51-35l-77-76 40-40 94 94q28-10 56.5-10t56.5 10l94-94 40 40-76 76q28 14 49.5 35.5T683-640h118v60h-95q9 28 8.5 56.5T714-466h87v60h-87q0 27 .5 53.5T708-300h93v60H685q-26 59-82.5 89.5T480-120Zm0-60q72 0 123-50.5T654-353v-167q0-72-51-122.5T480-693q-72 0-123 50.5T306-520v167q0 72 51 122.5T480-180Zm-80-140h160v-60H400v60Zm0-173h160v-60H400v60Zm80 57h.5-.5.5-.5.5-.5.5-.5Z" />
  </svg>
);

const closeIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 -960 960 960"
    aria-hidden
  >
    <path d="m249-207-42-42 231-231-231-231 42-42 231 231 231-231 42 42-231 231 231 231-42 42-231-231-231 231Z" />
  </svg>
);

// To be able to support multiple formats for the alert message,
// I first tried using a wrapper, `AlertMessage` to wrap any message
// and then display the children of that wrapper. That seems cumbersome
// for the consumer so no.
// My current strategy is to instead progressively remove any
// of the custom components, ie AlertIcon, AlertTitle ..., from the list of
// child components and then displaying what ever is left.
// Any strings, words not enveloped in a tag, will be filterd displayed first

function defaultColor(status: string) {
  switch (status) {
    case "info":
      return "blue";
    case "error":
      return "red";
    case "success":
      return "green";
    case "warning":
      return "amber";
    default:
      return "purple";
  }
}

function defaultIcon(status: string) {
  switch (status) {
    case "error":
      return errorIcon;
    case "info":
      return infoIcon;
    case "success":
      return successIcon;
    case "warning":
      return warningIcon;
    case "debug":
      return debugIcon;
  }
}

/** Create a custom alert component.
 * To include a title for the alert, use an AlertTitle component.
 * Svg icons with no height or width property set work best for custom icon options.
 * If an onClose callback is provided and no actionIcon prop is set, a close icon is displayed.
 * Further customisation can be achieved using any native div props
 *
 * @param status Required. The severity of this alert. Accepted values are "info" | "error" | "warning" |"success"| "debug"
 * @param leadingIcon Optional. The icon to use for this alert.
 * @param actionIcon Optional. The icon placed at the end of this alert. Is a close icon by default
 * @param onClose Optional. A callback function to be called when this alert is closed
 */
export function Alert({
  status,
  leadingIcon,
  actionIcon,
  onClose,
  children,
  ...rest
}: alertProps) {
  // unique id for this component instance
  const [componentID, setComponentId] = useState("");
  const [isClosed, setIsClosed] = useState(false);

  useEffect(() => {
    setComponentId(() => Math.random().toString(36).substring(2));
  }, []);

  //
  const childrenArray = React.Children.toArray(children);
  // Any thing not wrapped in another component.
  const _string = childrenArray.find((child) => typeof child === "string");
  // All the components in the array
  const childComponents = childrenArray.filter(React.isValidElement);
  // Any thing wrapped in the AlertTitle component
  const _title = childComponents.find((child) => child.type == AlertTitle);

  let remainingChildComponents = childComponents.filter(
    (child) => child.type != AlertTitle
  );

  //The color given the status
  const _color = defaultColor(status);
  // All color styles
  // Cannot figure out why it resists dynamically setting the color so much.
  // Apparently tailwind's jit doesn't support this.
  // const _colorStyles = ` outline-${_color}-500  dark:outline-${_color}-700 bg-${_color}-100
  //  text-${_color}-900 dark:text-${_color}-500 `;

  // This is the work around. It means hard coding every color though.
  const _colorStyleVariants = {
    info: " outline-blue-500  dark:outline-blue-700 bg-blue-100  text-blue-900 dark:text-blue-500 ",
    error:
      " outline-red-500  dark:outline-red-700 bg-red-100  text-red-900 dark:text-red-500 ",
    warning:
      " outline-amber-500  dark:outline-amber-700 bg-amber-100  text-amber-900 dark:text-amber-500 ",
    success:
      " outline-green-500  dark:outline-green-700 bg-green-100  text-green-900 dark:text-green-500 ",
    debug:
      " outline-purple-500  dark:outline-purple-700 bg-purple-100  text-purple-900 dark:text-purple-500 ",
  };

  // const _leadingIconStyles = ` w-8 flex-grow-0 flex-shrink-0 fill-${_color}-500 aspect-square `;
  const _leadningStyleVariants = {
    error: " fill-red-500 ",
    success: " fill-green-500 ",
    warning: " fill-amber-500 ",
    info: " fill-blue-500 ",
    debug: " fill-purple-500 ",
  };
  const _leadingIcon =
    leadingIcon === undefined ? defaultIcon(status) : leadingIcon;

  const _actionIcon = actionIcon === undefined ? closeIcon : actionIcon;
  // const _actionIconStyles = ` fill-${_color}-600 hover:bg-${_color}-200 focus:ring-${_color}-400 `;
  const _actionIconStylesVariants = {
    error: " fill-red-600 hover:bg-red-200 focus:ring-red-400 ",
    success: " fill-green-600 hover:bg-green-200 focus:ring-green-400 ",
    warning: " fill-amber-600 hover:bg-amber-200 focus:ring-amber-400 ",
    info: " fill-blue-600 hover:bg-blue-200 focus:ring-blue-400 ",
    debug: " fill-purple-600 hover:bg-purple-200 focus:ring-purple-400 ",
  };

  if (isClosed) {
    return null;
  }

  return (
    <div
      id={componentID}
      role="alert"
      aria-live="polite"
      aria-label={status + " alert"}
      className={
        " flex px-4 py-1 rounded-md max-w-full text-sm items-center justify-between gap-4 outline dark:bg-gray-800 " +
        _colorStyleVariants[status] +
        rest.className
      }
    >
      <div
        aria-hidden
        className={
          " w-8 aspect-square flex-grow-0 flex-shrink-0 " +
          _leadningStyleVariants[status]
        }
      >
        {_leadingIcon}
      </div>
      <div>
        {_title === undefined ? <></> : _title}
        {_string === undefined ? <></> : _string}
        {...remainingChildComponents}
      </div>
      {onClose == undefined ? (
        <></>
      ) : (
        <button
          aria-controls={componentID}
          aria-label="close"
          onClick={() => {
            onClose();
            setIsClosed(true);
          }}
          className={
            " self-start aspect-square w-6 flex-grow-0 flex-shrink-0 rounded-md dark:hover:bg-gray-700 focus:ring-2 focus:outline-none focus:ring-offset-0 " +
            _actionIconStylesVariants[status]
          }
        >
          {_actionIcon}
        </button>
      )}
    </div>
  );
}
