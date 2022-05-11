import React from "react";
import { Link } from "react-router-dom";
import RegisterModal from "../Modals/RegisterModal";

const RegisterButton = (props) => {
  return (
    <>
      <Link className="nav-link" onClick={() => props.setRegister(true)} to="/">
        <div
          className="display-6"
          style={{ fontFamily: "sans-serif", color: "floralwhite" }}
        >
          Register
        </div>
      </Link>
      <RegisterModal
        show={props.register}
        onHide={() => props.setRegister(false)}
      ></RegisterModal>
    </>
  );
};

export default RegisterButton;
