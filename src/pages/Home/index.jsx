import React from "react";
import Boat from "../../components/Boat";

const Homepage = () => (
  <>
    <div className="flex max-h-screen">
      <div className="w-1/2 relative">
        <div className="absolute top-1/3 w-full">
          <h1 className="text-7xl  pl-14"> Titanic Prediction </h1>
          <h1 className=" pl-14 pt-4 text-xl">
            {" "}
            Ask my machine learning API and see if you would have survived the
            titanic
          </h1>
          <div className="mt-10 ml-14 space-x-16 text-2xl flex w-full">
            <button
              type="submit"
              className="bg-blue-500 rounded-md w-36 h-12 text-white shadow-lg
              hover:bg-white hover:text-blue-500"
            >
              Prediction
            </button>
            <button
              type="submit"
              className="bg-white rounded-md w-36 h-12 text-blue-500 shadow-lg
              hover:bg-blue-500 hover:text-white"
            >
              {" "}
              Git Hub{" "}
            </button>
          </div>
        </div>
      </div>
      <div className="w-1/2">
        <Boat />
      </div>
    </div>
  </>
);

export default Homepage;
