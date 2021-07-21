import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import PredictionForm from "../../components/PredictionForm";

const Prediction = () => {
  const [result, setResult] = useState("");

  const childToParent = (childData) => {
    setResult(childData);
  };

  return (
    <>
      <Navbar />
      <h1> Hello from pred form</h1>
      <PredictionForm childToParent={childToParent} />
      <h1>Result: {result} </h1>
    </>
  );
};

export default Prediction;
