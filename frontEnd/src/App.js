import Task1 from "./pages/Task1.js";
import Task2 from "./pages/Task2.js";
import Login from "./components/pageTask3/Login.js";
import Home from "./components/pageTask3/Home.js";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Nav from "./pages/Nav.js";
import { useState } from "react";

function App() {
  const [verification, setVerification] = useState(
    localStorage.getItem("verification")
  );

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/task1" element={<Task1 />} />
          <Route exact path="/task2" element={<Task2 />} />
          <Route
            exact
            path="/task3"
            element={
              // verification === false ? (
              <Login setVerification={setVerification} />
              // ) : (
              //   <Navigate to="/task3/home" />
              // )
            }
          />
          <Route
            exact
            path="/task3/home"
            element={<Home verification={verification} />}
          />
          <Route exact path="/" element={<Nav />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
