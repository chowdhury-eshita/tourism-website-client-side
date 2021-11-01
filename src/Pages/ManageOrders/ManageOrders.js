import React, { useEffect, useState } from 'react';

const ManageOrders = () => {
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        fetch('https://scary-eyeballs-96536.herokuapp.com/myOrders')
            .then(res => res.json())
            .then(data => setOrders(data));
    }, [])
    const handleDelete = id => {
        const url = `https://scary-eyeballs-96536.herokuapp.com/myOrders/${id}`;
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount) {
                    alert('deleted');
                    const remaining = orders.filter(order => order._id !== id);
                    setOrders(remaining);
                }
            });
    }
    return (
        <div className="container mt-5">
            <h3 className="text-center fw-bold my-3 pt-5">All Orders:</h3>
            <div className="mb-5">
                {
                    orders.map(order => <div
                        key={order.id}
                        className="p-3" style={{ backgroundColor: 'lightgray' }}
                    >
                        <h3>{order.name}</h3>
                        <h6 className="text-primary">{order.email}</h6>
                        <h4>Place: <strong>{order.place}</strong></h4>
                        <button className="btn btn-outline-danger" onClick={() => handleDelete(order._id)}>Remove Booking</button>
                    </div>)
                }
            </div>
        </div>
    );
};

export default ManageOrders;