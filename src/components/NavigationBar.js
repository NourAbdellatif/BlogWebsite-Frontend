import React, { useEffect, useRef, useState } from "react";
import { Button, Container, Form, FormControl, Nav } from "react-bootstrap";
import { Navbar } from "react-bootstrap";
import logo from "../images/logo.png";
import { Link, useNavigate } from "react-router-dom";
import "../styles/base.css";
import axios from "axios";
import LoginButton from "./Buttons/Login";
import RegisterButton from "./Buttons/Register";
import LogoutButton from "./Buttons/Logout";

import { useAuthentication } from "./context/Authentication";

const NavigationBar = () => {
  const { Login } = useAuthentication();

  let navigate = useNavigate();
  async function handleLogin(e, user) {
    console.log(e);
    e.preventDefault();
    const response = await axios.post(
      "http://localhost:1111/users/login",
      user
    );
    Login();
    localStorage.setItem("token", response.data.token);
    console.log(response);
    setLogin(false);
    navigate("/login");
  }
  const [login, setLogin] = React.useState(false);
  const [register, setRegister] = React.useState(false);
  const [navBackground, setNavBackground] = useState(false);
  const navRef = useRef();
  const token = localStorage.getItem("token");
  let authButton;
  if (!token) {
    authButton = (
      <LoginButton
        login={login}
        setLogin={setLogin}
        handleLogin={handleLogin}
        token={localStorage.getItem("token")}
      ></LoginButton>
    );
  } else {
    authButton = (
      <LogoutButton login={login} setLogin={setLogin}></LogoutButton>
    );
  }

  navRef.current = navBackground;
  useEffect(() => {
    const handleScroll = () => {
      const show = window.scrollY > 50;
      if (navRef.current !== show) {
        setNavBackground(show);
      }
    };
    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <Navbar
        className="navbar-dark"
        sticky="top"
        style={{
          transition: "0.5s ease",
          backgroundColor: navBackground ? "#5bc0de" : "transparent",
        }}
        expand="lg"
      >
        <Container fluid>
          <Navbar.Brand as={Link} to="/">
            <img
              alt=""
              src={logo}
              width="100"
              height="100"
              className="d-inline-block align-top"
            />{" "}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Link className="nav-link" to="/">
                <div
                  className="display-6"
                  style={{ fontFamily: "sans-serif", color: "floralwhite" }}
                >
                  Home
                </div>
              </Link>
              {token && (
                <>
                  <Link className="nav-link" to="/login">
                    <div
                      className="display-6"
                      style={{ fontFamily: "sans-serif", color: "floralwhite" }}
                    >
                      My Blogs
                    </div>
                  </Link>
                </>
              )}
            </Nav>
            <Nav
              className="ms-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              {authButton}
              {!token && (
                <RegisterButton
                  register={register}
                  setRegister={setRegister}
                ></RegisterButton>
              )}
            </Nav>
            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />

              <Button variant="dark">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavigationBar;
