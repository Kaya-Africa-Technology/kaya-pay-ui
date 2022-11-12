import { Typography, Grid, Paper, Box, TextField, Link, Button } from "@mui/material";

const Login = () => {
  return (
    <Grid container component="main" sx={{ height: "100vh" }}>
      <Grid
        item
        xs={false}
        sm={4}
        md={7}
        sx={{
          backgroundImage: "url(https://kayaafrica.co/wp-content/uploads/2019/06/kayamoves-bg.jpg)",
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
            margin: "0 1.5rem"
          }}
        >
          <Typography variant="h5" gutterBottom>Welcome to KAYAPAY</Typography>
          <Typography variant="subtitle2" gutterBottom>Kindly input your details</Typography>
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
            variant="outlined" />
          
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
            variant="outlined" />
          <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2, backgroundColor: "#181c32" }}
              >
                Sign In
              </Button>
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
        </Box>
      </Grid>
    </Grid>
  );
};

export default Login;
