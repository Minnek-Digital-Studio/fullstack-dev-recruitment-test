import React from "react";
import { Link } from "react-router-dom";
import "../styles/nav.scss";

export default function Nav() {
  return (
    <div className="navContainer">
      <Link to="/task1" className="button">
        task 1
      </Link>
      <Link to="/task2" className="button">
        task 2
      </Link>
      <Link to="/task3" className="button">
        task 3
      </Link>
    </div>
  );
}
