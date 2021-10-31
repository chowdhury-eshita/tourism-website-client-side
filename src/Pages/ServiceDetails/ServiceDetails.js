import React, { useEffect } from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { useParams } from 'react-router';
import './ServiceDetails.css';

const ServiceDetails = () => {
    const { serviceId } = useParams();
    const [service, setService] = useState({});
    const { register, handleSubmit, reset } = useForm();

    useEffect(() => {
        fetch(`https://scary-eyeballs-96536.herokuapp.com/services/${serviceId}`)
            .then(res => res.json())
            .then(data => setService(data));
    }, []);

    const onSubmit = (data) => {
        console.log(data)
        axios.post(`https://scary-eyeballs-96536.herokuapp.com/myOrders`, data)
            .then(res => {
                // console.log(res);
                if (res.data.insertedId) {
                    alert('added successfully');
                    reset();
                }
            })
    };
    return (
        <div className="container my-5 pt-5 d-flex">
            <div className="my-3 col-sm-12 col-md-6 col-lg-7">
                <h2>Details of: <strong className="text-warning"> {service.name}</strong></h2>
                <div className="card h-100">
                    <img src={service.img} alt="" />
                    <h4>Cost: {service.cost}</h4>
                    <p className="p-3">{service.description}</p>
                </div>

            </div>
            <div className="service my-5 pt-5 ms-5">
                <h1 className="text-success">Please Place Order</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input {...register('place')} placeholder="Place" />
                    <input {...register('cost')} placeholder="Cost" />
                    <input {...register('name', { required: true })} placeholder="Name" />
                    <input {...register('email', { required: true })} placeholder="Email" />
                    <input {...register('phone', { required: true })} placeholder="Phone" />
                    <textarea {...register('address', { required: true })} placeholder="Address" />
                    <input type="submit" />
                </form>
            </div>
        </div>
    );
};

export default ServiceDetails;