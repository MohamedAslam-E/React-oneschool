import { useState } from "react";
import Main from "../layout/Main";
import { Table,Button } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

function Staff() {
  const [staff, setStaff] = useState([
    { name: "pep guardiola", place: "spain" },
    { name: "arteta", place: "arsenal" },
  ]);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <Main>
      <div className="row p-3">
      <div className="d-flex justify-content-between">
            <h2>Staff</h2>
            <Button variant="primary" onClick={handleShow}>
              Add Staff
            </Button>

            <Modal
              show={show}
              onHide={handleClose}
              backdrop="static"
              keyboard={false}
            >
              <Modal.Header closeButton>
                <Modal.Title>Staff Form</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Form>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>Staff Name</Form.Label>
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
                    <Form.Label>place</Form.Label>
                    <Form.Control type="text" placeholder="enter place" />
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
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Full Name</th>
              <th>place</th>
            </tr>
          </thead>
          <tbody>
            {staff.map((staff, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{staff.name}</td>
                <td>{staff.place}</td>
              </tr>
            ))}
            {staff.length == 0 ? (
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

export default Staff;
