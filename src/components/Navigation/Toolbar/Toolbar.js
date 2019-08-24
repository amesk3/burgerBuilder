import React from "react";
import classes from "./Toolbar.css";
import Logo from "../../Logo/Logo";

const toolbar = () => (
  <div>
    <header className={classes.Toolbar}>
      <div>MENU</div>
      <Logo />
    </header>
  </div>
);

export default toolbar;
