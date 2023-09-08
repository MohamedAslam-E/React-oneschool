import Main from "../layout/Main";
import { Table,Button } from "react-bootstrap";
import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";



function Students() {
  const [students, setStudents] = useState([]);
  setTimeout(() => {
    setStudents([
      { name: "moh salah", email: "salah@gmail.com" },
      { name: "messi", email: "messi@gmail.com" },
      { name: "cr7", email: "cr7@gmail.com" },
    ]);
  }, 5000);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <Main>
      <div className="row p-3">
      <div className="d-flex justify-content-between">
            <h2>Students</h2>
            <Button variant="primary" onClick={handleShow}>
              Add Student
            </Button>

            <Modal
              show={show}
              onHide={handleClose}
              backdrop="static"
              keyboard={false}
            >
              <Modal.Header closeButton>
                <Modal.Title>Student Form</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Form>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>Student Name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="enter name"
                      autoFocus
                    />
                  </Form.Group>
                  <Form.Group
                    className="mb-3"
                    controlId="amount"
                  >
                    <Form.Label>email</Form.Label>
                    <Form.Control type="email" placeholder="enter email" />
                  </Form.Group>
                </Form>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
                <Button variant="primary">Submit</Button>
              </Modal.Footer>
            </Modal>
          </div>
        <Table striped bordered hover className="mt-3">
          <thead>
            <tr>
              <th>#</th>
              <th>Full Name</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{student.name}</td>
                <td>{student.email}</td>
              </tr>
            ))}
            {students.length == 0 ? (
              <tr>
                <td colSpan="3" className="text-center">
                  No records found
                </td>
              </tr>
            ) : null}
          </tbody>
        </Table>
      </div>
    </Main>
  );
}

export default Students;
