import React, { useState } from "react";

const PredictionForm = () => {
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
    Cabin: null,
    Embarked: "S",
  });

  const handleChange = (key, value) => {
    setData((obj) => ({
      ...obj,
      [key]: value,
    }));
  };

  return <div />;
};

export default PredictionForm;
