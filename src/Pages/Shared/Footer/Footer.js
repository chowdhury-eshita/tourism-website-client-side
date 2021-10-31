import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return (
        <>
            <div className="footer pt-3">
                <div>
                    <h4 className="mt-5">Contact Us</h4>
                    <h3>Tour Mate</h3>
                    <p>KochuKhet, Dhaka</p>
                    <p className="text-success">Call: 304032</p>
                    <p className="text-success">Mail: tourmate@gmail.com</p>
                </div>
                <div className="link-container">
                    <Link className="link" to="/home">Home</Link >
                    <Link className="link" to="/myorders">My orders</Link >
                    <Link className="link" to="/about">About</Link >
                    <Link className="link" to="/login">Login</Link >
                </div>
                <p className="text-secondary">Copuright version 3.4.1</p>
            </div>

        </>
    );
};

export default Footer;