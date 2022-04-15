import React from "react";
import "../styles/task2.scss";
import { DogProvider } from "../context/contextDog";
import DogComponent from "../components/pageTask2/DogComponent";

export default function Task2() {
  return (
    <DogProvider>
      <DogComponent />
    </DogProvider>
  );
}
