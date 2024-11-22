import React from "react";
import { BrowserRouter as Router, Routes,Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import About from "./Components/Home/About";
import Contact from "./Components/Home/Contact";
import Popup from "./Components/Popup/Popup";

function App() {
  const [showPopup, setShowPopup] = React.useState(false);

  const HandlePopup = () =>{
 setShowPopup(true);
};
  return (
    <>
    <Router>
      <Navbar HandlePopup={HandlePopup} />
      <Popup showPopup={showPopup} setShowPopup={setShowPopup} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About HandlePopup={HandlePopup} />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
