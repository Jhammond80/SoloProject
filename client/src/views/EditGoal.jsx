// EditGoal.jsx

import React, { useState, useEffect } from 'react';
import { getOneGoal, updateGoal } from '../services/GoalService';
import { useNavigate, useParams } from 'react-router-dom';

function EditGoal() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [goal, setGoal] = useState('');
    const [description, setDescription] = useState('');
    const [errors, setErrors] = useState({});

    useEffect(() => {
        fetchGoal();
    }, []);

    const fetchGoal = () => {
        getOneGoal(id)
            .then((res) => {
                setGoal(res.goal);
                setDescription(res.description);
            })
            .catch((err) => {
                console.error('Error fetching goal:', err);
            });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        updateGoal({ _id: id, goal, description })
            .then(() => {
                navigate('/home');
            })
            .catch((err) => {
                console.error('Error updating goal:', err);
                if (err.response && err.response.data && err.response.data.errors) {
                    setErrors(err.response.data.errors);
                } else {
                    setErrors({ message: 'An error occurred.' });
                }
                // Handle error (e.g., show error message)
            });
    };

    return (
        <div className="container mx-auto py-8">
            <h1 className="text-3xl font-bold mb-8">Edit Goal</h1>
            <div  className="w-1/2 mx-auto">
                <form onSubmit={handleSubmit} className="mb-4">
                    <div className="mb-4">
                        <label htmlFor="goal" className="block text-lg font-medium">Goal</label>
                        <input id="goal" type="text" value={goal} onChange={(e) => setGoal(e.target.value)} placeholder="Goal" className="border border-gray-300 rounded-md px-3 py-2 w-full" />
                        {errors.goal && <p style={{ color: 'red' }}>{errors.goal.message}</p>}
                    </div>
                    <div className="mb-4">
                        <label htmlFor="description" className="block text-lg font-medium">Description</label>
                        <textarea id="description" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description..." className="border border-gray-300 rounded-md px-3 py-2 w-full h-32"></textarea>
                        {errors.description && <p style={{ color: 'red' }}>{errors.description.message}</p>}
                    </div>
                    <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md">Update</button>
                    
                </form>
                <button onClick={() => navigate('/home')} className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md">Home</button>
            </div>
        </div>
    );
}

export default EditGoal;
