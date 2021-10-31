import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import './AddService.css';
const AddService = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = (data) => {
        console.log(data)
        axios.post('http://localhost:5000/services', data)
            .then(res => {
                // console.log(res);
                if (res.data.insertedId) {
                    alert('added successfully');
                    reset();
                }
            })
    };
    return (
        <div className="add-service my-5 pt-5">
            <h1 className="text-success">Please Add a Service</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register('name')} placeholder="Name" />
                <textarea {...register('description', { required: true })} placeholder="Description" />
                <input {...register('price')} placeholder="Price" />
                <input {...register('img')} placeholder="img URL" />
                <input type="submit" />
            </form>
        </div>
    );
};

export default AddService;