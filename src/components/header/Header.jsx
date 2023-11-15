import { Container, Image, Nav, Navbar, Offcanvas } from "react-bootstrap"
import "./header.css"
import logo from "../../assets/img/logo.png"
import { NavLink } from "react-router-dom";

const Header = () => {
  let expand;
  return (
    <>
      <Navbar fixed="top" id="nav-bar" expand="md" data-bs-theme="ligth" className=" p-3 scrolling-navbar" >
        <Container fluid>
          <Navbar.Brand href="#" className="texto-navbar" ><NavLink to={"/"}><Image className="logo" src={logo} /></NavLink>  </Navbar.Brand>
          <Navbar.Toggle aria-controls={`  offcanvasNavbar-expand-md`} id="boton-nav" />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-md`}
            aria-labelledby={`offcanvasNavbarLabel-expand-md`}
            placement="end"
            data-bs-theme="dark"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title className="texto-navbar" id={`offcanvasNavbarLabel-expand-${expand}`}>
                Menu
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className=" offcanvas-body justify-content-end flex-grow-1">
                <NavLink className="texto-navbar mx-0 mx-md-2 " to="/" >Inicio</NavLink>
                <NavLink className="texto-navbar mt-3 mx-md-2 mt-md-0" to="/noticias"> Noticias </NavLink>
                <NavLink className="texto-navbar mt-3 mx-md-2 mt-md-0" to="/quienes-somos">Quienes somos</NavLink>
                <NavLink className="texto-navbar mt-3 mx-md-2 mt-md-0" to="/contacto">Contacto</NavLink>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  )
}

export default Header