import React, { useState } from 'react';
import { createJournalEntry } from '../services/JournalService';
import { useNavigate } from 'react-router-dom';

function CreateThought() {
    const navigate = useNavigate();
    const [title, setTitle] = useState('');
    const [thought, setThought] = useState('');
    const [errors, setErrors] = useState({});

    const handleSubmit = (e) => {
        e.preventDefault();
        createJournalEntry({ title, thought })
            .then((res) => {
                console.log(res);
                navigate('/home');
            })
            .catch((err) => {
                console.error('Error creating thought:', err);
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
            <h1 className="text-3xl font-bold mb-8">New Thought</h1>
            <div  className="w-1/2 mx-auto">
            <form onSubmit={handleSubmit} className="mb-4">
                <div className="mb-4">
                    <label htmlFor="title" className="block text-lg font-medium">Title</label>
                    <input id="title" type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" className="border border-gray-300 rounded-md px-3 py-2 w-full" />
                    {errors.title && <p style={{ color: 'red' }}>{errors.title.message}</p>}
                </div>
                <div className="mb-4">
                    <label htmlFor="thought" className="block text-lg font-medium">Thought</label>
                    <textarea id="thought" value={thought} onChange={(e) => setThought(e.target.value)} placeholder="Your thought..." className="border border-gray-300 rounded-md px-3 py-2 w-full h-32"></textarea>
                    {errors.thought && <p style={{ color: 'red' }}>{errors.thought.message}</p>}
                </div>
                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md">Create</button>
            </form>
            <button onClick={() => navigate('/home')} className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md">Cancel</button>
            </div>
        </div>
    );
}

export default CreateThought;



