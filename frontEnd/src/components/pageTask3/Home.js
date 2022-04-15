import React from "react";
import { ProductProvider } from "../../context/contextProduct";
import FormProduct from "../task3Components/FormProduct";
import SliderProduct from "../task3Components/SliderProduct";

export default function Home({ verification }) {
  return (
    <ProductProvider>
      {verification ? (
        <>
          <FormProduct />
          <SliderProduct />
        </>
      ) : (
        <h1>404</h1>
      )}
    </ProductProvider>
  );
}
