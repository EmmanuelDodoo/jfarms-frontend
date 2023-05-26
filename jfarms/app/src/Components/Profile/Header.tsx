import Image from "next/image";
import HorDivider from "../Custom/Util/Divider";
import CircleAvatar from "./CircleAvatar";

export default function ProfileHeader() {
  const imageSource =
    "https://images.unsplash.com/photo-1534597422092-8a84f1b45a9c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80";

  return (
    <div className=" bg-white rounded-md shadow-lg my-2 px-2 w-80 xs:w-11/12 lg:w-1/5">
      <div className="flex justify-center my-2">
        <CircleAvatar
          src={imageSource}
          alt="Profile Image"
        />
      </div>
      <h2 className=" font-semibold my-1 text-lg text-center">Jane Doe</h2>
      <h4 className=" font-semibol text-blue-500 text-center">
        Some title for this employee
      </h4>
      <p className="line-clamp-5 my-3 xs:my-1 xs:line-clamp-3 lg:line-clamp-10 xl:line-clamp-15">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat maxime
        quae molestiae vel nostrum tempore quasi repellendus et praesentium
        dolore. Id perspiciatis omnis obcaecati quia repellat necessitatibus,
        alias delectus eos. Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Repellat maxime quae molestiae vel nostrum tempore quasi
        repellendus et praesentium dolore. Id perspiciatis omnis obcaecati quia
        repellat necessitatibus, alias delectus eos. Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Repellat maxime quae molestiae vel nostrum
        tempore quasi repellendus et praesentium dolore. Id perspiciatis omnis
        obcaecati quia repellat necessitatibus, alias delectus eos.
      </p>
      <div className=" bg-slate-100 rounded-md p-1 my-2">
        <div className="flex justify-around my-2">
          Member since <span>March 6, 1957</span>
        </div>
        <HorDivider />
        <div className="flex justify-around my-2">
          Extra here?{" "}
          <span className="bg-green-400 rounded-md px-1 h-fit">Maybe</span>
        </div>
      </div>
    </div>
  );
}
