import React from "react";
import Cards from "../components/Cards";
import HeroSection from "../components/Herosection.jsx";
import Footer from "../components/Footer";
import Contactus from "../components/Contactus";
import { Row, Col, Container } from "react-bootstrap";
import APropos from "../components/APropos";
import Navbar from '../components/header/Navbar';
function Home() {
  return (
    <>
    <header>
      <Navbar/>
    </header>
    <main>
    <Container fluid>
    
        <div>
          <HeroSection/>
          <hr />
        </div>
        
        <div>
          <APropos />
        </div>

        <div>
          <hr />
          <Contactus />
        </div>

        <div>
          
          <Footer />
        </div>

    </Container>
    </main>
   </>
  );
}

export default Home;
