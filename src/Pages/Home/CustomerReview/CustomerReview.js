import React from 'react';

const CustomerReview = ({ review }) => {
    const { name, description, img } = review;
    return (
        <div className="text-center my-3 col-sm-12 col-md-6 col-lg-4">
            <div className="card h-100 pb-3">
                <img src={img} alt="" />
                <p className="p-3">{description}</p>
                <small>{name}</small>
            </div>
        </div>
    );
};

export default CustomerReview;