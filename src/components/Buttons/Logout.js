import React from "react";
import { Link } from "react-router-dom";
import { useAuthentication } from "../context/Authentication";

const LogoutButton = (props) => {
  const { Logout } = useAuthentication();
  return (
    <>
      <Link
        className="nav-link"
        onClick={() => {
          props.setLogin(false);
          Logout();
          localStorage.removeItem("token");
        }}
        to="/"
      >
        <div
          className="display-6"
          style={{ fontFamily: "sans-serif", color: "floralwhite" }}
        >
          Logout
        </div>
      </Link>
    </>
  );
};

export default LogoutButton;
