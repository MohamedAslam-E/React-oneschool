import { useState } from "react";
import { Button,Table } from "react-bootstrap";
import Main from '../layout/Main';
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";


function Library() {
    const [library,setLibrary] = useState([
        {name:"harry potter",status:"available"},
        {name:"goal",status:"available"},
    ]);

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
    <Main>
      <div className="row p-3">
        <div className="d-flex justify-content-between">
            <h2>Library</h2>
            <Button variant="primary" onClick={handleShow}>
              Add Book
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
                    <Form.Label>Book Name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="enter book name"
                      autoFocus
                    />
                  </Form.Group>
                  <Form.Group
                    className="mb-3"
                    controlId="amount"
                  >
                    <Form.Label>Publication Date</Form.Label>
                    <Form.Control type="date" />
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
            {library.map((library, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{library.name}</td>
                <td>{library.status}</td>
              </tr>
            ))}
            {library.length == 0 ? (
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
  )
}

export default Library