import React from "react";

const Input = ({ id, type, placeholder, label, value, handle }) => {
  return (
    <div>
      <label id={id} className="flex-1 text-sm font-semibold text-wb-gray">
        {label}
        <input
          id={id}
          name={id}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={(e) => handle(e.target.value)}
          required
          className="mt-2 block w-full rounded-2xl border-2 border-gray-200 px-4 font-normal text-wb-gray hover:border-gray-400 focus:border-wb-yellow  focus:ring-1 focus:ring-wb-yellow"
        ></input>
      </label>
    </div>
  );
};

export default Input;
