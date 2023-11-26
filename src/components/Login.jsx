import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Input, Clickable } from "./index.js";
import userInfo from "../constants/userInfo.js";
import home from "../assets/images/home.jpg";

const Login = ({ setUserType }) => {
  const [usernameOrEmail, setUsernameOrEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
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
      setError(false);
      navigate("/");
    } else {
      setError(true);
    }
  };

  return (
    <div className="container flex min-h-screen items-start pt-10 lg:items-center lg:pt-0">
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
                placeholder="Username atau Email"
                label="Username atau Email"
                value={usernameOrEmail}
                handle={setUsernameOrEmail}
              />
              <Input
                id="password"
                type="password"
                placeholder="Password"
                label="Password"
                value={password}
                handle={setPassword}
              />
              <div>
                {error && (
                  <p className="text-wb-red">Username atau Email salah!</p>
                )}
              </div>
              <div className="flex items-center justify-between">
                <Clickable
                  id="remember-me"
                  type="checkbox"
                  label="Ingat Saya"
                />
                <Link className="hover:text-wb-red">Lupa Password?</Link>
              </div>
              <div className="w-full space-y-4 md:flex md:items-center md:gap-4 md:space-y-0">
                <button
                  type="submit"
                  className="w-full rounded-full border-2 border-wb-redorange bg-wb-redorange px-4 py-2 text-sm font-semibold text-wb-white hover:bg-wb-red"
                >
                  Login
                </button>

                <Link
                  to="/bergabung"
                  className="flex w-full justify-center rounded-full border-2 border-wb-redorange bg-wb-white px-4 py-2 text-sm font-semibold text-wb-redorange hover:border-wb-red hover:text-wb-red"
                >
                  Bergabung
                </Link>
              </div>
            </form>
          </div>
        </div>
        <div className="hidden w-full lg:block">
          <img src={home} alt="home photo" />
        </div>
      </div>
    </div>
  );
};

export default Login;
