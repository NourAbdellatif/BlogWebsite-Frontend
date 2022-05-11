import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";

function LoginModal(props) {
  const [user, setUser] = useState({ username: "", password: "" });
  // let navigate = useNavigate();
  // async function handleSubmit(e) {
  //   e.preventDefault();
  //   const response = await axios.post(
  //     "http://localhost:1111/users/login",
  //     user
  //   );
  //   localStorage.setItem("token", response.data.token);
  //   console.log(response);
  //   navigate("/login");
  // }
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body>
        <form>
          <div className="form-group">
            <label for="username">
              <h3>Username</h3>
            </label>
            <input
              type="text"
              id="username"
              name="username"
              onChange={(e) => {
                setUser((oldUser) => {
                  oldUser.username = e.target.value;
                  return oldUser;
                });
              }}
              className="form-control mb-2"
              placeholder="Enter username"
            />
          </div>
          <div className="form-group">
            <label for="password">
              <h3>Password</h3>
            </label>
            <input
              type="password"
              id="password"
              onChange={(e) => {
                setUser((oldUser) => {
                  oldUser.password = e.target.value;
                  return oldUser;
                });
              }}
              name="password"
              className="form-control"
              placeholder="Enter password"
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <Button
              onClick={(e) => {
                props.onSubmit(e, user);
              }}
              type="submit"
              variant="primary"
              size="lg"
            >
              Login
            </Button>
          </div>
        </form>
      </Modal.Body>
    </Modal>
  );
}

export default LoginModal;
