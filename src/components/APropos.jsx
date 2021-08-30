import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import logo1 from "../assets/img/hands.svg";
import logo2 from "../assets/img/person.svg";
import logo3 from "../assets/img/action.svg";
import {Link, Redirect, useHistory} from "react-router-dom";

import styled from 'styled-components';

const APropos = () => {


  const history = useHistory();

  const Button = styled.button`
  background-color: #0A7DCD;
  color: white;
  font-family: Poppins;
  font-size: 18px;
  padding: 5px 20px;
  border-color: white;
  border-radius: 0px;
  margin: 2px 2px;
  cursor: pointer;
  height: 50px;
  width: 180px;
`;

  const cards = [
    {
      logo: logo3,
      title: "Sécurité au Maroc ",
      body: "Entre coups et blessures, agressions, violence physique, vol et kidnapping même. Le harcèlement de rue est l’un des points les plus fréquemment soulignés lorsqu’il s’agit d’aborder cette question de société.",
    },
    {
      logo: logo2,
      title: "Service de sécurité",
      body: "E-7imayati offre un système capable d’informer les utilisateurs des activités suspectes dans leur entourage, le cas des enfants perdus.",
    },
    {
      logo: logo1,
      title: "Renforcer la sensibilisation ",
      body: "E-7imayati a pour but de sensibiliser la population générale aux dangers liés à la pollution de l'air, et de permettre l’engagement du citoyen dans cet importante problématique aussi bien au niveau sanitaire qu'environnemental."
    },
  ];


  return (
    <div id="a-propos" className="bg-primary p-5">
      <div class="container">
        <div class="row">
            <div class="col-sm-5">
              <h1>À propos
              <hr className="propos"/>
              </h1>
            </div>
          </div>
        </div>
      
      <Row className="p-0 p-xxl-5">
        {cards.map((c,k) => (
          <Col lg={4} className="p-0 p-xxl-5" key={k}>
            <Card className="bg-transparent p-0 p-xxl-5 border-0 shadow-none w-100" >
              <Card.Img variant="top" src={c.logo} className="p-5" style={{ width: '280px', height: '280px' }} />
              <Card.Body>
                <Card.Title className="h5 " >{c.title}</Card.Title>
                <hr className="propos"/>
                <Card.Text className="p"  align="center">{c.body}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}

    <Button type="button" onClick={() => history.push('/faq')} >
    En savoir plus
    </Button>

      </Row>
    </div>
  );
};

export default APropos;
