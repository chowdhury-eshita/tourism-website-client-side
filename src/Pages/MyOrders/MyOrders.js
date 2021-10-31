import React, { useEffect, useState } from 'react';
import Services from '../Home/Services/Services';
import './MyOrders.css';

const MyOrders = () => {
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/myOrders')
            .then(res => res.json())
            .then(data => setOrders(data));
    }, [])

    const handleDelete = id => {
        const url = `http://localhost:5000/myOrders/${id}`;
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
            <h2 className="text-center my-3 pt-5">My Orders:</h2>
            <div className="">
                {
                    orders.map(order => <div
                        key={order.id}
                        className="orders p-3"
                    >
                        <h2>{order.name}</h2>
                        <h4>{order.email}</h4>
                        <h3>Place: {order.place}</h3>
                        <h4>Cost: {order.cost}</h4>
                        <button onClick={() => handleDelete(order._id)}>Remove Order</button>
                    </div>)
                }
            </div>
        </div>
    );
};

export default MyOrders;