import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Nav,NavItem } from "react-bootstrap";
import { faHouse,faUser,faCircleUser,faBook,faWallet } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <Nav defaultActivekey="/" className="flex-column" id="sidebar">
      <NavItem href="/">
      <Nav.Link to="/" as={Link}>
      <FontAwesomeIcon icon={faHouse} />
        <span className="d-none d-md-inline">Dashboard</span>
      </Nav.Link>
      </NavItem>

      <NavItem  href="/students">
      <Nav.Link to="/students" as={Link}>
      <FontAwesomeIcon icon={faUser} />
        <span className="d-none d-md-inline">Students</span>
      </Nav.Link>
      </NavItem>
    
      <NavItem href="/staff">
      <Nav.Link to="/staff" as={Link}>
      <FontAwesomeIcon icon={faCircleUser} />
        <span className="d-none d-md-inline">Staff</span>
      </Nav.Link>
      </NavItem>

      <NavItem href="/library">
      <Nav.Link to="/library" as={Link}>
      <FontAwesomeIcon icon={faBook} />
        <span className="d-none d-md-inline">Library</span>
      </Nav.Link>
      </NavItem>

      <NavItem href="/account">
      <Nav.Link to="/account" as={Link}>
      <FontAwesomeIcon icon={faWallet} />
        <span className="d-none d-md-inline">Accounts</span>
      </Nav.Link>
      </NavItem>
      
    </Nav>
  );
};

export default Sidebar;
