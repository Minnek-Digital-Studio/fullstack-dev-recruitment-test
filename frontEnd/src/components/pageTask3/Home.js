import React from "react";
import { ProductProvider } from "../../context/contextProduct";
import FormProduct from "../task3Components/FormProduct";
import SliderProduct from "../task3Components/SliderProduct";
import "../../styles/home.scss";
import { Link } from "react-router-dom";

export default function Home({ verification }) {
  return (
    <ProductProvider>
      {verification !== "false" ? (
        <>
          <FormProduct verification={verification} />
          <SliderProduct />
        </>
      ) : (
        <div className="noFoundContainer">
          <h1>tienes que iniciar sesion para acceder</h1>
          <Link to="/task3" className="btnVolver">
            volver
          </Link>
        </div>
      )}
    </ProductProvider>
  );
}
