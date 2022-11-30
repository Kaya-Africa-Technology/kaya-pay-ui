// import "./TextInput.css";
// import { useState } from "react";

const TextInputField = (props) => {
  // const [focused, setFocused] = useState(false);
  const {
    label,
    errorMessage,
    id,
    name,
    type,
    placeholder,
    required,
    isDisabled,
    isReadOnly,
  } = props;

  // const handleFocus = () => {
  //   setFocused(true);
  // };
  return (
    <div>
      <label htmlFor={id} className="text-lg font-medium">
        {label}
      </label>
      <input
        id={id}
        name={name}
        className="input"
        required={required}
        readOnly={isReadOnly}
        disabled={isDisabled}
        placeholder={placeholder}
        type={type}
      />
      {/* <input
        className="form-input"
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        pattern={pattern}
        onChange={onChange} */}
      {/* // onBlur={handleFocus}
        // focused={focused.toString()}
      /> */}
      <span className="error-message">{errorMessage}</span>
    </div>
  );
};

export default TextInputField;
