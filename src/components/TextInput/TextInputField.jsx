import "./TextInput.css"
import { useState } from "react";

const TextInputField = (props) => {
  const [focused, setFocused] = useState(false);
  const { label, errorMessage, onChange, id, ...inputProps } = props;

  const handleFocus = (e) => {
    setFocused(true);
  };
  return (
    <div className="reTextInput">
    <label>{label}</label>
      <input
        {...inputProps}
        onChange={onChange}
        onBlur={handleFocus}
        // onFocus={() =>
        //   inputProps.name === "confirmPassword" && setFocused(true)
        // }
        focused={focused.toString()}
      />
      <span className="error-message">{errorMessage}</span>
    </div>
  );
};

export default TextInputField;
