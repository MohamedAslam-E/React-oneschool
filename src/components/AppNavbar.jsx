import Logo from "../assets/logo.png";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, NavDropdown, Container, Nav } from "react-bootstrap";

const AppNavbar = () => (
  <Navbar variant="dark" className=" bg-dark" expand="lg">
    <Container fluid>
      <Navbar.Brand href="#home" className="text-light">
        <img
          alt="logo"
          src={Logo}
          width="30"
          height="30"
          className="d-inline-block align-top"
        />
        One School
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="navbar-dark" />
      <Navbar.Collapse id="navbar-dark" className="justify-content-end">
        <Nav>
          <NavDropdown
            id="nav-dropdown-dark-example"
            title="Dropdown"
            menuVariant="dark"
            className="text-light"
          >
            <NavDropdown.Item href="#action/3.1">profile</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">logout</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);

export default AppNavbar;
