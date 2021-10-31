import React, { useEffect, useState } from 'react';
import Hotel from '../Hotel/Hotel';

const Hotels = () => {
    const [hotels, setHotels] = useState([]);
    useEffect(() => {
        fetch('https://scary-eyeballs-96536.herokuapp.com/hotels')
            .then(res => res.json())
            .then(data => setHotels(data));
    }, [])
    return (
        <div className="container mt-5">
            <h2 className="text-center fw-bold text-warning">Hotels and Resorts</h2>
            <div className="row">
                {
                    hotels.map(hotel => <Hotel
                        key={hotel.id}
                        hotel={hotel}
                    ></Hotel>)
                }
            </div>
        </div>
    );
};

export default Hotels;