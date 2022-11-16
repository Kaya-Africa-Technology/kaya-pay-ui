import {
  Typography,
  Grid,
  Paper,
  Box,
  Link,
  Button,
} from "@mui/material";
import { useState } from "react";
import TextInputField from "../../components/TextInput/TextInputField";
import "./Login.css"

const Login = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
  })
  
  const inputFields = [
    {
      id: 1,
      name: "email",
      type: "email",
      placeholder: "Enter email",
      label: "Email",
      errorMessage: "Email address is not valid",
      pattern: "^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i",
      required: true,
   },
    {
      id: 2,
      name: "password",
      type: "password",
      placeholder: "Enter password",
      label: "Password",
      errorMessage: "Password must have a min of 8 characters, at least one uppercase letter, one lowercase letter, one number and one special character",
      pattern: "^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$",
      required: true
   },
  ] 
  
  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  }
  console.log(values)
const handleSubmit = (e) => {
  e.preventDefault()
}

  return (
    <Grid container component="main" sx={{ height: "100vh" }}>
      <Grid
        item
        xs={false}
        sm={4}
        md={7}
        sx={{
          backgroundImage:
            "url(https://kayaafrica.co/wp-content/uploads/2019/06/kayamoves-bg.jpg)",
          backgroundRepeat: "no-repeat",
          backgroundColor: (t) =>
            t.palette.mode === "light"
              ? t.palette.grey[50]
              : t.palette.grey[900],
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></Grid>
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            height: "100vh",
            margin: "0 1.5rem",
          }}
        >
          <Typography
            variant="h5"
            align="left"
            gutterBottom
            sx={{ fontWeight: "600" }}
            >
            Welcome to KAYAPAY
          </Typography>
          <Typography variant="subtitle2" gutterBottom>
            Kindly input your details
          </Typography>

          <div className="login-form">
          <form >
            {inputFields.map(input => (
              <TextInputField
              key={input.id}
              {...input}
              value={values[input.name]}
              onChange={onChange}
              />
            ))}
            {/* <TextInputField
              margin="normal"
              required
              fullWidth
              error={true}
              type="email"
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              variant="outlined"
            />

            <TextField
              margin="normal"
              required
              type="password"
              fullWidth
              id="password"
              label="password"
              name="password"
              autoComplete="password"
              autoFocus
              variant="outlined"
            /> */}

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2, backgroundColor: "#181c32" }}
            >
              Sign In
            </Button>
          </form>
          <Grid container>
            <Grid item xs>
              <Link href="#" underline="hover" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="#" underline="hover" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
            </Grid>
            </div>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Login;
