import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Alert from "./components/Alert";
import About from "./components/About";
import NavBar from "./components/NavBar";
import TextForm from "./components/TextForm";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (title, message, type) => {
    setAlert({
      title: title,
      message: message,
      type: type,
    });
  };

  const toggleMode = () => {
    //this is a comment
    if (mode === "dark") {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode enabled", "", "success");
      document.title = "Text-Utils - Light Mode";
    } else {
      setMode("dark");
      document.body.style.backgroundColor = "#212529";
      showAlert("Dark Mode enabled", "", "success");
      document.title = "Text-Utils - Dark Mode";
    }
  };
  return (
    <>
      <NavBar title="Text-Utils" mode={mode} toggleMode={toggleMode} />
      <div className="container" style={{ height: "60px" }}>
        <Alert alert={alert} />
      </div>

      <Routes>
        <Route
          path="/"
          element={
            <TextForm title="Textform" mode={mode} showAlert={showAlert} />
          }
        />
        <Route path="/about" element={<About mode={mode} />} />
      </Routes>
    </>
  );
}

export default App;
