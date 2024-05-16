

import React, { useState, useEffect } from 'react';
import { Button, Popover } from 'flowbite-react';
import { getAllJournalEntries } from '../services/JournalService';
import { getAllGoals, deleteGoal, updateGoal } from '../services/GoalService';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const Home = () => {
    const [thoughts, setThoughts] = useState([]);
    const [goals, setGoals] = useState([]);

    useEffect(() => {
        fetchThoughts();
        fetchGoals();
    }, []);

    const fetchThoughts = () => {
        getAllJournalEntries()
            .then((res) => {
                setThoughts(res);
            })
            .catch((err) => {
                console.error('Error fetching thoughts:', err);
            });
    };

    const fetchGoals = () => {
        getAllGoals()
            .then((res) => {
                setGoals(res);
            })
            .catch((err) => {
                console.error('Error fetching goals:', err);
            });
    };

    const markGoalCompleted = (id) => {
        const updatedGoals = goals.map((goal) => {
            if (goal._id === id) {
                return { ...goal, completed: true };
            }
            return goal;
        });

        updateGoal(updatedGoals.find((goal) => goal._id === id));
        setGoals(updatedGoals);
    };

    const removeGoal = (id) => {
        deleteGoal(id)
            .then(() => {
                setGoals(goals.filter((goal) => goal._id !== id));
            })
            .catch((err) => {
                console.error('Error deleting goal:', err);
            });
    };

    return (

    <div className="container mx-auto py-8 flex justify-center">
    <div className="w-full sm:w-1/2 lg:w-2/5 flex justify-center">
        <div className="w-full">
            <div className="text-center mb-8">
                <h1 className="text-3xl font-bold">Thoughts</h1>
            </div>
            <div className="grid gap-4">
                {thoughts.map((thought, index) => (
                    <div key={index} className="bg-white p-4 rounded shadow">
                        <Popover
                            content={
                                <div className="p-4 max-w-xs">
                                    <h2 className="text-lg font-semibold">{thought.title}</h2>
                                    <p>{thought.thought}</p>
                                    <Link to={`/editthought/${thought._id}`} className="text-blue-500 hover:underline">Edit</Link>
                                </div>
                            }
                            placement="right"
                        >
                            <Button>{thought.title}</Button>
                        </Popover>
                        <div>
                            <p>{new Date(thought.date).toLocaleDateString()}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
    <div className="w-full sm:w-1/2 lg:w-2/5 flex justify-center">
        <div className="w-full">
            <div className="text-center mb-8">
                <h1 className="text-3xl font-bold">Goals</h1>
            </div>
            <div className="grid gap-4">
                {goals.map((goal, index) => (
                    <div key={index} className="bg-white p-4 rounded shadow">
                        <Popover
                            content={
                                <div className="p-4 max-w-xs">
                                    <h2 className="text-lg font-semibold" style={{ textDecoration: goal.completed ? 'line-through' : 'none' }}>{goal.goal}</h2>
                                    <p style={{ color: goal.completed ? 'grey' : 'black' }}>{goal.description}</p>
                                    {goal.completed ? (
                                        <Button size="sm" onClick={() => removeGoal(goal._id)} className="bg-red-600 text-white">Remove</Button>
                                    ) : (
                                        <div className='button-group'>
                                            <Link to={`/editgoal/${goal._id}`}><Button size="sm">Edit</Button></Link>
                                            <Button size="sm" onClick={() => markGoalCompleted(goal._id)}>Done</Button>
                                        </div>
                                    )}
                                </div>
                            }
                            placement="right"
                        >
                            <Button>{goal.goal}</Button>
                        </Popover>
                        <div>
                            <p>{new Date(goal.date).toLocaleDateString()}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
</div>

    );
};

export default Home;
