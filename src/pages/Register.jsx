import React, { useEffect } from "react";
import { Container, Row, Col, Form, Button, Image } from "react-bootstrap";
import { MdAccountCircle, MdError, MdPersonOutline } from "react-icons/md";
import { FaEnvelope, FaLock, FaCheck, FaEye } from "react-icons/fa";
import RegisterPicture from "../assets/img/registerpicture.svg";
import { ex } from "../helpers/utils";
import axios from "axios";
import Navbar from "../components/header/Navbar";

const Register = () => {
  const [values, setValues] = React.useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    password2: "",
    validEmail: null,
    showPassword: false,
  });
  const [request, setRequest] = React.useState({
    response: null,
    error: null,
  });

  useEffect(() => {
    if (values.email) {
      let check = ex.validEmailRegex.test(values.email);
      if (check) {
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
    global.alert(values);
    const data = {
      email: values.email,
      first_name: values.firstname,
      last_name: values.lastname,
      password: values.password,
    };

    const baseURL = "https://odc-smart-city.herokuapp.com";
    axios
      .post(`https://odc-smart-city.herokuapp.com/auth/registration/`, data)
      .then((response) => {
        setRequest({ response: response });
      })
      .catch((err) => setRequest({ error: err }));
  };
    
  return (
    <>
      <header>
        <Navbar/>
      </header>
      <Container>
        <Row>
          <Col lg={4}>
            <Image src={RegisterPicture} fluid className="w-100" />
          </Col>
          <Col lg={8} className="p-5 h-100">
            <Form className="mx-3 my-auto" onSubmit={onSubmit}>
              <legend className="text-center mt-0 mb-3">Cr??er un compte</legend>
              <div className="field">
                <p className="control has-icons-left has-icons-right mb-1">
                  <input
                    className={`input`}
                    type="text"
                    placeholder="Pr??nom"
                    onChange={handleChange("firstname")}
                    value={values.firstname}
                  />
                  <span className="icon is-small is-left">
                    <MdPersonOutline />
                  </span>
                </p>
              </div>

              <div className="field">
                <p className="control has-icons-left has-icons-right mb-1">
                  <input
                    className={`input`}
                    type="text"
                    placeholder="Nom"
                    onChange={handleChange("lastname")}
                    value={values.lastname}
                  />
                  <span className="icon is-small is-left">
                    <MdPersonOutline />
                  </span>
                </p>
              </div>

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
                  <p className="help is-danger">Email is invalid</p>
                ) : (
                  ""
                )}
              </div>

              <div className="field">
                <p className="control has-icons-left has-icons-right">
                  <input
                    className="input"
                    type={values.showPassword ? "text" : "password"}
                    placeholder="Mot de passe"
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

              <div className="field">
                <p className="control has-icons-left has-icons-right">
                  <input
                    className="input"
                    type={values.showPassword ? "text" : "password"}
                    placeholder="Confirmez votre mot de passe"
                    onChange={handleChange("password2")}
                    value={values.password2}
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

              <div className="field row">
                <p className="control col-6 mx-auto d-grid gap-2">
                  <Button
                    variant="primary"
                    className="btn-block text-white"
                    type="submit"
                    disabled={values.validEmail !== true}
                  >
                    Cr??er un compte
                  </Button>
                </p>
              </div>
            </Form>
            <hr />
            <div className="field row">
              <p className="control col-6 mx-auto d-grid gap-2">
                <a
                  href="/login"
                  className="w-100 fw-bolder text-center td-none"
                >
                  Se connecter <MdAccountCircle className="mx-1" />
                </a>
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Register;
