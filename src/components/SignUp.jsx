import React from "react";

const SignUp = () => {
  const SignUpForm = ({ id, type, placeholder, label, props }) => {
    return (
      <div className="">
        <div className="my-3 flex-1">
          <label id={id} className="text-sm font-semibold text-wb-gray">
            {label}
          </label>
          <input
            id={id}
            name={id}
            type={type}
            placeholder={placeholder}
            className="mt-2 block w-full rounded-lg border-2 border-gray-200 text-wb-gray hover:border-gray-400 focus:border-gray-400 focus:border-wb-yellow  focus:ring-1 focus:ring-wb-yellow"
            {...props}
          ></input>
        </div>
      </div>
    );
  };
  return (
    <div className="container h-44 w-full px-8 md:px-12">
      <div className="h-screen rounded-2xl bg-wb-lightgray p-8">
        <h1 className="text-3xl font-bold text-wb-gray">
          Isikan Informasi Lembaga Anda
        </h1>
        <div className="my-4 w-full border-b-2 border-gray-200 text-wb-gray"></div>
        <form>
          <SignUpForm
            id="org-name"
            type="text"
            placeholder="Nama Lembaga"
            label="Nama Lembaga"
          />
          <SignUpForm
            id="org-name"
            type="text"
            placeholder="Nama Lembaga"
            label="Nama Lembaga"
          />
        </form>
      </div>
    </div>
  );
};

export default SignUp;
