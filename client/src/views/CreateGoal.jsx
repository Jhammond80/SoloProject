import React, { useState } from 'react';
import { createGoal } from '../services/GoalService';
import { useNavigate } from 'react-router-dom';

function CreateGoal() {
    const navigate = useNavigate();
    const [goal, setGoal] = useState('');
    const [description, setDescription] = useState('');
    const [errors, setErrors] = useState({});

    const handleSubmit = (e) => {
        e.preventDefault();
        createGoal({ goal, description })
            .then((res) => {
                console.log(res);
                console.log(res.data);
                navigate('/home');
                // Optionally, you can redirect to another page or show a success message
            })
            .catch((err) => {
                console.error('Error creating goal:', err);
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
            <h1 className="text-3xl font-bold mb-8">New Goal</h1>
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
                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md">Create</button>
            </form>
            <button onClick={() => navigate('/home')} className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md">Cancel</button>
            </div>
        </div>
    );
}

export default CreateGoal;
