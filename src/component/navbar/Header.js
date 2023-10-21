import React from "react";
import { Box, Typography, Button, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  header: {
    boxShadow: "none",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 2,
  },
  title: {
    flexGrow: 1,
  },
  navigationLinks: {
    display: "flex",
    gap: 2,
  },
}));

const Header = () => {
  const classes = useStyles();

  return (
    <Box className={classes.header} component="header">
      <Box>
        <img src="/images/logo.png" alt="Logo" className={classes.logo} />
      </Box>

      <Box className={classes.navigationLinks}>
        <Button color="inherit">Home</Button>
        <Button color="inherit">About</Button>
        <Button color="inherit">Companies</Button>
        <Button color="inherit">Contact</Button>
      </Box>
    </Box>
  );
};

export default Header;
