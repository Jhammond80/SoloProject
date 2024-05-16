


import React, { useState, useEffect } from 'react';
import { getOneJournalEntry, updateJournalEntry, deleteJournalEntry } from '../services/JournalService';
import { useNavigate, useParams } from 'react-router-dom';

function EditThought() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [title, setTitle] = useState('');
    const [thought, setThought] = useState('');
    const [errors, setErrors] = useState({});

    useEffect(() => {
        fetchThought();
    }, []);

    const fetchThought = () => {
        getOneJournalEntry(id)
            .then((res) => {
                setTitle(res.title);
                setThought(res.thought);
            })
            .catch((err) => {
                console.error('Error fetching thought:', err);
            });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        updateJournalEntry({ _id: id, title, thought })
            .then(() => {
                navigate('/home');
                
            })
            .catch((err) => {
                console.error('Error updating thought:', err);
                if (err.response && err.response.data && err.response.data.errors) {
                    setErrors(err.response.data.errors);
                } else {
                    setErrors({ message: 'An error occurred.' });
                }
                
            });
    };

    const handleDelete = () => {
        deleteJournalEntry(id)
            .then(() => {
                navigate('/home');
                
            })
            .catch((err) => {
                console.error('Error deleting thought:', err);
                // Handle error (e.g., show error message)
            });
    };

    return (
    <div className="container mx-auto py-8">
    <h1 className="text-3xl font-bold mb-8">Edit Thought</h1>
    <div className="w-1/2 mx-auto">
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
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md">Update</button>
            <button type="button" onClick={handleDelete} className="bg-red-500 text-white px-4 py-2 rounded-md ml-4">Delete</button>
        </form>
        <button onClick={() => navigate('/home')} className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md">Home</button>
    </div>
</div>

    );
}

export default EditThought;
