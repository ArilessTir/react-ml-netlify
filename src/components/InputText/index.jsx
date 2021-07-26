import React from "react";

// eslint-disable-next-line react/prop-types
const InputText = ({ name, onChange }) => (
  <div className="pl-6 pt-6 w-full">
    {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
    <label className="text-lg"> {name} </label>
    <input
      name={name}
      className="w-2/3 h-8 rounded-md shadow-md block outline-none"
      onChange={onChange}
    />
  </div>
);
export default InputText;
