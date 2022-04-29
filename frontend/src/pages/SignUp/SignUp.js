import * as React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import { Link } from "react-router-dom";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "./SignUp.scss";

const theme = createTheme();

export default function SignUp() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    var requestOptions = {
      method: 'POST',
      body: data,
      redirect: 'follow'
    };
    
    fetch("http://omshukla.pythonanywhere.com/accounts/register/", requestOptions)
      .then(response => response.json())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
  };

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />
        <Grid
          item
          xs={12}
          sm={12}
          md={6}
          component={Paper}
          elevation={6}
          square
          style={{ backgroundColor: "#151C20" }}
        >
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            {/* <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar> */}
            <div className="signup">
              <Typography
                component="h1"
                variant="h4"
                style={{ fontFamily: "Poppins" }}
              >
                Signup
              </Typography>
              <Box
                component="form"
                noValidate
                onSubmit={handleSubmit}
                sx={{ mt: 1 }}
              >
                <Typography
                  component="h1"
                  variant="h6"
                  style={{ fontFamily: "Poppins" }}
                >
                  Email
                </Typography>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  // label="Email"
                  placeholder="Email"
                  name="email"
                  autoComplete="email"
                  autoFocus
                  style={{ backgroundColor: "white" }}
                />
                <Typography
                  component="h1"
                  variant="h6"
                  style={{ fontFamily: "Poppins" }}
                >
                  Password
                </Typography>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  placeholder="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  style={{ backgroundColor: "white" }}
                />
                {/* <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              /> */}
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{
                    mt: 3,
                    mb: 2,
                    color: "#151C20",
                    "&:hover": {
                      backgroundColor: "#FFC800",
                    },
                  }}
                >
                  Create an account
                </Button>
                <Grid container>
                  {/* <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid> */}
                  <Grid item>
                    <Link
                      to="/login"
                      variant="body2"
                      style={{ color: "white", fontFamily: "Poppins" }}
                    >
                      {"Already have an account? Login"}
                    </Link>
                  </Grid>
                </Grid>
                {/* <Copyright sx={{ mt: 5 }} /> */}
              </Box>
            </div>
          </Box>
        </Grid>
        <Grid
          item
          xs={false}
          sm={4}
          md={6}
          sx={{
            backgroundImage: "url(https://source.unsplash.com/random)",
            backgroundRepeat: "no-repeat",
            backgroundColor: (t) =>
              t.palette.mode === "light"
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      </Grid>
    </ThemeProvider>
  );
}