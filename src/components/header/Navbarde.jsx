import React from "react";
import { Navbar as BNavbar, Nav, Button, Container } from "react-bootstrap";


import HeaderLogo from "../../assets/img/headerlogo.svg";
import {BiLogOut } from 'react-icons/bi';
const Navbarde = () => {
  const [click, setClick] = React.useState(false);
  const [button, setButton] = React.useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  React.useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <BNavbar bg="transparent" expand="lg" className="mx-3">
        <BNavbar.Brand href="#home">
          <img
            src={HeaderLogo}
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
        </BNavbar.Brand>
        <BNavbar.Toggle aria-controls="navbar-nav" />
        <BNavbar.Collapse id="navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="/" onClick={closeMobileMenu}>
            Se déconnecter <BiLogOut/>
            </Nav.Link>
          </Nav>
        </BNavbar.Collapse>
    </BNavbar>
  );
};

export default Navbarde;
