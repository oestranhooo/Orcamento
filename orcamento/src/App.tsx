import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


import Sobre from "./pages/sobre/sobre";
import Dashboard from "./pages/dashbord/dashbord";
import Home from "./pages/home/home";
import Header from "./components/header";

const App: React.FC = () => {
  return (
    <Router>
      <div>
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/sobre" element={<Sobre />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
