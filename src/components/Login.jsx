import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Input } from "./index.js";
import userInfo from "../constants/userInfo.js";

const Login = ({ setUserType }) => {
  const [usernameOrEmail, setUsernameOrEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const user = userInfo.find(
      (user) =>
        (user.username === usernameOrEmail || user.email === usernameOrEmail) &&
        user.password === password,
    );

    if (user) {
      setUserType(user.userType);
      navigate("/");
    } else {
      setError("Invalid username/email or password. Please try again.");
    }
  };

  return (
    <div className="container">
      <div>
        <h1>LOGIN</h1>
        <form onSubmit={handleSubmit}>
          <Input
            id="email-username"
            type="text"
            placeholder="Username atau Password"
            label="Username atau Password"
            value={usernameOrEmail}
            handle={setUsernameOrEmail}
          />
          <Input
            id="password"
            type="text"
            placeholder="Password"
            label="Password"
            value={password}
            handle={setPassword}
          />
          <button
            type="submit"
            className="rounded-full border-2 border-wb-redorange bg-wb-redorange px-4 py-1 text-sm font-semibold text-wb-white"
          >
            Login
          </button>
        </form>
        <Link to="/bergabung" className="">
          Belum punya akun? daftar sekarang
        </Link>
      </div>
    </div>
  );
};

export default Login;
