import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Stethoscope, Guitar as Hospital, AlertCircle } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-content">
          <Link to="/" className="navbar-brand">
            <Heart className="icon-lg" />
            <span className="brand-title">Smart First Aid & Emergency Hospital Locator</span>
          </Link>

          <div className="navbar-links">
            <Link to="/symptoms" className="navbar-link">
              <Stethoscope className="icon-sm" />
              <span>Symptom Emergency Guidelines</span>
            </Link>
            <Link to="/hospitals" className="navbar-link">
              <Hospital className="icon-sm" />
              <span>Find Hospitals</span>
            </Link>
            <Link to="/doctors" className="navbar-link">
              <AlertCircle className="icon-sm" />
              <span>Doctors</span>
            </Link>
            <Link to="/emergency" className="navbar-link">
              <AlertCircle className="icon-sm" />
              <span>Emergency Guide</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
