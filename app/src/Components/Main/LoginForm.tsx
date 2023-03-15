import { AxiosInstance } from "axios";

const LoginForm = (props: any) => {
  const loginHandler = async (e: any) => {
    e.preventDefault();

    try {
      const response = await props.axios_instance.post(
        props.login_url,
        e.target
      );
      localStorage.setItem("accessToken", response?.data.access_token);
      props.setAccessToken(response?.data.access_token);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  const googleLoginHandler = async (e: any) => {
    try {
      const response = await props.axios_instance.get(
        "/clients/login/google",
        e.target
      );
      // localStorage.setItem("accessToken", response?.data.access_token)
      // props.setAccessToken(response?.data.access_token)
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div>
        <button onClick={googleLoginHandler}>Google Login</button>
      </div>

      <div className="container">
        <form onSubmit={loginHandler}>
          <input
            type="email"
            name="username"
            placeholder="email"
          />
          <input
            type="password"
            name="password"
            placeholder="password"
          />

          <button>Click</button>
        </form>
      </div>
    </>
  );
};

export default LoginForm;
