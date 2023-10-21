import React from "react";
import {
  Box,
  Card,
  Grid,
  Typography,
  Button,
  Stack,
  IconButton,
  FormControl,
  OutlinedInput,
  InputAdornment,
  FormHelperText,
  TextareaAutosize,
  TextField,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import CallIcon from "@mui/icons-material/Call";
import MailIcon from "@mui/icons-material/Mail";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import PersonIcon from "@mui/icons-material/Person";
import MessageIcon from "@mui/icons-material/Message";

const About = () => {
  return (
    <Card
      sx={{
        m: 25,
        bgcolor: "#007FFF",
        xs: {
          m: 0,
        },
        // sm: {
        //   m: 20,
        // },
        // md: {
        //   m: 20,
        // },
      }}
    >
      <Grid container sx={{ padding: 10, mr: 10 }}>
        <Grid item xs={12} sm={6} md={6}>
          <Box>
            <Typography
              variant="h5"
              color="white"
              sx={{ textAlign: "left", mt: 2 }}
            >
              Contact us
            </Typography>
            <Typography
              variant="h3"
              color="white"
              sx={{ textAlign: "left", mt: 4 }}
            >
              Get in Touch
            </Typography>
            <Typography
              variant="h5"
              color="white"
              sx={{ textAlign: "left", mt: 3 }}
            >
              Fill up the form, and our team will get back to you within 24
              hours
            </Typography>
          </Box>
          <Box sx={{ mt: 3 }}>
            <Stack direction="column" spacing={2} alignItems="flex-start">
              <Button
                variant="text"
                sx={{
                  color: "white",
                  backgroundColor: "#007FFF",
                  textTransform: "lowercase",
                  elevation: 0,
                }}
                startIcon={<CallIcon />}
              >
                <Typography
                  variant="body1"
                  color="white"
                  sx={{ textAlign: "left", mt: 1, letterSpacing: "1px" }}
                >
                  +123465890
                </Typography>
              </Button>
              <Button
                variant="contained"
                sx={{
                  color: "white",
                  backgroundColor: "#2F96FF",
                  textTransform: "lowercase",
                  elevation: 0,
                }}
                startIcon={<MailIcon />}
              >
                <Typography
                  variant="body1"
                  color="white"
                  sx={{ textAlign: "left", mt: 1, letterSpacing: "1px" }}
                >
                  abc@gmail.com
                </Typography>
              </Button>
              <Button
                variant="text"
                sx={{
                  color: "white",
                  backgroundColor: "#007FFF",
                  textTransform: "lowercase",
                  elevation: 0,
                }}
                startIcon={<LocationOnIcon />}
              >
                <Typography
                  variant="body1"
                  color="white"
                  sx={{ textAlign: "left", mt: 1, letterSpacing: "1px" }}
                >
                  1202 Street 27145 Town
                </Typography>
              </Button>
            </Stack>
          </Box>
          <Box sx={{ mt: 3 }}>
            <Stack direction="row" spacing={2} alignItems="flex-start">
              <IconButton
                aria-label="Facebook"
                sx={{ color: "white", fontSize: "32px" }}
              >
                <FacebookIcon />
              </IconButton>
              <IconButton
                aria-label="Twitter"
                sx={{
                  backgroundColor: "white",
                  color: "blue",
                  fontSize: "32px",
                }}
              >
                <TwitterIcon />
              </IconButton>
              <IconButton
                aria-label="Instagram"
                sx={{ color: "white", fontSize: "32px" }}
              >
                <InstagramIcon />
              </IconButton>
            </Stack>
          </Box>
        </Grid>

        <Grid
          item
          xs={12}
          sm={6}
          md={6}
          sx={{ borderRadius: 2 }}
          bgcolor="white"
        >
          <Stack
            direction="column"
            spacing={2}
            sx={{ m: 3, padding: 2 }}
            alignItems="flex-start"
          >
            <FormControl sx={{ m: 0, width: "90%" }} variant="outlined">
              <FormHelperText id="outlined-name-helper-text">
                <Typography
                  variant="h6"
                  sx={{ textAlign: "left", letterSpacing: "1px" }}
                >
                  Name
                </Typography>
              </FormHelperText>
              <OutlinedInput
                id="outlined-adornment-name"
                startAdornment={
                  <InputAdornment position="start">
                    <PersonIcon sx={{ color: "#007FFF" }} />
                  </InputAdornment>
                }
                aria-describedby="outlined-name-helper-text"
                inputProps={{
                  "aria-label": "name",
                }}
                onFocus={(e) => (e.target.style.color = "#007FFF")}
                onBlur={(e) => (e.target.style.color = "grey")}
              />
            </FormControl>

            <FormControl sx={{ m: 1, width: "90%" }} variant="outlined">
              <FormHelperText id="outlined-email-helper-text">
                <Typography
                  variant="h6"
                  sx={{ textAlign: "left", letterSpacing: "1px" }}
                >
                  Email
                </Typography>
              </FormHelperText>
              <OutlinedInput
                id="outlined-adornment-email"
                startAdornment={
                  <InputAdornment position="start">
                    <MailIcon sx={{ color: "#007FFF" }} />
                  </InputAdornment>
                }
                aria-describedby="outlined-email-helper-text"
                inputProps={{
                  "aria-label": "email",
                }}
                onFocus={(e) => (e.target.style.color = "blue")}
                onBlur={(e) => (e.target.style.color = "grey")}
              />
            </FormControl>

            <FormControl sx={{ m: 1, width: "90%" }} variant="outlined">
              <FormHelperText id="outlined-message-helper-text">
                <Typography
                  variant="h6"
                  sx={{ textAlign: "left", letterSpacing: "1px" }}
                >
                  Message
                </Typography>
              </FormHelperText>
              <TextField
                id="standard-multiline-static"
                multiline
                rows={4}
                variant="outlined"
                placeholder="message"
              />
            </FormControl>
            <Button
              variant="contained"
              sx={{
                mt: 2,
                p: 2,
                width: 200,
                borderRadius: "65px",
                backgroundcolor: "#007FFF",
                textTransform: "unset",
              }}
            >
              Send Message
            </Button>
          </Stack>
        </Grid>
      </Grid>
    </Card>
  );
};

export default About;
