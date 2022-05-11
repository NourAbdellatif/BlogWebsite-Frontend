import { Button, ToggleButton } from "react-bootstrap";
import React, { useState } from "react";
import { Col, Container, Form, FormControl, Row } from "react-bootstrap";
import axios from "axios";
import { useNavigate } from "react-router";

const NewBlog = () => {
  const [blog, setBlog] = useState({ title: "", body: "", tags: [] });

  const config = {
    headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
  };
  let navigate = useNavigate();
  async function handleBlog(e, blog) {
    e.preventDefault();
    const response = await axios.post(
      "http://localhost:1111/blogs/post",
      blog,
      config
    );
    console.log(response);
    navigate("/");
  }
  return (
    <Container>
      <Row className="mb-3">
        <Col lg={{ span: 3, offset: 3 }}>
          <Form.Control
            size="lg"
            type="text"
            placeholder="Title..."
            onChange={(e) => {
              setBlog((oldBlog) => {
                oldBlog.title = e.target.value;
                return oldBlog;
              });
            }}
          ></Form.Control>
        </Col>
      </Row>
      <Row>
        <Col>
          <textarea
            class="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
            placeholder="Body..."
            onChange={(e) => {
              setBlog((oldBlog) => {
                oldBlog.body = e.target.value;
                return oldBlog;
              });
            }}
          ></textarea>
        </Col>
      </Row>
      <Row>
        <Row></Row>
        <Col>
          {" "}
          <ToggleButton variant="danger">Action</ToggleButton>{" "}
        </Col>
        <Col>
          {" "}
          <ToggleButton variant="dark">Horror</ToggleButton>{" "}
        </Col>{" "}
        <Col>
          {" "}
          <ToggleButton variant="info">Slice of Life</ToggleButton>{" "}
        </Col>{" "}
        <Col>
          {" "}
          <ToggleButton variant="success">Comedy</ToggleButton>{" "}
        </Col>{" "}
      </Row>
      <Row className="mt-4">
        <Button
          variant="primary"
          type="submit"
          onClick={(e) => {
            console.log(blog);
            handleBlog(e, blog);
          }}
        >
          Submit
        </Button>
      </Row>
    </Container>
  );
};

export default NewBlog;
