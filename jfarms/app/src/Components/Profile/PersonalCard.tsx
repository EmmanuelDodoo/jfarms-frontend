import { Dispatch, SetStateAction, useState } from "react";
import CustomButton from "../Custom/Form/CustomButton";

export default function PersonalCard() {
  const divClassNames = " flex gap-2 items-center";
  const subClassNames = " font-semibold text-slate-500 ";
  const detailClassNames = " font-semibold text-slate-800 ";
  const copySVG = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 -960 960 960"
      className="aspect-square w-5"
    >
      <path d="M180-81q-24 0-42-18t-18-42v-603h60v603h474v60H180Zm120-120q-24 0-42-18t-18-42v-560q0-24 18-42t42-18h440q24 0 42 18t18 42v560q0 24-18 42t-42 18H300Zm0-60h440v-560H300v560Zm0 0v-560 560Z" />
    </svg>
  );

  const [emailCopyFlag, setEmailCopyFlag] = useState(false);
  const [numberCopyFlag, setNumberCopyFlag] = useState(false);

  /** Copies the content of element specified by `id` on to the user's
   * clipboard
   */
  function copyElementContents(
    elementId: string,
    buttonSetter: Dispatch<SetStateAction<boolean>>
  ) {
    const lmt = document.getElementById(elementId);

    if (lmt) {
      navigator.clipboard.writeText(lmt.textContent!);
    }

    buttonSetter(true);
    setTimeout(() => buttonSetter(false), 3000);
  }

  return (
    <div className="py-4 px-3 gap-4 rounded-md shadow-md h-fit flex flex-col bg-white">
      <h3 className="text-slate-700 font-bold">Personal Details</h3>
      <div className={divClassNames}>
        <span className={subClassNames}>Full name: </span>
        <span className={detailClassNames}>Kofi Ananse Manu</span>
      </div>
      <div className={divClassNames}>
        <span className={subClassNames}>Gender: </span>
        <span className={detailClassNames}>Mythical Spider</span>
      </div>
      <div className={divClassNames}>
        <span className={subClassNames}>Email: </span>
        <span
          className={detailClassNames}
          id="email"
        >
          km57@gmail.com
        </span>
        <CustomButton
          size="sm"
          variant="soft"
          colorScheme="blue"
          onClick={() => copyElementContents("email", setEmailCopyFlag)}
          id="emailCopyButton"
          aria-label="Copy email"
        >
          {emailCopyFlag ? <div className="text-black">Copied!</div> : copySVG}
        </CustomButton>
      </div>
      <div className={divClassNames}>
        <span className={subClassNames}>Phone number: </span>
        <span
          className={detailClassNames}
          id="phone-number"
        >
          +1 000 000 0000
        </span>
        <CustomButton
          size="sm"
          variant="soft"
          colorScheme="blue"
          onClick={() => copyElementContents("phone-number", setNumberCopyFlag)}
          id="numberCopyButton"
          aria-label="Copy phone number"
        >
          {numberCopyFlag ? <div className="text-black">Copied!</div> : copySVG}
        </CustomButton>
      </div>
      <div className={divClassNames}>
        <span className={subClassNames}>Address: </span>
        <span className={detailClassNames}>
          123 Flagstaff House, Accra, Ghana
        </span>
      </div>
    </div>
  );
}
