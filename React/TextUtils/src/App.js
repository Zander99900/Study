import "./App.css";
import React, { useState } from "react";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import Alerts from "./Components/Alerts";
import About from "./Components/About";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };
  const [mode, setmode] = useState("light");
  const ToggleButton = () => {
    if (mode === "light") {
      setmode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark mode has been enabled", "success");
      document.title = "TextUtil - Dark Mode";
      // Flashing Notification
      // setInterval(() => {
      //   document.title = "TextUtil - Awesome";
      // }, 2000);
      // setInterval(() => {
      //   document.title = "TextUtil - New Notification";
      // }, 1500);
    } else {
      setmode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
      document.title = "TextUtil - Light Mode";
    }
  };

  return (
    //This will help organise codes in a clean way
    <>
    <Router>
      <Navbar
        Title="TextUtils"
        aboutText="About us"
        mode={mode}
        ToggleButton={ToggleButton}
      />
      <Alerts alert={alert} />
          <Routes>
            <Route path="/about" element={<About mode={mode}/>}/>
            <Route path="/" element={<TextForm heading="Enter text to analyze"  mode={mode} showAlert={showAlert} />}/>
          </Routes>
      </Router>
    </>
  );
}

export default App;
