export default function Details() {
  return (
    <div className="bg-slate-100 rounded-md shadow-lg my-2 px-5 flex flex-col xs:w-11/12 lg:w-4/5">
      <h2 className=" text-lg font-semibold my-3">About</h2>
      <div className="my-8 grid xs:grid-cols-2 lg:grid-cols-4 gap-x-2 gap-y-10">
        <h3 className=" font-medium text-slate-500">First name</h3>
        <p>Jane</p>
        <h3 className=" font-medium  text-slate-500">Last name</h3>
        <p>Doe</p>
        <h3 className=" font-medium  text-slate-500">Gender</h3>
        <p>Female</p>
        <h3 className=" font-medium  text-slate-500">Contact No.</h3>
        <p>000 000 0000</p>
        <h3 className=" font-medium  text-slate-500">Address</h3>
        <p>123 Flagstaff House</p>
        <h3 className=" font-medium  text-slate-500">Email</h3>
        <p>jdo@gmail.com</p>
      </div>
    </div>
  );
}

{/* <h3 className=" font-medium  text-slate-500">Position</h3>
<p>Common floor memeber</p> */}