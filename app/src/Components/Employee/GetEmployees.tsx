import { useState } from "react";

const GetEmployees = (props: any) => {
  const [employees, setEmployees] = useState({});

  const getEmployeesHandler = async () => {
    const response = await props.axios_instance.get(props.url);
    setEmployees(response.data);
  };

  return (
    <>
      <button onClick={getEmployeesHandler}>Get!</button>
      {employees}
    </>
  );
};

export default GetEmployees;
