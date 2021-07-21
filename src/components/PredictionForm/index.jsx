/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import axios from "axios";
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from "prop-types";

// eslint-disable-next-line react/prop-types
const PredictionForm = ({ childToParent }) => {
  const [data, setData] = useState({
    PassengerId: 343,
    Pclass: 2,
    Name: "Collander, Mr. Erik Gustaf",
    Sex: "male",
    Age: 28.0,
    SibSp: 0,
    Parch: 0,
    Ticket: "248740",
    Fare: 13.0,
    Cabin: "PC52",
    Embarked: "S",
  });
  const handleChange = (key, value) => {
    setData((obj) => ({
      ...obj,
      [key]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    childToParent("loading");
    setTimeout(() => {
      axios
        .post("https://mytitanicapipred.herokuapp.com/predict", data)
        .then((res) => {
          console.log(res);
          childToParent(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }, 3000);
  };

  return (
    <form className="block">
      <input
        placeholder="Pclass"
        type="text"
        defaultValue={data.Pclass}
        onChange={(e) => {
          e.preventDefault();
          handleChange("Pclass", e.target.value);
        }}
      />
      <input
        placeholder="Name"
        type="text"
        defaultValue={data.Name}
        onChange={(e) => {
          e.preventDefault();
          handleChange("Name", e.target.value);
        }}
      />
      <input
        placeholder="Sex"
        type="text"
        defaultValue={data.Sex}
        onChange={(e) => {
          e.preventDefault();
          handleChange("Sex", e.target.value);
        }}
      />
      <input
        placeholder="Age"
        type="text"
        defaultValue={data.Age}
        onChange={(e) => {
          e.preventDefault();
          handleChange("Age", e.target.value);
        }}
      />
      <input
        placeholder="SibSp"
        type="text"
        defaultValue={data.SibSp}
        onChange={(e) => {
          e.preventDefault();
          handleChange("SibSp", e.target.value);
        }}
      />
      <input
        placeholder="Parch"
        type="text"
        defaultValue={data.Parch}
        onChange={(e) => {
          e.preventDefault();
          handleChange("Parch", e.target.value);
        }}
      />
      <input
        placeholder="Ticket"
        type="text"
        defaultValue={data.Ticket}
        onChange={(e) => {
          e.preventDefault();
          handleChange("Ticket", e.target.value);
        }}
      />
      <input
        placeholder="Fare"
        type="text"
        defaultValue={data.Fare}
        onChange={(e) => {
          e.preventDefault();
          handleChange("Fare", e.target.value);
        }}
      />
      <input
        placeholder="Cabin"
        type="text"
        defaultValue={data.Cabin}
        onChange={(e) => {
          e.preventDefault();
          handleChange("Cabin", e.target.value);
        }}
      />
      <input
        placeholder="Embarked"
        type="text"
        defaultValue={data.Embarked}
        onChange={(e) => {
          e.preventDefault();
          handleChange("Embarked", e.target.value);
        }}
      />
      <input type="submit" onClick={handleSubmit} />
    </form>
  );
};

PredictionForm.prototype = {
  childToParent: PropTypes.function,
};

export default PredictionForm;
