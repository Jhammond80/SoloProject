import models from "../models/soloproject.model.js";
const { Goal } = models;

async function createGoal(req, res) {
    try {
        const newGoal = await Goal.create(req.body);
        res.json(newGoal);
    } catch (error) {
        console.log(error);
        res.status(400).json(error);
    }
}

async function deleteGoal(req, res) {
    try {
        const deletedGoal = await Goal.findByIdAndDelete(req.params.id);
        res.json(deletedGoal);
    } catch (error) {
        console.log(error);
        res.status(400).json(error);
    }
}

async function getAllGoals(req, res) {
    try {
        const goals = await Goal.find();
        res.json(goals);
    } catch (error) {
        console.log(error);
        res.status(400).json(error);
    }
}

async function getOneGoal(req, res) {
    try {
        const goal = await Goal.findById(req.params.id);
        res.json(goal);
    } catch (error) {
        console.log(error);
        res.status(400).json(error);
    }
}

async function updateGoal(req, res) {
    try {
        const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        res.json(updatedGoal);
    } catch (error) {
        console.log(error);
        res.status(400).json(error);
    }
}

export {
    createGoal,
    deleteGoal,
    getAllGoals,
    getOneGoal,
    updateGoal
};
