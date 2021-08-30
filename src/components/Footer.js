import React from "react";
import "./Footer.css";
import { Button } from "./Button";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
import HeaderLogo from "../assets/img/headerlogo.svg";
import {
  FaFacebookSquare,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="footerStyle">
      <img className="group-13" src={HeaderLogo} width="177vw" height="51vh" />
      <Row className="content">
        <Col md={4}>
          <p>
            Projet développé dans le cadre du programme Orange Digital Center
            pour l'innovation technologique et sociale.
          </p>
        </Col>
        <Col  md={2}>
          <p > Social media</p>
          <ul className="list-unstyled">
            <li>
              <a href="#!" style={{ textDecoration: "none" }}>
                Facebook
              </a>
            </li>
            <li>
              <a href="#!" style={{ textDecoration: "none" }}>
                Instagram
              </a>
            </li>
            <li>
              <a href="#!" style={{ textDecoration: "none" }}>
                Linkedin
              </a>
            </li>
          </ul>
        </Col>
        <Col md={2}>
          <p>Informations</p>
          <ul className="list-unstyled">
            <li>
              <a href="#!" style={{ textDecoration: "none" }}>
                à propos
              </a>
            </li>
            <li>
              <a href="#!" style={{ textDecoration: "none" }}>
                Contactez-nous
              </a>
            </li>
            <li>
              <a href="#!" style={{ textDecoration: "none" }}>
                Faq
              </a>
            </li>
          </ul>
        </Col>
        <Col md={2}>
          <p>Partenaires</p>
          <ul className="list-unstyled">
            <li>
              <a href="#!" style={{ textDecoration: "none" }}>
                Orange
              </a>
            </li>
            <li>
              <a href="#!" style={{ textDecoration: "none" }}>
                
              </a>
            </li>
            <li>
              <a href="#!" style={{ textDecoration: "none" }}>
                Linkedin
              </a>
            </li>
          </ul>
        </Col>
        <Col md={2}>
          <p>Social media</p>
          <ul className="list-unstyled">
            <li>
              <a href="#!" style={{ textDecoration: "none" }}>
                Facebook
              </a>
            </li>
            <li>
              <a href="#!" style={{ textDecoration: "none" }}>
                Instagrams
              </a>
            </li>
            <li>
              <a href="#!" style={{ textDecoration: "none" }}>
                Linkedin
              </a>
            </li>
          </ul>
        </Col>
      </Row>
      <div class="social-icons ">
        <Link
          class="social-icon-link facebook"
          to="/"
          target="_blank"
          aria-label="Facebook"
        >
          <span className="face">
            <FaFacebookSquare />
          </span>
        </Link>
        <Link
          class="social-icon-link facebook"
          to="/"
          target="_blank"
          aria-label="Facebook"
        >
          <span className="face">
            <FaTwitter />
          </span>
        </Link>
        <Link
          class="social-icon-link facebook"
          to="/"
          target="_blank"
          aria-label="Facebook"
        >
          <span className="face">
            <FaYoutube />
          </span>
        </Link>
        <Link
          class="social-icon-link instagram"
          to="/"
          target="_blank"
          aria-label="Instagram"
        >
          <span className="insta">
            <FaInstagram />
          </span>
        </Link>
        <Link
          class="social-icon-link t"
          to="/"
          target="_blank"
          aria-label="Linkedin"
        >
          <span>
            <FaLinkedin />
          </span>
        </Link>
      </div>
      <hr className="hourni"/>
      <div className="footer-copyright text-center">
        ©2021 e-7imayati. All rights reserved.
      </div>
    </footer>
  );
}
export default Footer;
