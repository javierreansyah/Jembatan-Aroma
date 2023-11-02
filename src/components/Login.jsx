import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="container">
      <div>
        <Link to="/bergabung" className="">
          Belum punya akun? daftar sekarang
        </Link>
      </div>
    </div>
  );
};

export default Login;
