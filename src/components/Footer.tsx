import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Phone, Mail } from 'lucide-react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">

                <div className="footer-brand">
                    <Heart className="footer-icon" /><span>Smart First Aid</span>
                </div>

                <div className="footer-links">
                    <h4>Quick Links</h4>
                    <div className="footer-links-list">
                        <Link to="/">Home</Link>
                        <Link to="/symptoms">Symptom Checker</Link>
                        <Link to="/hospitals">Find Hospitals</Link>
                        <Link to="/doctors">Doctors</Link>
                        <Link to="/emergency">Emergency Guide</Link>
                    </div>
                </div>

                <div className="footer-contact">
                    <h4>Contact Us</h4>
                    <div className="contact-item">
                        <Phone className="contact-icon" />
                        <span>+91 7744983415.</span>
                    </div>
                    <div className="contact-item">
                        <Mail className="contact-icon" />
                        <span>rohitpawar93407@gmail.com</span>
                    </div>
                </div>

            </div>

            <div className="footer-bottom">
                <p>© {new Date().getFullYear()} Rohit Pawar. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
