import axios from "axios";
import Employees from "../Employee/Employees";

const axios_instance = axios.create({
  baseURL: "http://localhost:8000/jfarms",
  withCredentials: true,
});

const Main = () => {
  return (
    <>
      <Employees
        axios_instance={axios_instance}
        url="/employees/"
      ></Employees>
    </>
  );
};

export default Main;
