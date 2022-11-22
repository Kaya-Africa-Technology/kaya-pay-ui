import {
  Typography,
  Grid,
  Paper,
  Box,
  TextField,
  Link,
  Button,
} from "@mui/material";

const Register = () => {
  return (
    <Grid container component="main" sx={{ height: "100vh" }}>
      <Grid
        item
        xs={false}
        sm={4}
        md={7}
        sx={{
          backgroundImage:
            "url(https://www.kionetworks.com/hubfs/ALCHEMYLABS/inteligencia-artificial5350463.webp)",
          backgroundRepeat: "no-repeat",
          backgroundColor: (t) =>
            t.palette.mode === "light"
              ? t.palette.grey[50]
              : t.palette.grey[900],
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      {/* <img src={signup } alt="signup"/> */}
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
          <Typography variant="h5" gutterBottom>
            Create an Account
          </Typography>
          <Typography variant="subtitle2" gutterBottom>
            Get started with <h1> KayaPay</h1>
          </Typography>
          <TextField
            margin="normal"
            required
            fullWidth
            type="name"
            id="name"
            label="Fullname"
            name="name"
            autoComplete="name"
            autoFocus
            variant="outlined"
          />
          <TextField
            margin="normal"
            required
            fullWidth
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
            fullWidth
            type="phone"
            id="phone"
            label="Phone number"
            name="Phone"
            autoComplete="Phone"
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
          />
          <TextField
            margin="normal"
            required
            type="password"
            fullWidth
            id="confirm-password"
            label=" Confirm password"
            name="comfirm-password"
            autoComplete="password"
            autoFocus
            variant="outlined"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2, backgroundColor: "#181c32" }}
          >
            REGISTER
          </Button>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2, backgroundColor: "#181c32" }}
          >
            Sign up with google
          </Button>

          <Grid container>
            <Grid item>
              <Link
                href="/login"
                underline="hover"
                variant="contained"
                fullWidth
              >
                Already have an account? sign-in
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Register;
