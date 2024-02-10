import "./App.css";
import React, { useState } from "react";
import Navbar from "./Components/Navbar.js";
import TextForm from "./Components/TextForm.js";
import Footer from "./Components/Footer.js";
import Alert from "./Components/alert.js";
import About1 from "./Components/About1.js";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("dark");
  const [alert, setAlert] = useState(null);

  const toggleMode = () => {
    if (mode === "dark") {
      setMode("light");
      showAlert("Light mode is enabled", "success");
    } else {
      setMode("dark");
      showAlert("Dark mode is enabled", "success");
    }
  };

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
      <Router>
        <Navbar mode={mode} toggleMode={toggleMode} />
        <Routes>
          <Route
            exact
            path="/textUtils/"
            element={
              <>
                <Alert alert={alert} />
                <TextForm
                  showAlert={showAlert}
                  mode={mode}
                  heading="Try TextUtils - Word counter, Remove extra space and more."
                />
              </>
            }
          />
          <Route exact path="/learn" element={<About1 mode={mode} />} />
        </Routes>
        <Footer mode={mode} />
      </Router>
    </>
  );
}

export default App;
