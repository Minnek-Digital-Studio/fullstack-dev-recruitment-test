import React, { useContext } from "react";
import dogContext from "../../context/contextDog";
import Navbar from "../Navbar";

export default function DogComponent() {
  const { dogGroup } = useContext(dogContext);

  return (
    <>
      <Navbar />
      <div className="container">
        <h1 className="title">Task 2</h1>
        <div className="gridContainer">
          {dogGroup.map((dog, index) => {
            return (
              <div className="gridItem" key={index}>
                <img src={dog.img} alt={dog.name} className="itemImg" />
                <h3 className="itemTitle">{dog.name}</h3>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
