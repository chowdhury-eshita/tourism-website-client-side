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
            <h2 className="text-center text-primary my-3 pt-5">All Orders:</h2>
            <div className="mb-5">
                {
                    orders.map(order => <div
                        key={order.id}
                        className="p-3" style={{ backgroundColor: 'lightgoldenrodyellow' }}
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

export default ManageOrders;