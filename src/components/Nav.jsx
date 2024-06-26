import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="bg-slate-200 py-4 px-10 mt-3">
      <div className="flex items-center justify-between gap-3">
        <Link to={"/"} className="text-teal-600 font-bold text-3xl">
          Dnote.io
        </Link>
        <div className="flex gap-4">
          <Link to={"/create"} className="text-teal-600 font-medium">
            Create Note
          </Link>

          <Link to={"/login"} className="text-teal-600 font-medium">
            Login
          </Link>

          <Link to={"/register"} className="text-teal-600 font-medium">
            Register
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
