import EmploymentCard from "./EmploymentCard";
import PersonalCard from "./PersonalCard";

function jobCard() {
  return (
    <div className="py-4 px-3 gap-4 rounded-md shadow-md h-48 flex flex-col bg-white dark:bg-slate-600 text-slate-800 dark:text-slate-200">
      <h3 className="text-slate-700 dark:text-slate-200 font-bold">
        Job details
      </h3>
      <div className=" inline-flex gap-2 ">
        <span className=" font-semibold text-slate-500 dark:text-slate-300">
          Role:{" "}
        </span>
        <span className="font-semibold">Intern</span>
      </div>
      <div className=" inline-flex gap-2 ">
        <span className=" font-semibold text-slate-500 dark:text-slate-300">
          Team:{" "}
        </span>{" "}
        <a
          href=""
          className="font-semibold hover:underline hover:decoration-rose-400 focus:outline-rose-400 dark:text-slate-200"
        >
          Gari Squad
        </a>
      </div>
      <div className=" inline-flex gap-2  ">
        <span className=" font-semibold text-slate-500 dark:text-slate-300">
          Team lead:{" "}
        </span>
        <a
          href=""
          className="font-semibold hover:underline hover:decoration-rose-400 focus:outline-rose-400 "
        >
          Cornelius Boateng
        </a>
      </div>
    </div>
  );
}

export default function AltDetails() {
  return (
    <div className="bg-sky-100 dark:bg-slate-900 dark:text-slate-200 my-2 p-2 w-80 xs:w-11/12 flex xl:flex-row xs:flex-col justify-between gap-3">
      {jobCard()}
      <EmploymentCard />
      <PersonalCard />
      {jobCard()}
    </div>
  );
}
