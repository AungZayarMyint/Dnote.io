import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";

const Nav = () => {
  const { token, updateToken } = useContext(UserContext);

  const logoutHandler = () => {
    updateToken(null);
  };

  return (
    <nav className="bg-slate-200 py-4 px-10 mt-3">
      <div className="flex items-center justify-between gap-3">
        <Link to={"/"} className="text-teal-600 font-bold text-3xl">
          SHARE_NOTE.io
        </Link>
        <div className="flex gap-4">
          {token ? (
            <>
              <Link to={"/create"} className="text-teal-600 font-medium">
                Create Note
              </Link>

              <button
                type="button"
                className="text-teal-600 font-medium"
                onClick={logoutHandler}
              >
                LogOut
              </button>
            </>
          ) : (
            <>
              {" "}
              <Link to={"/login"} className="text-teal-600 font-medium">
                Login
              </Link>
              <Link to={"/register"} className="text-teal-600 font-medium">
                Register
              </Link>{" "}
            </>
          )}
        </div>
      </div>

      {token && token.user_mail && (
        <p className="mt-3 text-teal-600 text-right">
          Login as -<span> {token.user_mail} </span>
        </p>
      )}
    </nav>
  );
};

export default Nav;
