import React, { useEffect, useState } from 'react';
import './MyOrders.css';
import useAuth from '../../hooks/useAuth';

const MyOrders = () => {
    const { user } = useAuth();
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        fetch('https://scary-eyeballs-96536.herokuapp.com/myOrders')
            .then(res => res.json())
            .then(data => setOrders(data));
    }, [])

    const admin = orders.filter(order => order.email === user.email);

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
            <h3 className="text-center fw-bold my-3 pt-5">My Orders:</h3>
            <div className="mb-5">
                {
                    admin.map(order => <div
                        key={order.id}
                        className="orders p-3"
                    >
                        <h3>{order.name}</h3>
                        <h5>{order.email}</h5>
                        <h4>Place: <strong>{order.place}</strong></h4>
                        <h4>Cost: {order.cost}</h4>
                        <button className="btn btn-outline-danger" onClick={() => handleDelete(order._id)}>Cancel Booking</button>
                    </div>)
                }
            </div>
        </div >
    );
};

export default MyOrders;