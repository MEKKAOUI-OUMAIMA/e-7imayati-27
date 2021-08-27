import React, { useEffect, useState } from "react";
import { Container, Row, Col, Form, Button, Image } from "react-bootstrap";
import { MdAccountCircle, MdError } from "react-icons/md";
import { FaEnvelope, FaLock, FaCheck, FaEye } from "react-icons/fa";
import LoginPicture from "../assets/img/loginpicture.svg";
import { Link } from "react-router-dom";
import { ex } from "../helpers/utils";
import Navbar from "../components/header/Navbar";
import axios from "axios";

const Login = () => {
  const [values, setValues] = React.useState({
    email: "",
    password: "",
    validEmail: null,
    showPassword: false,
  });
  const [request, setRequest] = React.useState({
    response: null,
    error: null,
  });

  useEffect(() => {
    if (values.email) {
      let testos = ex.validEmailRegex.test(values.email);
      if (testos) {
        setValues((v) => ({
          ...v,
          validEmail: true,
        }));
        global.console.log("Valid email : " + values.validEmail);
      } else {
        setValues((v) => ({
          ...v,
          validEmail: false,
        }));
        global.console.warn("Invalid email : " + values.validEmail);
      }
    } else {
      setValues((v) => ({
        ...v,
        validEmail: null,
      }));
    }
  }, [values.email, values.validEmail]);

  const showPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };
  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    global.console.log(values);
    const data = {
      email: values.email,
      password: values.password,
    };

    const baseURL = "https://odc-smart-city.herokuapp.com";
    axios
      .post(`${baseURL}/auth/login/`, data)
      .then((response) => {
        global.console.log(response);
        setRequest({ response: response.data });
      }).catch((err) => setRequest({ error: err }));
    global.console.log(request);
  };

  return (
    <>
      <header>
        <Navbar />
      </header>

      <Container>
        <Row>
          <Col>
          <pre>{JSON.stringify(request)}</pre>
          </Col>
        </Row>
        <Row>
          <Col lg={4}>
            <Image src={LoginPicture} fluid className="w-100" />
          </Col>
          <Col lg={8} className="p-5 h-100">
            <Form className="mx-3 my-auto" onSubmit={onSubmit}>
              <legend className="text-center my-4">Se connecter</legend>
              <div className="field">
                <p className="control has-icons-left has-icons-right mb-1">
                  <input
                    className={`input ${
                      values.validEmail === false ? "is-danger" : ""
                    }`}
                    type="email"
                    placeholder="Email"
                    onChange={handleChange("email")}
                    value={values.email}
                  />
                  <span className="icon is-small is-left">
                    <FaEnvelope />
                  </span>
                  <span className="icon is-small is-right">
                    {values.validEmail === false ? (
                      <MdError className="text-danger" />
                    ) : values.validEmail === true ? (
                      <FaCheck />
                    ) : (
                      ""
                    )}
                  </span>
                </p>
                {values.validEmail === false ? (
                  <p class="help is-danger">Email is invalid</p>
                ) : (
                  ""
                )}
              </div>
              <div className="field">
                <p className="control has-icons-left has-icons-right">
                  <input
                    className="input"
                    type={values.showPassword ? "text" : "password"}
                    placeholder="Password"
                    onChange={handleChange("password")}
                    value={values.password}
                  />
                  <span className="icon is-small is-left">
                    <FaLock />
                  </span>
                  <span
                    className="icon is-small is-right is-clickable"
                    onClick={showPassword}
                  >
                    <FaEye />
                  </span>
                </p>
              </div>
              <nav className="level">
                <div className="level-item has-text-centered">
                  <Form.Group className="my-5" controlId="formBasicCheckbox">
                    <Form.Check
                      type="checkbox"
                      label="Restez connecté"
                      className="text-primary fw-bolder"
                    />
                  </Form.Group>
                </div>
                <div className="level-item has-text-centered">
                  <a
                    href="/"
                    className="w-100 fw-bolder text-dark"
                    style={{ textDecoration: "none" }}
                  >
                    Mot de passe oublié?
                  </a>
                </div>
              </nav>
              <div className="field row">
                <p className="control col-6 mx-auto d-grid gap-2">
                  <Button
                    variant="primary"
                    className="btn-block text-white"
                    type="submit"
                    disabled={values.validEmail !== true}
                  >
                    Se connecter
                  </Button>
                </p>
              </div>
            </Form>
            <hr />
            <div className="field row">
              <p className="control col-6 mx-auto d-grid gap-2">
                <Link
                  className="w-100 fw-bolder text-center td-none"
                  to="/register"
                >
                  Créer un compte <MdAccountCircle className="mx-1" />
                </Link>
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Login;
