import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import PredictionForm from "../../components/PredictionForm";
import Card from "../../components/Card";

const Prediction = () => {
  const [result, setResult] = useState("");

  const childToParent = (childData) => {
    setResult(childData);
  };

  return (
    <>
      <Navbar />
      <h1 className="text-center pt-16"> Hello from pred form</h1>
      <Card>
        <PredictionForm childToParent={childToParent} />
      </Card>
      <h1 className="text-center">Result: {result} </h1>
    </>
  );
};

export default Prediction;
