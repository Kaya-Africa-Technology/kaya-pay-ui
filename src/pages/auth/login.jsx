import { useState } from "react";
import { Link } from "react-router-dom";
import TextInputField from "../../Components/Shared/TextInputField";

import AuthSideImage from "../../Components/Shared/AuthSideImage";
import SubmitButton from "../../Components/Shared/SubmitButton";
import PasswordInputField from "../../Components/Shared/PasswordInputField";
// import "./Login.css";

const Login = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  console.log(values);
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="flex h-screen lg:bg-neutral-25">
      <div className="h-screen flex-1">
        <div className="my-5 flex items-center justify-center lg:absolute lg:top-5 lg:left-5">
          <img src="/kaya_logo.svg" alt="Kaya logo" className="w-18" />
        </div>
        <div className="flex h-screen items-center justify-center align-middle">
          <div className="flex w-11/12 flex-col space-y-6 md:w-3/5">
            <h2 className="mb-6 text-center text-3xl font-bold">
              Hi, Welcome back
            </h2>
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col gap-y-4">
                <TextInputField
                  name="email"
                  id="email"
                  placeholder="Enter your email Address"
                  type="email"
                  label="Email Address"
                  onChange={onChange}
                />
                <PasswordInputField />

                <p className="text-right">
                  <Link
                    className="text-right font-lato font-normal text-neutral-60 underline-offset-4 hover:underline"
                    to="/auth/resetpassword"
                  >
                    Forgot your password?
                  </Link>
                </p>
                <SubmitButton text="Sign In" type="submit" />
              </div>
            </form>
            <p className="text-center">
              Don’t have an account?{" "}
              <Link className="link" to="/auth/register">
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </div>
      <AuthSideImage
        image="/images/truck.jpg"
        text="We provide exceptional customer experience with hassle-free booking, real-tracking and automated dispatch."
      />
    </div>
  );
};

export default Login;
