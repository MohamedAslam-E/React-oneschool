import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { useState } from "react";
import { Button } from "react-bootstrap";

export default function StudentForm({ onClose }) {
  const [educations] = useState([
    { id: 1, name: "SSLC" },
    { id: 2, name: "PLUS TWO" },
    { id: 3, name: "DEGREE" },
    { id: 4, name: "MCA" },
  ]);

  const [form, setForm] = useState({
    name: "",
    email: "",
    education: "",
    is_degree_completed: "",
    address: "",
    skills: ["HTML", "CSS"],
  });

  const handleChange = (e) => {
    setForm((prevForm) => ({
      ...prevForm,
      [e.target.name]: e.target.value,
    }));
  };

  const handleRadio = (e) => {
    setForm((prevForm) => ({
      ...prevForm,
      [e.target.name]: Number(e.target.value),
    }));
  };

  const handleCheck = (value) => {
    setForm((prevForm) => {
      if (prevForm.skills.includes(value)) {
        return {
          ...prevForm,
          skills: prevForm.skills.filter((skill) => skill !== value),
        };
      } else {
        // setForm({
        //   ...form,
        //   skills: [...form.skills, value],
        // });
        return {
          ...prevForm,
          skills: [...prevForm.skills, value],
        };
      }
    });
  };

  const handleFormSubmit =(e)=> {
    e.preventDefault();
  }

  //   const [name, setName] = useState();
  //   const [email, setEmail] = useState();

  //   const handleChange = (e) => {
  //     if (e.target.name === "name") {
  //       setName(e.target.value);
  //     }else if (e.target.name ==="email"){
  //         setEmail(e.target.value);
  //     }
  //   };

  return (
    <Form   onSubmit={handleFormSubmit}>
      <Modal.Body>
        <div className="row">
          <Form.Group className="mb-3 col-6" controlId="studentName">
            <Form.Label>Student Name</Form.Label>
            <Form.Control
              name="name"
              value={form.name}
              onChange={handleChange}
              type="text"
              placeholder="enter name"
              autoFocus
            />
          </Form.Group>

          <Form.Group className="mb-3 col-6" controlId="email">
            <Form.Label>email</Form.Label>
            <Form.Control
              value={form.email}
              onChange={handleChange}
              type="email"
              placeholder="enter email"
              name="email"
            />
          </Form.Group>
        </div>
        <div className="row">
          <Form.Group className="mb-3 col-6" controlId="education">
            <Form.Select
              value={form.education}
              name="education"
              onChange={handleChange}
            >
              <option>Highest education</option>
              {educations.map((education) => (
                <option value={education.id} key={education.id}>
                  {education.name}
                </option>
              ))}
            </Form.Select>
          </Form.Group>

          <Form.Group className="mb-3 col-6" controlId="isDegreeCompleted">
            <Form.Label>Is degree completed</Form.Label>
            <div>
              <Form.Check
                inline
                label="Yes"
                name="is_degree_completed"
                type="radio"
                value={1}
                checked={form.is_degree_completed == 1}
                onChange={handleRadio}
              />
              <Form.Check
                inline
                label="No"
                name="is_degree_completed"
                type="radio"
                value={0}
                onChange={handleRadio}
                checked={form.is_degree_completed == 0}
              />
            </div>
          </Form.Group>
        </div>

        <Form.Group className="mb-3" controlId="address">
          <Form.Label>Address</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            name="address"
            value={form.address}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="skills">
          <Form.Label>skills</Form.Label>
          <div>
            <Form.Check
              inline
              label="HTML"
              name="skills[]"
              type="checkbox"
              value="HTML"
              checked={form.skills.includes("HTML")}
              onChange={(e) => {
                handleCheck(e.target.value);
              }}
            />
            <Form.Check
              inline
              label="css"
              name="skills[]"
              type="checkbox"
              value="CSS"
              onChange={(e) => {
                handleCheck(e.target.value);
              }}
              checked={form.skills.includes("CSS")}
            />
          </div>
        </Form.Group>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onClose} type="reset">
          reset
        </Button>
        <Button variant="primary" onClick={onClose} type="button">
          Submit
        </Button>
      </Modal.Footer>
    </Form>
  );
}
