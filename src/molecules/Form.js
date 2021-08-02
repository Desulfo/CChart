import React, { useRef } from "react";
import classes from "./form.module.css";

const today = new Date();
today.setDate(today.getDate());
const date = today.toISOString().substr(0, 10);

const initCountry = "DEU";

function Form({ setFetchData }) {
  const dateRef = useRef();
  const countryRef = useRef();
  const submitHandler = (e) => {
    e.preventDefault();
    setFetchData({
      date: dateRef.current.value,
      country: countryRef.current.value,
    });
  };
  return (
    <form onSubmit={submitHandler}>
      <fieldset>
        <label>
          date
          <input ref={dateRef} type="date" defaultValue={date} />
        </label>
        <label>
          country
          <select ref={countryRef} defaultValue={initCountry} list="country">
            <option value="POL">Poland</option>
            <option value="DEU">Germany</option>
          </select>
        </label>
      </fieldset>
      <input type="submit" />
    </form>
  );
}

export default Form;
