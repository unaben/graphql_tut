"use client";

import { useQuery } from "@apollo/client";
import styles from "./CountryList.module.css";
import {  COUNTRIES_QUERY, HELLO_QUERY } from "./utils";
import { CountryData } from "./CountryList.types";

const CountryList = () => {
 
  const {
    data: countryData,
    loading,
    error,
  } = useQuery<CountryData>(COUNTRIES_QUERY);

  console.log("countryData: ", countryData?.countries);


  if (loading) return <p>Loading...</p>;
  if (error) return `Error! ${error.message}`;


  const countries = countryData?.countries.slice(0, 20);

  return (
    <div className={styles.container}>
      <ul className={styles.grid}>
        {countries?.map((country) => (
          <li key={country.code} className={styles.card}>
            <h3>{country.name}</h3>
            <p>
              {country.code} - {country.emoji}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CountryList;
