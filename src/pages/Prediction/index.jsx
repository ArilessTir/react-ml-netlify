import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import PredictionForm from "../../components/PredictionForm";
import Card from "../../components/Card";
import Robot from "../../components/Robot";

const Prediction = () => {
  const [result, setResult] = useState("");

  const childToParent = (childData) => {
    setResult(childData);
  };

  return (
    <>
      <Navbar />
      <body className="flex h-screen">
        <div className="w-1/2  relative">
          <div className="pb-32 absolute top-1/4 left-1/2 transform -translate-y-2/3 -translate-x-1/2 text-center text-xl">
            {" "}
            <h1> Ask the model to know if you gonna </h1>
            <span className="text-blue-500 text-2xl"> Live </span> or{" "}
            <span className=" text-2xl"> Die </span>
            <h1 className="text-center">Result: {result} </h1>
          </div>

          <Card>
            <PredictionForm childToParent={childToParent} />
          </Card>
        </div>
        <div className="w-1/2 relative">
          <Robot data={result} />
        </div>
      </body>
    </>
  );
};

export default Prediction;
