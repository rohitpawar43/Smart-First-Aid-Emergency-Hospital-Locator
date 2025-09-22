import React from 'react';
import { Link } from 'react-router-dom';
import { Stethoscope, Guitar as Hospital, UserPlus, AlertCircle } from 'lucide-react';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-wrapper">

        {/* App Name / Hero Text */}
        <section className="hero-section">
          <h1>
            <span className="highlight">Smart First Aid</span> & <br />
            Emergency Hospital Locator
          </h1>
          <p>
            Your trusted companion for <span className="emphasis">medical guidance</span> 
            and <span className="emphasis">emergency assistance</span>
          </p>
        </section>

        {/* Feature Cards */}
        <div className="feature-grid">
          <Link to="/symptoms" className="feature-link">
            <div className="feature-card">
              <div className="icon-circle">
                <Stethoscope className="icon" />
              </div>
              <h2>Symptom Checker</h2>
              <p>Check your symptoms and get instant guidance</p>
            </div>
          </Link>

          <Link to="/hospitals" className="feature-link">
            <div className="feature-card">
              <div className="icon-circle">
                <Hospital className="icon" />
              </div>
              <h2>Find Hospitals</h2>
              <p>Locate nearby hospitals with directions</p>
            </div>
          </Link>

          <Link to="/doctors" className="feature-link">
            <div className="feature-card">
              <div className="icon-circle">
                <UserPlus className="icon" />
              </div>
              <h2>Doctor Directory</h2>
              <p>Find and contact specialist doctors</p>
            </div>
          </Link>

          <Link to="/emergency" className="feature-link">
            <div className="feature-card">
              <div className="icon-circle">
                <AlertCircle className="icon" />
              </div>
              <h2>Emergency Guide</h2>
              <p>Quick steps for medical emergencies</p>
            </div>
          </Link>
        </div>

        {/* Emergency Numbers */}
        <section className="emergency-numbers">
          <h2>🚨 Emergency Numbers</h2>
          <div className="numbers-grid">
            <div className="number-box red-box">
              <h3>Emergency Services</h3>
              <p>911</p>
            </div>
            <div className="number-box yellow-box">
              <h3>Poison Control</h3>
              <p>1800-425-1213</p>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};

export default Home;
