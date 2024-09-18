import React from "react";
import { Link } from "react-router-dom";



const Header: React.FC = () => {
  return (
    <header className="app-header">
      <div className="container">
        <h1 className="logo">Gerenciador de Orçamento</h1>
        <nav>
          <ul className="nav-links">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
            <li>
              <Link to="/sobre">Sobre</Link>
            </li>
            
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
