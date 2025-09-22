import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import SymptomChecker from "./pages/SymptomChecker";
import HospitalFinder from "./pages/HospitalFinder";
import DoctorDirectory from "./pages/DoctorDirectory";
import EmergencyGuide from "./pages/EmergencyGuide";
import Footer from "./components/Footer"; 
import "./App.css";

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <main className="app-main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/symptoms" element={<SymptomChecker />} />
            <Route path="/hospitals" element={<HospitalFinder />} />
            <Route path="/doctors" element={<DoctorDirectory />} />
            <Route path="/emergency" element={<EmergencyGuide />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}


export default App;
