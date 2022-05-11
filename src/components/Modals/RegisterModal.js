import React from "react"
import { Button, Modal } from "react-bootstrap";

function RegisterModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Body>
        <form >
                <div className="form-group">
                    <label><h3>Username</h3></label>
                    <input type="String" className="form-control mb-2" placeholder="Enter username" />
                </div>
                <div className="form-group">
                    <label><h3>Password</h3></label>
                    <input type="password" className="form-control"  placeholder="Enter password" />
                </div>
                <div className="form-group">
                    <label><h3>Repeat Password</h3></label>
                    <input type="password" className="form-control"  placeholder="Enter password" />
                </div>
                <div className="d-grid gap-2 mt-3">
                <Button type="submit" variant="primary" size="lg">
                    Sign Up
                </Button>
                </div>
            </form>
        </Modal.Body>
      </Modal>
    );
  }

export default RegisterModal;