import React, { useState } from "react";

const useHttp = () => {
  const [countries, setCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchCountriesData = async (url) => {
    setIsLoading(true);

    try {
      const response = await fetch(url);

      if (!response.ok) throw new Error("Error in loading data");

      const data = await response.json();
      console.log(data);

      const transfromedData = data.map((country, i) => {
        return {
          id: i,
          name: country.name.common.toLowerCase(),
          population: new Intl.NumberFormat().format(country.population),
          region: country.region,
          subRegion: country.subregion,
          capital: country.capital,
          flag: country.flags.png,
          toplevelDomain: country.tld,
          languages: Object.values(country.languages || []),
          currency: Object.keys(country.currencies || []),
          borders: country.borders || false,
          nativeName: Object.values(country.name.nativeName || [])[0]?.common,
        };
      });
      setCountries(transfromedData);
    } catch (err) {
      console.log(err.message || "Something went wrong!");
    }
    setIsLoading(false);
  };

  return { isLoading, countries, fetchCountriesData };
};

export default useHttp;
