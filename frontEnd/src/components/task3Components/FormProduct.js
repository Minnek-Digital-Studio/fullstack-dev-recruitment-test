import React, { useContext } from "react";
import "../../styles/home.scss";
import NavBar from "../Navbar";
import { Field, Form, Formik } from "formik";
import ProductContext from "../../context/contextProduct";

export default function FormProduct() {
  const { createProduct, setReload, reload } = useContext(ProductContext);

  return (
    <>
      <NavBar />
      <div className="formContainer">
        <a
          href="/task3"
          className="btnVolver"
          onClick={() => localStorage.setItem("verification", false)}
        >
          cerrar sesion
        </a>

        <h1 className="title">Create Product</h1>

        <Formik
          initialValues={{
            Name: "",
            Price: 0,
            Description: "",
            image: null,
            Imagen: null,
          }}
          onSubmit={(values, { resetForm }) => {
            const { image, ...resto } = values;
            createProduct(resto);
            setReload(!reload);
            resetForm();
          }}
        >
          {({ setFieldValue }) => (
            <Form className="form">
              <Field
                type="text"
                className="input"
                placeholder="Name"
                name="Name"
              />
              <Field
                type="number"
                className="input"
                placeholder="Price"
                name="Price"
              />

              <Field
                component="textarea"
                className="input"
                placeholder="Description"
                name="Description"
                rows="3"
              />

              <Field
                type="file"
                className="inputImage"
                placeholder="Imagen"
                name="image"
                onChange={(e) => {
                  setFieldValue("Imagen", e.target.files[0]);
                }}
              />

              <button type="submit" className="submitButton">
                Send
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
}
