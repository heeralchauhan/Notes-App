import React from "react";
import { AppBar, Toolbar, makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  header: {
    backgroundColor: "#ccc8c85e",
    position: "relative",
    marginBottom: "5px",
  },
  textColor: {
    color: "black",
  },
}));
const Header = () => {
  const { header, textColor } = useStyles();
  const displayDesktop = () => {
    return (
      <Toolbar className={textColor}>
        <h2>My Notes</h2>
      </Toolbar>
    );
  };
  return (
    <header>
      <AppBar className={header}>{displayDesktop()}</AppBar>
    </header>
  );
};

export default Header;
