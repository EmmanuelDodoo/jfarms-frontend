import GetEmployees from "./GetEmployees";
import EmployeeLoginPage from "./LoginPage";
import EmployeeRegistrationPage from "./RegistrationPage";

const Employees = (props: any) => {
  return (
    <>
      <EmployeeRegistrationPage
        axios_instance={props.axios_instance}
        url={props.url}
      />
      <EmployeeLoginPage
        axios_instance={props.axios_instance}
        url={props.url + "login/"}
      />
      {/* <GetEmployees axios_instance={props.axios_instance} url={props.url} /> */}
    </>
  );
};

export default Employees;
