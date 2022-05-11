import React from "react";
import { Badge, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function BlogCard(props) {
  return (
    <Card>
      <Link className="stretched-link" to="/"></Link>
      <Card.Body>
        <Card.Title>{props.data.title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          {props.data.user.username}
        </Card.Subtitle>
        <Card.Text></Card.Text>
        {props.data.tags.map((data) => (
          <span key={data}>
            <Badge className="mr-2" key={data} pill bg="dark">
              {data}
            </Badge>{" "}
          </span>
        ))}
      </Card.Body>
    </Card>
  );
}
