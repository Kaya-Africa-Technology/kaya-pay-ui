import { useState } from "react";
import { Link } from "react-router-dom";
import TextInputField from "../../components/Shared/Textinput/TextInputField";

import AuthSideImage from "../../Components/Shared/AuthSideImage";
// import "./Login.css";

const Login = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const inputFields = [
    {
      id: 1,
      name: "email",
      type: "email",
      placeholder: "Enter email",
      label: "Email",
      errorMessage: "Email address is not valid",
      pattern:
        '^(([^<>()[].,;:s@"]+(.[^<>()[].,;:s@"]+)*)|(".+"))@(([^<>()[].,;:s@"]+.)+[^<>()[].,;:s@"]{2,})$/i',
      required: true,
    },
    {
      id: 2,
      name: "password",
      type: "password",
      placeholder: "Enter password",
      label: "Password",
      errorMessage:
        "Password must have a min of 8 characters, at least one uppercase letter, one lowercase letter, one number and one special character",
      pattern: "^(?=.*d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$",
      required: true,
    },
  ];

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  console.log(values);
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="flex h-screen bg-neutral-25">
      <div className="relative flex-1">
        <div className="absolute top-5 left-5">
          <img src="/kaya_logo.svg" alt="Kaya logo" className="w-18" />
        </div>
        <div className="flex h-screen items-center justify-center align-middle">
          <div className="flex w-11/12 flex-col space-y-6 md:w-3/5">
            <h2 className="mb-6 text-center text-3xl font-bold">
              Hi, Welcome back
            </h2>
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col gap-y-4">
                {inputFields.map((input) => (
                  <TextInputField
                    key={input.id}
                    label={input.label}
                    name={input.name}
                    type={input.type}
                    placeholder={input.placeholder}
                    required={input.required}
                    pattern={input.pattern}
                    value={values[input.name]}
                    onChange={onChange}
                  />
                ))}
                <p className="text-right">
                  <Link
                    className=" text-right font-lato font-normal text-neutral-60 underline-offset-4 hover:underline"
                    to="/auth/resetpassword"
                  >
                    Forgot your password?
                  </Link>
                </p>
                <button className="btn-primary w-full" type="submit">
                  Login
                </button>
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
