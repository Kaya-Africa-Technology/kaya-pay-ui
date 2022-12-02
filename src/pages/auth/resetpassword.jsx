import { Link } from "react-router-dom";
import SubmitButton from "../../Components/Shared/SubmitButton";
import TextInputField from "../../Components/Shared/TextInputField";

const ResetPassword = () => {
  return (
    <div className="flex h-screen">
      <div className="h-screen flex-1">
        <div className="my-5 flex items-center justify-center lg:absolute lg:top-5 lg:left-5">
          <img src="/kaya_logo.svg" alt="Kaya logo" className="w-18" />
        </div>
        <div className="flex h-screen items-center justify-center align-middle">
          <div className="w-4/5 rounded-md  px-10 py-10 shadow-sm md:w-1/2 md:bg-neutral-25/50 lg:w-1/3 lg:bg-neutral-25/50">
            <h2 className="mb-2 text-center text-2xl font-bold lg:text-3xl">
              Reset your Password
            </h2>
            <p className="mb-6 text-center text-sm text-neutral-60/90">
              Enter your Email Address to get a link to reset your Password
            </p>
            <form className="flex flex-col  content-between justify-between gap-y-4">
              <TextInputField
                label="Email Address"
                placeholder="Enter your Email Address"
              />
              <SubmitButton text="Send reset password link" type="submit" />
            </form>
            <p className="text-center">
              Remember your password?{" "}
              <Link className="link" to="/auth/login">
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
