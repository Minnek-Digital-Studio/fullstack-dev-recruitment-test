import React from "react";
import { BrowserRouter, Link } from "react-router-dom";
import "../styles/navBar.scss";

export default function Navbar() {
  return (
    <nav className="navBar">
      <ul className="optionGroup">
        <Link to="/task1" className="buttons">
          task1
        </Link>
        <Link to="/task2" className="buttons">
          task2
        </Link>
        <Link to="/task3" className="buttons">
          task3
        </Link>
      </ul>
    </nav>
  );
}
