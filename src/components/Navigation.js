import React, { useContext, useState } from "react";
import classes from "./Navigation.module.css";
import { IoMoonOutline, IoSunnyOutline } from "react-icons/io5";
import ThemeContext from "../store/theme-context";

const Navigation = () => {
  const ctx = useContext(ThemeContext);
  const theme = ctx.theme;

  return (
    <header className={`${classes.header} ${classes[theme]}`}>
      <div className={classes.nav + " container"}>
        <h1>Where in the World?</h1>
        <button onClick={() => ctx.themeChange()}>
          {theme === "light" && <IoMoonOutline />}
          {theme === "dark" && <IoSunnyOutline />}
          <span>{theme === "light" ? "Dark" : "Light"} Mode</span>
        </button>
      </div>
    </header>
  );
};

export default Navigation;
