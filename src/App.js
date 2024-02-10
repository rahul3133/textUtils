import "./App.css";
import React, { useState } from "react";
import Navbar from "./Components/Navbar.js";
import TextForm from "./Components/TextForm.js";
import Footer from "./Components/Footer.js";
import Alert from "./Components/alert.js";
import About1 from "./Components/About1.js";
import { BrowserRouter as BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("dark");

  const toggleMode = () => {
    if (mode === "dark") {
      setMode("light");
      showAlert("Light mode is enabled", "success");
    } else {
      setMode("dark");
      showAlert("Dark mode is enabled", "success");
    }
  };

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1000);
  };

  return (
    <>
      <BrowserRouter>
        <Navbar mode={mode} toggleMode={toggleMode}></Navbar>
        <Routes>
          <Route exact 
            path="/textUtils/"
            element={
              ((<Alert alert={alert}></Alert>),
              (
                <TextForm
                  showAlert={showAlert}
                  mode={mode}
                  heading="Try TextUtils - Word counter, Remove extra space and more."
                ></TextForm> 
              ))
            }
          ></Route>
          <Route exact path="/learn" element={<About1 mode={mode}/>}></Route>
        </Routes>
        <Footer mode={mode}></Footer>
      </BrowserRouter>
    </>
  );
}

export default App;
