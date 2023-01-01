import React, { useState } from "react";

const ThemeContext = React.createContext({
  theme: "dark",
  themeChange: () => {},
});

export const ThemeContextProvider = (props) => {
  const [theme, setTheme] = useState("light");

  const themeChangeHandler = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, themeChange: themeChangeHandler }}>
      {props.children}
    </ThemeContext.Provider>
  );
};
export default ThemeContext;
