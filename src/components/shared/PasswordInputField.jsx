/* eslint-disable jsx-a11y/label-has-associated-control */
import { useState } from "react";
import { HiOutlineEyeOff, HiOutlineEye } from "react-icons/hi";

const PasswordInputField = () => {
  const [values, setValues] = useState({
    password: "",
    showPassword: false,
  });

  const toggleIconAndPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handlePasswordChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  return (
    <div className="w-full">
      <label htmlFor="password" className="text-lg font-medium">
        Password
      </label>
      <div className="flex w-full items-center">
        <input
          className="input pr-12"
          type={values.showPassword ? "text" : "password"}
          onChange={handlePasswordChange("password")}
          value={values.password}
          id="password"
          placeholder="Enter your password"
        />
        <button
          className="bg-transparent pointer -ml-10 border-none outline-none focus:border-none focus:outline-none"
          type="button"
          onClick={toggleIconAndPassword}
        >
          {values.showPassword ? (
            <HiOutlineEyeOff className="text-neutral-60/70" />
          ) : (
            <HiOutlineEye className="text-neutral-60/80" />
          )}
        </button>
      </div>
    </div>
  );
};

export default PasswordInputField;
