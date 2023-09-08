import { useState } from "react";
import Form from "react-bootstrap/Form";
import Main from "../layout/Main";
import { Button, Table } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";

function Account() {
  const [account, setAccount] = useState([]);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Main>
        <div className="row p-3">
          <div className="d-flex justify-content-between">
            <h2>Account</h2>
            <Button variant="primary" onClick={handleShow}>
              Add account
            </Button>

            <Modal
              show={show}
              onHide={handleClose}
              backdrop="static"
              keyboard={false}
            >
              <Modal.Header closeButton>
                <Modal.Title>Modal title</Modal.Title>
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
                    <Form.Label>Amount</Form.Label>
                    <Form.Control type="number" placeholder="enter amount" />
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
                <th>Book Name</th>
                <th>status</th>
              </tr>
            </thead>
            <tbody>
              {account.map((account, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{account.name}</td>
                  <td>{account.amount}</td>
                </tr>
              ))}
              {account.length == 0 ? (
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
    </>
  );
}

export default Account;
