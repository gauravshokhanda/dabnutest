import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  welcomeIntro: {
    display: "flex",
    flexDirection: "column",
    alignItems: "start", // Align content to the left
    marginTop: "180px",
    marginLeft: "120px",
    color: "white",
  },
  welcomeHeadingOne: {
    fontSize: "66px",
    fontWeight: 700,
    lineHeight: "86px",
  },
  welcomeHeadingTwo: {
    fontSize: "66px",
    fontWeight: 700,
    lineHeight: "86px",
    color: "#007FFF",
    width: "550px",
  },
  welcomeDetail: {
    fontFamily: "Roboto",
    fontSize: "18px",
    fontWeight: 400,
    lineHeight: "28px",
    width: "550px",
  },
  buttonExplore: {
    width: "213px",
    height: "76px",
    border: "none",
    marginTop: "27px",
    borderRadius: "38px",
    background: "#007FFF",
  },
}));

function HeroLeft() {
  const classes = useStyles();

  return (
    <Box className={classes.welcomeIntro}>
      <Typography variant="h2" className={classes.welcomeHeadingOne}>
        Welcome To
      </Typography>
      <Typography variant="h2" className={classes.welcomeHeadingTwo}>
        Digital AvatarHub
      </Typography>
      <Typography variant="p" className={classes.welcomeDetail}>
        Discover top companies offering cutting-edge digital avatar solutions
      </Typography>
      <Button
        variant="contained"
        className={classes.buttonExplore}
        // component={Link}
        to="/explore"
      >
        Explore Now
      </Button>
    </Box>
  );
}

export default HeroLeft;
