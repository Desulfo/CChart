import React, { useState, useReducer, useEffect } from "react";

import classes from "./App.module.css";
import Form from "../molecules/Form";
import Chart from "../molecules/Chart";

const endpoint = (country, startingDate, endingDate) => {
  return `https://covidapi.info/api/v1/country/${country}/timeseries/${startingDate}/${endingDate}`;
};

const fetchDataReducer = (state, action) => {
  return {
    date: action.date,
    country: action.country,
  };
};
const formatDate = (date) => {
  var d = new Date(date),
    month = "" + (d.getMonth() + 1),
    day = "" + d.getDate(),
    year = d.getFullYear();

  if (month.length < 2) month = "0" + month;
  if (day.length < 2) day = "0" + day;

  return [year, month, day].join("-");
};

function App() {
  const [fetchData, fetchDataDispatch] = useReducer(fetchDataReducer, {
    date: "",
    country: "",
  });
  const [results, setResults] = useState({});

  useEffect(() => {
    const inputData = new Date(fetchData.date);
    inputData.setMonth(inputData.getMonth() + 1); //month later
    const startingDate = formatDate(fetchData.date);
    const endingDate = formatDate(inputData);
    console.log(endpoint(fetchData.country, startingDate, endingDate));
    console.log(
      "https://covidapi.info/api/v1/country/IND/timeseries/2020-03-15/2020-03-20"
    );
    fetch(endpoint(fetchData.country, startingDate, endingDate))
      .then((response) => response.json())
      .then((data) => setResults(data["result"]));
    // return () => {
    //   cleanup
    // }
  }, [fetchData]);
  return (
    <>
      <h1 className={classes.mainHeader}>Covid chart</h1>
      <Form setFetchData={fetchDataDispatch} />
      <Chart results={results} />
    </>
  );
}

export default App;
