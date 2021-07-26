import React from "react";

// eslint-disable-next-line react/prop-types
const Card = ({ children }) => (
  <div
    className="w-2/3 h-2/5 shadow-lg rounded-lg
   absolute top-1/2 left-1/2 transform -translate-y-2/3 -translate-x-1/2"
  >
    {children}
  </div>
);

export default Card;
