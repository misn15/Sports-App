
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import soccerball from '../assets/soccerball.jpg';
import '../styles/home.css';


function Home() {
  return (
      <div>
    <Navbar bg="light" expand="lg">
    <Container>
      <Navbar.Brand href="#home">BAS</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <NavDropdown title="Play Sports" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Soccer</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Basketball</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Volleyball</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              Separated link
            </NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="#link">Volunteer</Nav.Link>
          <Nav.Link href="#link">About</Nav.Link>
        </Nav>
      </Navbar.Collapse>

      

    </Container>

    
  </Navbar> 
  <img class = "img-class" src={soccerball} alt="Logo" />
  
  </div>
  );
}



export default Home;