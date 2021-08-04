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
  const [results, setResults] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!fetchData.date) {
      return;
    }
    const inputData = new Date(fetchData.date);
    inputData.setMonth(inputData.getMonth() + 1); //month later
    const startingDate = formatDate(fetchData.date);
    const endingDate = formatDate(inputData);
    fetch(endpoint(fetchData.country, startingDate, endingDate))
      .then((response) => response.json())
      .then((data) => setResults(data["result"]), setError(""))
      .catch((error) => {
        console.error("Error:", error);
        setError(`${error}`);
      });
  }, [fetchData]);
  return (
    <>
      <h1 className={classes.mainHeader}>Covid chart</h1>
      <Form setFetchData={fetchDataDispatch} />
      {error && (
        <p className={classes.error}>
          {error}
          <br />
          Make sure your <i>date</i> it's month ago from today.
        </p>
      )}
      {results && <Chart results={results} />}
    </>
  );
}

export default App;
