import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useState } from "react";
import "../../styles/login.scss";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar";

export default function LoginWithRegister({ setVerification }) {
  const [error, setError] = useState();
  const navigate = useNavigate();

  const validation = Yup.object({
    name: Yup.string()
      .required("Required")
      .matches(
        /^[aA-zZ\s0-9]+$/,
        "No se permiten caracteres especiales para este campo"
      ),
    password: Yup.string().required("Required"),
  });

  const USER = {
    name: "minnek",
    password: "minnek123",
  };

  return (
    <>
      <Navbar />

      <div className="containerLogin">
        <div className="formContainer">
          <h1 className="title">login</h1>

          <Formik
            initialValues={{ name: "", password: "" }}
            validationSchema={validation}
            onSubmit={(values) => {
              if (
                values.name === USER.name &&
                values.password === USER.password
              ) {
                setError("");
                setVerification(true);
                navigate("/task3/home");
              } else {
                setError("Usuario o contraseña incorrectos");
              }
            }}
          >
            {({ errors }) => (
              <Form className="form">
                <Field
                  type="text"
                  className="input"
                  placeholder="name"
                  id="name"
                  name="name"
                />
                <Field
                  type="password"
                  className="input"
                  placeholder="password"
                  id="password"
                  name="password"
                />

                <button type="submit" className="submitButton">
                  Login
                </button>

                <ErrorMessage
                  name="name"
                  component={() => {
                    <div className="errorMessage">{errors.name}</div>;
                  }}
                />

                <ErrorMessage
                  name="password"
                  component={() => {
                    <div className="errorMessage">{errors.password}</div>;
                  }}
                />

                {error && <div className="errorMessage">{error}</div>}
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </>
  );
}
