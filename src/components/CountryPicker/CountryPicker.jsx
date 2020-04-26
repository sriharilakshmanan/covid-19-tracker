import React, { useEffect, useState } from "react";
import styles from "./CountryPicker.module.css";
import { NativeSelect, FormControl } from "@material-ui/core";
import { fetchCountryData } from "../../api";

const CountryPicker = ({ onCountryChangeHandler }) => {
  const [fetchedCountries, setFetchedCountries] = useState([]);

  useEffect(() => {
    const fetchAPIData = async () => {
      setFetchedCountries(await fetchCountryData());
    };

    fetchAPIData();
  }, [setFetchedCountries]);

  console.log(fetchedCountries);

  return (
    <FormControl className={styles.formControl}>
      <NativeSelect
        defaultValue=""
        onChange={(event) => onCountryChangeHandler(event.target.value)}
      >
        <option value="">Global</option>
        {fetchedCountries.map((country, i) => (
          <option key={i} value={country}>
            {country}
          </option>
        ))}
      </NativeSelect>
    </FormControl>
  );
};

export default CountryPicker;
