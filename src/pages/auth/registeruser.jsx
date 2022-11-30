import { Link } from "react-router-dom";
import AuthSideImage from "../../Components/Shared/AuthSideImage";
import SubmitButton from "../../Components/Shared/SubmitButton";
import TextInputField from "../../Components/Shared/TextInputField";

const RegisterUser = () => {
  return (
    <div className="flex h-screen lg:overflow-hidden lg:bg-neutral-25">
      <div className="h-screen flex-1">
        <div className="my-5 flex items-center justify-center lg:absolute lg:top-5 lg:left-5">
          <img src="/kaya_logo.svg" alt="Kaya logo" className="w-18" />
        </div>
        <div className="flex h-screen items-center justify-center align-middle">
          <div className="flex w-11/12 flex-col space-y-6 md:w-3/5">
            <h2 className="text-center text-3xl font-bold">Sign Up</h2>
            <p className="text-center">Start your journey with us.</p>
            <div className="login-form">
              <form className="flex flex-col gap-y-4">
                <div className="flex flex-col justify-center space-y-0 lg:flex-row lg:items-center lg:space-x-5 lg:space-y-0">
                  <TextInputField
                    name="FirstName"
                    id="firstName"
                    placeholder="Enter your first name"
                    type="text"
                    label="First Name"
                    cut
                  />
                  <TextInputField
                    name="lastName"
                    id="lastName"
                    placeholder="Enter your last name"
                    type="text"
                    label="Last Name"
                  />
                </div>
                <TextInputField
                  name="email"
                  id="email"
                  placeholder="Enter your email Address"
                  type="email"
                  label="Email Address"
                />
                <TextInputField
                  name="password"
                  id="password"
                  type="password"
                  label="Password"
                />
                <p className="text-left text-xs">
                  by clicking sign up you agree to the terms and conditions
                </p>
                <SubmitButton text="Sign up" type="submit" />
              </form>
              <p className="text-center">
                Already have an account?{" "}
                <Link className="link" to="/auth/login">
                  Sign in
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
      <AuthSideImage
        image="/images/truck2.jpg"
        text="We provide exceptional customer experience with hassle-free booking, real-tracking and automated dispatch."
      />
    </div>
  );
};

export default RegisterUser;
