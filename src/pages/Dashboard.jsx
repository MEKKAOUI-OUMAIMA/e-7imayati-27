import React from "react";
import Cards from "../components/Cards";
import Menu from "../components/Menu.jsx";
import Footer from "../components/Footer";
import Contactus from "../components/Contactus";
import "../components/HerSection.css";

import { Row, Col, Container } from "react-bootstrap";
import APropos from "../components/APropos";
import Navbarde from '../components/header/Navbarde';


function Dashboard() {
  return (
     <>
     <header>
         <Navbarde/>
     </header>
     <main>
    <Container fluid>
        <Menu />

        <Footer />
    </Container>
    </main>
    </>
  );
}

export default Dashboard;
