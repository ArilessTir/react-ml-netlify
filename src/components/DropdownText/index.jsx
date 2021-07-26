/* eslint-disable react/prop-types */
import React from "react";

const DropdownText = ({ name, options, onChange, onClick }) => (
  <div className="pl-6 pt-6 w-full">
    {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
    <label className="text-lg"> {name} </label>
    <select
      onClick={onClick}
      name={name}
      onChange={onChange}
      className="w-2/3 h-8 rounded-md shadow-md block outline-none bg-white"
    >
      {options.map((item) => (
        <option value={item}>{item}</option>
      ))}
    </select>
  </div>
);

export default DropdownText;
