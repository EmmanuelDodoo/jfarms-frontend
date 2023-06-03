import CustomButton from "../Custom/Form/CustomButton";
import HorDivider from "../Custom/Util/Divider";
import EmploymentCard from "./EmploymentCard";
import PersonalCard from "./PersonalCard";

function jobCard() {
  return (
    <div className="py-4 px-3 gap-4 rounded-md shadow-md h-48 flex flex-col bg-white">
      <h3 className="text-slate-700 font-bold">Job details</h3>
      <div className=" inline-flex gap-2">
        <span className=" font-semibold text-slate-500">Role: </span>
        <span className="font-semibold text-slate-800">Intern</span>
      </div>
      <div className=" inline-flex gap-2">
        <span className=" font-semibold text-slate-500">Team: </span>{" "}
        <a
          href=""
          className="font-semibold hover:underline hover:decoration-rose-400 focus:outline-rose-400 text-slate-800"
        >
          Gari Squad
        </a>
      </div>
      <div className=" inline-flex gap-2">
        <span className=" font-semibold text-slate-500">Team lead: </span>
        <a
          href=""
          className="font-semibold hover:underline hover:decoration-rose-400 focus:outline-rose-400 text-slate-800 "
        >
          Cornelius Boateng
        </a>
      </div>
    </div>
  );
}

export default function AltDetails() {
  return (
    <div className="bg-sky-100 my-2 p-2 w-80 xs:w-11/12 flex xl:flex-row xs:flex-col justify-between gap-3">
      {jobCard()}
      <EmploymentCard />
      <PersonalCard />
      {jobCard()}
    </div>
  );
}
