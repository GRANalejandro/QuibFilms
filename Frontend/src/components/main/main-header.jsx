import { useState } from 'react'; 
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap'; 
import { FaBars, FaSearch } from 'react-icons/fa'; 
// import { FaSearch } from '@fortawesome';
 
const NavigationBar = () => { 
  const [expanded, setExpanded] = useState(false); 
 
  const toggleNavbar = () => { 
    setExpanded(!expanded); 
  }; 
 
  return ( 
    <>
      <Navbar className='main-header' bg="light" expand="lg">
  <Navbar.Brand className='main-header__brand' href="#home">
    <span>QUIB-FILMS</span>
  </Navbar.Brand>
  <Form className='main-header__form d-flex'  inline>
      <Button variant="outline-success"><FaSearch /></Button>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
    </Form>
  <Navbar.Toggle aria-controls="main-header__toggler basic-navbar-nav" onClick={toggleNavbar}>
    <FaBars />
  </Navbar.Toggle>
  <Navbar.Collapse id="basic-navbar-nav" className={expanded ? 'show' : 'main-header__colapse'}>
    <Nav className="main-header__nav mr-auto">
    <Nav.Link href="#home">Inicio</Nav.Link> 
          <Nav.Link href="#link">Peliculas</Nav.Link> 
          <Nav.Link href="#about">Categorías</Nav.Link> 
          <Nav.Link href="#about">Iniciar sesión</Nav.Link> 
          <Nav.Link href="#about">Registrarse</Nav.Link> 
    </Nav>
    
  </Navbar.Collapse>
</Navbar>
    </>
  ); 
}; 
 
export default NavigationBar;
