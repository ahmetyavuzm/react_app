"use client";
import React from "react";

const TextArea = ({ className = "", rows = "5", placeholder = "" }) => {
  const [value, setValue] = React.useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div className={className}>
      <div className="flex items-center relative w-full h-auto">
        <textarea
          value={value}
          rows={rows}
          onChange={handleChange}
          placeholder={placeholder}
          className={`ring-darktext  focus:ring-primary-400 rounded-lg py-2 px-4 w-full bg-black ring-1 outline-none focus:`}
        />
      </div>
    </div>
  );
};

export default TextArea;
