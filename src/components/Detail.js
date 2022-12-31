import React from "react";
import classes from "./Detail.module.css";
import { IoArrowBackSharp } from "react-icons/io5";

const Detail = (props) => {
  const country = props.data[0];

  let borders = country.borders ? (
    country.borders.map((name) => <li>{name}</li>)
  ) : (
    <p>No Neighbouring Countries! </p>
  );

  return (
    <section className={classes.detail + " container"}>
      <div className={classes.detail__btn}>
        <button onClick={() => props.onBack()}>
          <IoArrowBackSharp />
          Back
        </button>
      </div>
      <div className={classes.detail__desc}>
        <div className={classes[`detail__desc--flag`]}>
          <img src={country.flag} alt={`${country.name} flag`} />
        </div>
        <div className={classes[`detail__desc--info`]}>
          <h1>{country.name}</h1>
          <div className={classes.desc__list}>
            <div className={classes[`desc__list--left`]}>
              <p>
                <span>Native Name: </span> {country.nativeName}
              </p>
              <p>
                <span>Popluation: </span>
                {country.population}
              </p>
              <p>
                <span>Region: </span>
                {country.region}
              </p>
              <p>
                <span>Sub Region: </span>
                {country.subRegion}
              </p>
              <p>
                <span>Capital: </span>
                {country.capital}
              </p>
            </div>
            <div className={classes[`desc__list--right`]}>
              <p>
                <span>Top Level Domain: </span>
                {country.toplevelDomain}
              </p>
              <p>
                <span>Currencies: </span>
                {country.currency}
              </p>
              <p>
                <span>Languages: </span>
                {country.languages.join(", ")}
              </p>
            </div>
          </div>

          <div className={classes.detail__borders}>
            <h3>Border Countries: </h3>
            <ul className={classes.borders__count}>{borders}</ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Detail;
