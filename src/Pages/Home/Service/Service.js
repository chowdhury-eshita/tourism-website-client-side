import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css';

const Service = ({ service }) => {
    const { _id, name, cost, description, img } = service;
    return (
        <div className="text-center my-3 col-sm-12 col-md-6 col-lg-4">
            <div className="card h-100 card-style">
                <img src={img} alt="" />
                <h2>{name}</h2>
                <h4>Cost: {cost}</h4>
                <p className="p-3">{description}</p>
                <Link to={`/servicedetails/${_id}`}>
                    <button className="btn btn-warning">Book Now</button>
                </Link>
            </div>
        </div>
    );
};

export default Service;