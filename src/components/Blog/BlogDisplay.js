import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import BlogCard from "./BlogCard";
import { Col, Row } from "react-bootstrap";

export default function BlogDisplay(props) {
  var header = "";
  if (props.token) {
    header = "Bearer " + props.token;
  }
  const [blog, setBlog] = useState([]);
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const { data } = await axios.get(props.request, {
          headers: {
            Authorization: header,
          },
        });
        setBlog(data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchBlogs();
  }, [props.request, props.token, header]);
  return (
    <Row className="mt-5">
      {blog.map((data) => (
        <Col key={data._id} className="mt-2 mb-2" xs="12" md="3">
          <BlogCard data={data}></BlogCard>
        </Col>
      ))}
    </Row>
  );
}
