import { useState } from "react";
import TextInputField from "../../components/TextInput/TextInputField";
import "./Login.css";

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
    <div className="login-form">
      <form onSubmit={handleSubmit}>
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

        <button
          className="bg-black-500 hover:bg-black-700 rounded py-2 px-4 font-bold text-white"
          type="submit"
        >
          Sign In
        </button>
      </form>
    </div>
  );
};

export default Login;
