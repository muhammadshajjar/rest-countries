import React from "react";
import classes from "./Country.module.css";

const Country = (props) => {
  const country = props.country;
  return (
    <li className={classes.card} onClick={() => props.onClickCard(country.id)}>
      <div className={classes.card__flag}>
        <img src={country.flag} alt={`${country.name} flag`} />
      </div>
      <div className={classes.card__desc}>
        <h2>{country.name}</h2>
        <div>
          <p>
            <span>Popluation: </span>
            {country.population}
          </p>
          <p>
            <span>Region: </span> {country.region}
          </p>
          <p>
            <span>Capital: </span>
            {country.capital}
          </p>
        </div>
      </div>
    </li>
  );
};

export default Country;
