import React from "react";

const Clickable = ({ id, type, name, label, onChange }) => {
  const handleOnChange = () => {
    onChange(label);
  };
  return (
    <label
      id={id}
      className="font-base my-2 flex w-fit items-center text-sm text-wb-gray"
    >
      <input
        id={id}
        name={type === "radio" ? name : id}
        type={type}
        onChange={handleOnChange}
        className={`${
          type === "radio" ? "rounded-full" : "rounded"
        } focus:ring-none mr-2 border-2 border-gray-200 text-wb-redorange hover:border-gray-400 focus:border-none focus:ring-0`}
      ></input>
      <span className="text-base font-normal">{label}</span>
    </label>
  );
};

export default Clickable;
