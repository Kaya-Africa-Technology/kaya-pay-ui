import "./TextInput.css";
// import { useState } from "react";

const TextInputField = (props) => {
  // const [focused, setFocused] = useState(false);
  const {
    label,
    errorMessage,
    onChange,
    id,
    name,
    type,
    placeholder,
    required,
    pattern,
  } = props;

  // const handleFocus = () => {
  //   setFocused(true);
  // };
  return (
    <div className="reTextInput flex flex-col">
      <label htmlFor={id} className="text-xs">
        {label}
      </label>
      <input
        className="form-input"
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        pattern={pattern}
        onChange={onChange}
        // onBlur={handleFocus}
        // focused={focused.toString()}
      />
      <span className="error-message">{errorMessage}</span>
    </div>
  );
};

export default TextInputField;
