import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Input, Clickable } from "./index.js";
import userInfo from "../constants/userInfo.js";
import home from "../assets/images/home.jpg";

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
    <div className="container flex items-center pt-10 md:h-screen md:pt-0">
      <div className="flex w-full md:gap-20 md:pb-60">
        <div className="flex w-full items-center">
          <div className="w-full rounded-2xl md:pr-20">
            <h1 className="mb-3 text-5xl  font-bold text-wb-redorange">
              Masuk
            </h1>
            <form onSubmit={handleSubmit} className="mb-4 space-y-4">
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
              <div className="flex items-center justify-between">
                <Clickable
                  id="remember-me"
                  type="checkbox"
                  label="Ingat Saya"
                />
                <Link className="">Lupa Password?</Link>
              </div>
              <button
                type="submit"
                className="w-full rounded-full border-2 border-wb-redorange bg-wb-redorange px-4 py-2 text-sm font-semibold text-wb-white md:w-fit"
              >
                Login
              </button>
            </form>
            <Link to="/bergabung" className="">
              Belum punya akun? Daftar sekarang!
            </Link>
          </div>
        </div>
        <div className="hidden w-full md:block">
          <img src={home} alt="home photo" />
        </div>
      </div>
    </div>
  );
};

export default Login;
