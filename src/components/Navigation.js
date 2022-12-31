import React from "react";
import classes from "./Navigation.module.css";
import { IoMoonOutline, IoSunnyOutline } from "react-icons/io5";

const Navigation = () => {
  return (
    <header className={classes.header}>
      <div className={classes.nav + " container"}>
        <h1>Where in the World?</h1>
        <button>
          <IoMoonOutline />
          <IoSunnyOutline />
          <span>Dark Mode</span>
        </button>
      </div>
    </header>
  );
};

export default Navigation;
