import React, { useContext, useState } from "react";
import classes from "./Form.module.css";
import { IoSearchOutline } from "react-icons/io5";
import ThemeContext from "../store/theme-context";

const Form = (props) => {
  const [countryName, setCountryName] = useState("");

  const { theme } = useContext(ThemeContext);

  const filterHandler = (e) => {
    props.onFilterData(e.target.value);
  };
  const searchInputHandler = (e) => {
    setCountryName(e.target.value);
    props.onSearchCountry(e.target.value);
  };
  const submitSearchHandler = (e) => {
    e.preventDefault();
    props.onSearchCountry(countryName);
    setCountryName("");
  };
  return (
    <section className={classes.form + " container " + `${classes[theme]}`}>
      <form className={classes.search} onSubmit={submitSearchHandler}>
        <input
          type="text"
          placeholder="Search for a country...."
          onChange={searchInputHandler}
          value={countryName}
        />
        <span>
          <IoSearchOutline />
        </span>
      </form>
      <div className={classes.filter}>
        <select name="filter" id="filter" onChange={filterHandler}>
          <option value="" hidden>
            Filter by Region
          </option>
          <option value="Africa">Africa</option>
          <option value="America">America</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
      </div>
    </section>
  );
};

export default Form;
