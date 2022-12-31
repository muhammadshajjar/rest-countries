import React, { useEffect, useState } from "react";
import Navigation from "./components/Navigation";
import "./App.css";
import Form from "./components/Form";
import Country from "./components/Country";
import Detail from "./components/Detail";
import useHttp from "./hooks/use-http";

const App = () => {
  const [specifcCountry, setSpecificCountry] = useState([]);
  const [isShow, setIsShow] = useState(false);
  const [search, setSearch] = useState([]);
  const [error, setError] = useState(false);

  const {
    isLoading,
    countries,
    fetchCountriesData: fetchCountriesDataHandler,
  } = useHttp();

  useEffect(() => {
    fetchCountriesDataHandler("https://restcountries.com/v3.1/all");
  }, []);

  const filterByRegionHandler = async (region) => {
    fetchCountriesDataHandler(
      `${`https://restcountries.com/v3.1/region/${region}`}`
    );
  };

  const searchCountryHandler = (name) => {
    setError(false);
    const searchCountries = countries.filter((c) => {
      return c.name.startsWith(name.toLowerCase());
    });

    console.log(searchCountries.length);

    if (searchCountries.length === 0) {
      console.log("here");
      setError(true);
    }
    setSearch(searchCountries);
  };
  const specificCountryHandler = (id) => {
    console.log(id);
    const countryData = countries.filter((item) => item.id === id);
    setSpecificCountry(countryData);
    setIsShow(true);
  };

  const countriesData = countries.map((item, i) => (
    <Country country={item} key={i} onClickCard={specificCountryHandler} />
  ));

  const serachResult = search.map((item, i) => (
    <Country country={item} key={i} onClickCard={specificCountryHandler} />
  ));

  const onBackHandler = () => {
    setIsShow(false);
  };

  return (
    <div className="app">
      <Navigation />
      <main className="main">
        {!isShow && (
          <Form
            onFilterData={filterByRegionHandler}
            onSearch={searchCountryHandler}
            onSearchCountry={searchCountryHandler}
          />
        )}
        {error && <p className="container error">No search result found!</p>}
        {isLoading && <p>Loading....</p>}
        {!isShow && (
          <ul className="countries container">
            {search.length > 0 && serachResult}
            {search.length === 0 && countriesData}
          </ul>
        )}

        {isShow && (
          <Detail
            onBack={onBackHandler}
            data={specifcCountry}
            key={specifcCountry.id}
          />
        )}
      </main>
    </div>
  );
};

export default App;
