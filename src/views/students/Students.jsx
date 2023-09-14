import Main from "../../layout/Main";
import { Table, Button } from "react-bootstrap";
import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import StudentForm from "./StudentForm";

function Students() {
  const [students, setStudents] = useState([]);
  // setTimeout(() => {
  //   setStudents([
  //     { name: "moh salah", email: "salah@gmail.com" },
  //     { name: "messi", email: "messi@gmail.com" },
  //     { name: "cr7", email: "cr7@gmail.com" },
  //   ]);
  // }, 5000);

  useEffect(() => {
    fetch("http://localhost:80/student")
      .then((res) => res.json())
      .then((data) => setStudents(data.data));
  }, []);

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
            size="lg"
          >
            <Modal.Header closeButton>
              <Modal.Title>Student Form</Modal.Title>
            </Modal.Header>
            <StudentForm onClose={handleClose}/>
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
            {students.length == 0 ? (
              <tr>
                <td colSpan="3" className="text-center">
                  No records found
                </td>
              </tr>
            ) : (
              students.map((student, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{student.name}</td>
                  <td>{student.email}</td>
                </tr>
              ))
            )}
          </tbody>
        </Table>
      </div>
    </Main>
  );
}

export default Students;
