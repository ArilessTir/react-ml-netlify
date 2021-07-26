import React from "react";

// eslint-disable-next-line react/prop-types
const Button = ({ name, clikFunc, color }) => (
  // eslint-disable-next-line react/button-has-type
  <button
    onClick={clikFunc}
    className={`min-w-20 w-20 h-8 ${color} rounded-lg text-white absolute bottom-10 right-10`}
  >
    {name}
  </button>
);

export default Button;
