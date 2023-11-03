import React from "react";

const Clickable = ({ id, type, name, label, onChange }) => {
  const handleOnChange = () => {
    onChange(label);
  };
  return (
    <label id={id} className="font-base my-2 flex w-fit text-sm text-wb-gray">
      <input
        id={id}
        name={type === "radio" ? name : id}
        type={type}
        onChange={handleOnChange}
        className={`${
          type === "radio" ? "rounded-full" : "rounded"
        } focus:ring-none mr-2 block  border-2 border-gray-200 font-normal text-wb-gray hover:border-gray-400 focus:border-none focus:ring-0`}
      ></input>
      {label}
    </label>
  );
};

export default Clickable;
