import { useState } from "react";
import "./App.css";
import About from "./components/About";
import Alerts from "./components/Alerts";
import Navbar from "./components/Navbar";
import TextArea from "./components/TextArea";
import { Routes, Route } from "react-router-dom";

function App() {
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#495057";
      document.body.style.color = "#FFFFFF";
      showAlert(" Dark Mode has been enable", "Success ");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "#FFFFFF";
      document.body.style.color = "#000000";
      showAlert(" Dark Mode has been disabled", "Success ");
    }
  };
  const [mode, setMode] = useState("light"); //by default light mode, passing it to navbar
  const [alert, setAlert] = useState(null);
  //show alert fn to set the type and msg of alert-state thru the setAlert method
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      atype: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1000);
  };
  return (
    <>
      {/* Creating a Navbar component and passing the property of navtitle*/}
      <Navbar
        navTitle="First React APP"
        navAbout="About Us"
        mode={mode}
        toggleMode={toggleMode}
      />

      {/* <Navbar/>  if we dont pass any props then default props will be displayed*/}
      <Alerts alert={alert} />
      {/* Passing alert(state) into the alert(props of Alerts.js component) */}
      <Routes>
        <Route exact path="/" element={<TextArea />} />
        <Route exact path="about" element={<About mode={mode} />} />
      </Routes>
      {/* Use "exact path" instead of "path" always */}
    </>
  );
}

export default App;
