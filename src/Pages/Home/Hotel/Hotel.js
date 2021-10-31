import React from 'react';
import { Link } from 'react-router-dom';
import './Hotel.css';

const Hotel = ({ hotel }) => {
    const { id, name, cost, img } = hotel;
    return (
        <div className="text-center my-3 col-sm-12 col-md-6 col-lg-3">
            <div className="card h-100 card-style">
                <img src={img} alt="" />
                <h2>{name}</h2>
                <h4>Cost: {cost}</h4>
                <Link to={`/servicedetails/${id}`}>
                    <button className="btn btn-warning">Book Now</button>
                </Link>
            </div>
        </div>
    );
};

export default Hotel;