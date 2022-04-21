import React, { useContext } from "react";
import ProductContext from "../../context/contextProduct";
import "../../styles/home.scss";
import Slider from "react-slick";

export default function SliderProduct() {
  const { product } = useContext(ProductContext);

  const settingsSlider = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: product.length > 3 ? 3 : product.length,
    slidesToScroll: 1,
    className: "slider",
  };

  return (
    <div className="sliderContainer">
      {product.length === 0 ? (
        <h1 className="nada">si no hay productos</h1>
      ) : (
        <Slider {...settingsSlider}>
          {product.map((item) => {
            return (
              <div className="sliderItem" key={item}>
                <img src={item.Imagen?.url} className="img" alt={item.Name} />
                <h3 className="titleProduct">{item.Name}</h3>
                <span className="price">{item.Price}</span>
                <p className="description">{item.Description}</p>
              </div>
            );
          })}
        </Slider>
      )}
    </div>
  );
}
