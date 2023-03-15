import Input from "../Custom/Form/Input";
import Button from "../Custom/Form/Button";

const EmployeeLoginPage = (props: any) => {
  const handleLogin = async (e: any) => {
    e.preventDefault();

    const loginForm = new FormData();
    loginForm.append("username", e.target.email.value);
    loginForm.append("password", e.target.password.value);

    const response = await props.axios_instance.post(props.url, loginForm);
    console.log(document.cookie);
    console.log(response);
  };
  return (
    <>
      <div className="flex min-h-full flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-lg">
          <form
            action="#"
            method="POST"
            onSubmit={handleLogin}
          >
            <div className="shadow sm:overflow-hidden sm:rounded-md">
              <div className="space-y-6 bg-white py-6 px-4 sm:p-6">
                <div className="grid grid-cols-6 gap-6">
                  <Input
                    id="email"
                    placeholder="Email"
                    type="email"
                    class="col-span-6"
                  />
                  <Input
                    id="password"
                    placeholder="Password"
                    type="password"
                    class="col-span-6"
                  />
                </div>
              </div>

              <Button label="Login" />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default EmployeeLoginPage;
