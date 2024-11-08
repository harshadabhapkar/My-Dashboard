"use client";
import { useState } from "react";
export default function Dropdown({ label, options }) {
  const [selectedValue, setSelectedValue] = useState("");

  const handleChange = (e) => {
    setSelectedValue(e.target.value);
  };

  return (
    <div className="w-full ">
      <div className="relative">
        <select 
          value={selectedValue} 
          onChange={handleChange} 
          className="p-3 w-full text-gray-800 font-lg shadow-md rounded-3xl focus:outline-none"
        >
          {options.map((option, index) => (
            <option key={index} value={option} className="font-semibold text-[14px]">
              {`${label}`}: {option}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
