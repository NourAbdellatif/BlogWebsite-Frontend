import React from "react";
import BlogDisplay from "../Blog/BlogDisplay";
import "../../styles/base.css";
import { Container } from "react-bootstrap";
const UserLogin = () => {
  if (localStorage.getItem("token")) {
    const token = localStorage.getItem("token");
    return (
      <Container>
        <BlogDisplay
          token={token}
          request="http://localhost:1111/users/myBlogs"
        ></BlogDisplay>
      </Container>
    );
  } else {
    return (
      <Container>
        <BlogDisplay request="http://localhost:1111/blogs"></BlogDisplay>
      </Container>
    );
  }
};

export default UserLogin;
