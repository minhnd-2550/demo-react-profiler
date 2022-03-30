import React from "react";
import "./styles.css";

const Filter = ({ onValueUpdated }) => (
  <div className="form__group field">
    <input
      type="input"
      name={"filter"}
      className={"form__field"}
      placeholder={"filter"}
      id={"filter"}
      onChange={(event) => onValueUpdated(event.target.value)}
    />
    <label htmlFor="filter" className="form__label">
      Enter a number
    </label>
  </div>
);

export default Filter;
