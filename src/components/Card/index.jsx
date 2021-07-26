import React from "react";

// eslint-disable-next-line react/prop-types
const Card = ({ children }) => (
  <div
    className="w-1/3 h-1/3 shadow-lg rounded-lg
   absolute top-1/2 right-1/2 transform -translate-y-1/2"
  >
    {children}
  </div>
);

export default Card;
