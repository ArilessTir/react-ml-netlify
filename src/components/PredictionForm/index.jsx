/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import axios from "axios";
import Button from "../Button";
import InputText from "../InputText";
import DropdownText from "../DropdownText";
// eslint-disable-next-line react/prop-types
const PredictionForm = ({ childToParent }) => {
  const [data, setData] = useState({
    PassengerId: 0,
    Pclass: 1,
    Name: "",
    Sex: "male",
    Age: 22,
    SibSp: 0,
    Parch: 0,
    Ticket: "",
    Fare: 0,
    Cabin: "",
    Embarked: "",
  });

  const handleChange = (event) => {
    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    childToParent("loading");
    setTimeout(() => {
      axios
        .post("https://mytitanicapipred.herokuapp.com/predict", data)
        .then((res) => {
          console.log(data);
          console.log(res);
          childToParent(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }, 3000);
  };

  const test = ["Name", "Age"];
  const dropdown = [
    { Name: "Pclass", option: ["1", "2", "3"] },
    { Name: "Sex", option: ["male", "female"] },
  ];
  return (
    <>
      <form className="grid grid-cols-2">
        {test.map((items) => (
          <InputText name={items} onChange={handleChange} />
        ))}
        {dropdown.map((element) => (
          <DropdownText
            name={element.Name}
            options={element.option}
            onChange={handleChange}
          />
        ))}
      </form>
      <Button name="Valider" clikFunc={handleSubmit} color="bg-blue-500" />
    </>
  );
};

export default PredictionForm;
