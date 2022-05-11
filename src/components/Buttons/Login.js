import React from "react";
import { Link } from "react-router-dom";
import LoginModal from "../Modals/LoginModal";

const LoginButton = (props) => {
  return (
    <>
      <Link
        className="nav-link"
        onClick={() => {
          props.setLogin(true);
          console.log(props.token);
        }}
        to="/"
      >
        <div
          className="display-6"
          style={{ fontFamily: "sans-serif", color: "floralwhite" }}
        >
          Login
        </div>
      </Link>
      <LoginModal
        onSubmit={props.handleLogin}
        show={props.login}
        onHide={() => props.setLogin(false)}
      />
    </>
  );
};

export default LoginButton;
