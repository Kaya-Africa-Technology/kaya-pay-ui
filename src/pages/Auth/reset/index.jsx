import { Link } from "react-router-dom";
import TextInputField from "../../../components/shared/textinput/TextInputField";

const ResetPassword = () => {
  return (
    <section className="flex h-screen flex-col ">
      <img className="ml-10 mt-5 w-24" src="/kaya_logo.svg" alt="kaya logo" />
      <div className="flex h-screen items-center justify-center">
        <div className="rounded-md bg-neutral-25 px-40 py-10">
          <h2 className="mb-10 text-center font-lato text-2xl font-extrabold ">
            Reset your Password
          </h2>
          <form className="flex flex-col content-between justify-between">
            <TextInputField
              label="Email Address"
              placeholder="Enter your Email Address to get a link to reset your Password"
            />
            <button
              className="my-10 rounded-md bg-neutral-90 py-2 text-center font-roboto text-white"
              type="submit"
            >
              Send reset password link
            </button>
          </form>
          <p>
            Remember your password? <Link to="/auth/login">Login</Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default ResetPassword;
