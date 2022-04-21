import React from "react";
import Navbar from "../components/Navbar.js";

export default function Task1() {
  const array = [
    "n",
    2,
    "$",
    "a",
    "l",
    9,
    "q",
    47,
    "i",
    "&",
    "a",
    "j",
    "%",
    "b",
    "z",
    8,
  ];

  const arrayReverse = array.reverse();

  const order = (index1, index2) => {
    const position = array[index1];
    array[index1] = array[index2];
    array[index2] = position;
  };

  arrayReverse.find((element, index) => {
    if (element === "&") order(index, 2);
    if (element === "$") order(index, 6);
    if (element === "%") order(index, 14);
  });

  return (
    <>
      <Navbar />
      <center>
        <h1>array</h1>

        <h2>
          {arrayReverse.map((item, index) => {
            return (
              <div key={index}>
                {index}: {item}
              </div>
            );
          })}
        </h2>
      </center>
    </>
  );
}
