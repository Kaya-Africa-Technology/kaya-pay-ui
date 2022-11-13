import { TextField } from "@mui/material";

const InputField = ({ type, id, label, name, placeholder }) => {
  return (
    <TextField
      margin="normal"
      required
      fullWidth
      type={type}
      id={id}
      label={label}
      name={name}
      placeholder={placeholder}
      autoComplete={type}
      variant="outlined"
    />
  );
};

export default InputField;
