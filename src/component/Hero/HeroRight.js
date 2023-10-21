import React from "react";
import { makeStyles } from "@mui/styles";
import { Box, Container, Grid, Image, img, Typography } from "@mui/material";

const useStyles = makeStyles((theme) => ({
  containerRight: {
    minWidth: "50%",
    backgroundImage: `url(${process.env.PUBLIC_URL}/Images/group22.svg)`,
    backgroundRepeat: "no-repeat",
  },
  imagesHub: {
    minHeight: "600px",
    minWidth: "400px",
    marginTop: "134px",
    marginLeft: "62px",
    display: "flex",
    paddingRight: "25px",
    marginRight: "-2px",
  },
  imageSection: {
    width: "25%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  imageProfile: {
    width: "186px",
    height: "186px",
    borderRadius: "10px",
  },
}));

function HeroRight() {
  const classes = useStyles();

  return (
    <Container className={classes.containerRight}>
      <div className={classes.imagesHub}>
        <div className={classes.imageSection}>
          <img
            src="/images/pic-one.svg"
            className={classes.imageProfile}
            alt="Profile Image 1"
          />
          <img
            src="/images/pic-two.svg"
            className={classes.imageProfile}
            alt="Profile Image 2"
          />
        </div>
        <div className={classes.imageSection}>
          <img
            src="/images/pic-three.svg"
            className={classes.imageProfile}
            alt="Profile Image 3"
          />
          <img
            src="/images/pic-four.svg"
            className={classes.imageProfile}
            alt="Profile Image 4"
          />
          <img
            src="/images/pic-five.svg"
            className={classes.imageProfile}
            alt="Profile Image 5"
          />
        </div>
        <div className={classes.imageSection}>
          <img
            src="/images/pic-six.svg"
            className={classes.imageProfile}
            alt="Profile Image 6"
          />
          <img
            src="./images/pic-seven.svg"
            className={classes.imageProfile}
            alt="Profile Image 7"
          />
        </div>
      </div>
    </Container>
  );
}

export default HeroRight;
