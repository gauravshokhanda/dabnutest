import React from "react";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  Hero2: {
    display: "flex",
    justifyContent: "center",
    paddingLeft: "31px",
    paddingTop: "100px",
  },
  Hero2Images: {
    width: "623px",
    height: "391px",
    display: "contents",
  },
  Hero2Detail: {
    height: "70vh",
    width: "50%",
  },
  circleHero2: {
    height: "50%",
    width: "40%",
    backgroundImage: "linear-gradient(#0d004b, #0d004b)",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
    backgroundPosition: "center center",
    backgroundSize: "cover",
    borderRadius: "50%",
    boxShadow: "-3px -2px 20px 20px #0d004b",
  },
  imagesHero2: {
    margin: "3px",
    height: "45px",
    position: "relative",
    left: "452px",
    top: "268px",
    "&.images-digital-two": {
      left: "365px",
      top: "321px",
    },
    "&.images-digital-hub-ai": {
      height: "134px",
      marginBottom: "29px",
    },
  },
  Hero2DetailInner: {
    paddingTop: "52px",
    paddingLeft: "66px",
    height: "260px",
    width: "530px",
  },
  Hero2DetailInnerP: {
    color: "#cbbdbd",
    fontSize: "23px",
    fontFamily: "cursive",
  },
  Hero2DetailInnerSpanOne: {
    color: "white",
    fontSize: "62px",
    fontFamily: "sans-serif",
  },
  Hero2DetailInnerSpanTwo: {
    color: "#007FFF",
    fontSize: "62px",
    fontFamily: "sans-serif",
  },
  Hero2DetailInnerSpanP: {
    fontSize: "21px",
    color: "white",
    fontWeight: "lighter",
    lineHeight: "28px",
    marginTop: "5px",
  },
  buttonExplore: {
    border: "none",
    width: "213px",
    height: "76px",
    marginTop: "20px",
    borderRadius: "38px",
    background: "#007FFF",
  },
}));

function Hero2() {
  const classes = useStyles();

  return (
    <div className={classes.Hero2}>
      <img
        className={`images-digital-hub images-digital-one ${classes.imagesHero2}`}
        src="/Images/vector.svg"
        alt=""
      />
      <div className={classes.Hero2Images}>
        <img
          className={`images-digital-hub images-digital-two ${classes.imagesHero2}`}
          src="/Images/Capture.PNG"
          alt=""
        />
        <div className={classes.circleHero2}>
          <img
            className={`images-digital-hub images-digital-hub-ai ${classes.imagesHero2}`}
            src="/Images/AI.svg"
            alt=""
          />
          <img
            className={`images-digital-hub ${classes.imagesHero2}`}
            src="/Images/image 22.svg"
            alt=""
          />
          <img
            className={`images-digital-hub ${classes.imagesHero2}`}
            src="/Images/image 23.svg"
            alt=""
          />
          <img
            className={`images-digital-hub ${classes.imagesHero2}`}
            src="/Images/image 24.svg"
            alt=""
          />
          <img
            className={`images-digital-hub ${classes.imagesHero2}`}
            src="/Images/Rectangle 19.svg"
            alt=""
          />
          <img
            className={`images-digital-hub ${classes.imagesHero2}`}
            src="/Images/image 26.svg"
            alt=""
          />
        </div>
      </div>
      <div className={classes.Hero2Detail}>
        <div className={classes.Hero2DetailInner}>
          <p className={classes.Hero2DetailInnerP}>About Us</p>
          <h1>
            <span className={classes.Hero2DetailInnerSpanOne}>Digital </span>
            <span className={classes.Hero2DetailInnerSpanTwo}>AvatarHub</span>
          </h1>
          <p className={classes.Hero2DetailInnerSpanP}>
            A brief description of your mission and vision, emphasizing
            connecting users to the best digital avatar providers
          </p>
          <button className={classes.buttonExplore}>Explore Now</button>
        </div>
      </div>
    </div>
  );
}

export default Hero2;
