import Input from "../Custom/Form/Input";
import Select from "../Custom/Form/Select";
import Button from "../Custom/Form/Button";
import Image from "next/image";

const EmployeeRegistrationPage = (props: any) => {
  const registerEmployeeHander = async (e: any) => {
    e.preventDefault();

    const data = {
      first_name: e.target.first_name.value,
      last_name: e.target.last_name.value,
      email: e.target.email.value,
      password: e.target.password.value,
      home_address: e.target.street_address.value,
      contact: e.target.phone_number.value,
    };

    const response = await props.axios_instance.post(props.url, data);
    console.log(response);
  };

  return (
    <>
      <div className="flex min-h-full flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <Image
            className="mx-auto h-12 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=green&shade=600"
            alt="Your Company"
            width={500}
            height={500}
          />
          <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
            New Employee
          </h2>
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-lg">
          <form
            action="#"
            method="POST"
            onSubmit={registerEmployeeHander}
          >
            <div className="shadow sm:overflow-hidden sm:rounded-md">
              <div className="space-y-6 bg-white py-6 px-4 sm:p-6">
                <div className="grid grid-cols-6 gap-6">
                  <Input
                    id="first_name"
                    placeholder="First name"
                    type="text"
                    class="col-span-6 sm:col-span-3"
                  />
                  <Input
                    id="last_name"
                    placeholder="Last name"
                    type="text"
                    class="col-span-6 sm:col-span-3"
                  />
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

                <hr />

                <div className="grid grid-cols-6 gap-6">
                  <Select
                    id="country"
                    options={["Ghana", "United States"]}
                    class="col-span-6 sm:col-span-3"
                  />
                  <Input
                    id="phone_number"
                    placeholder="Phone number"
                    type="phone_number"
                    class="col-span-6 sm:col-span-3"
                  />
                  <Input
                    id="street_address"
                    placeholder="Street Address"
                    type="street_address"
                    class="col-span-6"
                  />
                  <Input
                    id="city"
                    placeholder="City"
                    type="city"
                    class="col-span-6 sm:col-span-3"
                  />
                  <Input
                    id="region"
                    placeholder="Region"
                    type="region"
                    class="col-span-6 sm:col-span-3"
                  />
                </div>
              </div>

              <Button label="Register" />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default EmployeeRegistrationPage;
