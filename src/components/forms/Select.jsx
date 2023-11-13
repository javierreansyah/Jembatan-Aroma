import React from "react";

const Select = ({ id, label, options }) => {
  return (
    <div>
      <label id={id} className="my-3 flex-1 text-sm font-semibold text-wb-gray">
        {label}
        <select
          id={id}
          name={id}
          className="mt-1 block w-full rounded-2xl border-2 border-gray-200 px-4 font-normal text-wb-gray hover:border-gray-400 focus:border-wb-yellow  focus:ring-1 focus:ring-wb-yellow"
        >
          {options.map((option, index) => (
            <option key={index} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </label>
    </div>
  );
};

export default Select;
