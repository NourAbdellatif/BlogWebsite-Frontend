import BlogDisplay from "./Blog/BlogDisplay";
import "../styles/base.css";
import { Button, Container } from "react-bootstrap";
import { useAuthentication } from "./context/Authentication";
import { Link } from "react-router-dom";
const Home = () => {
  const { isLoggedIn } = useAuthentication();
  return (
    <Container>
      {isLoggedIn && (
        <Link className="nav-link" to="/new">
          {" "}
          <Button>New Blog</Button>{" "}
        </Link>
      )}
      <BlogDisplay request="http://localhost:1111/blogs"></BlogDisplay>
    </Container>
  );
};

export default Home;
