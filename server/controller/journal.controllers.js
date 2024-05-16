import models from "../models/soloproject.model.js";
const { Journal } = models;

async function createJournalEntry(req, res) {
    try {
        const newJournalEntry = await Journal.create(req.body);
        res.json(newJournalEntry);
    } catch (error) {
        console.log(error);
        res.status(400).json(error);
    }
}

async function deleteJournalEntry(req, res) {
    try {
        const deletedJournalEntry = await Journal.findByIdAndDelete(req.params.id);
        res.json(deletedJournalEntry);
    } catch (error) {
        console.log(error);
        res.status(400).json(error);
    }
}

async function getAllJournalEntries(req, res) {
    try {
        const journalEntries = await Journal.find();
        res.json(journalEntries);
    } catch (error) {
        console.log(error);
        res.status(400).json(error);
    }
}

async function getOneJournalEntry(req, res) {
    try {
        const journalEntry = await Journal.findById(req.params.id);
        res.json(journalEntry);
    } catch (error) {
        console.log(error);
        res.status(400).json(error);
    }
}

async function updateJournalEntry(req, res) {
    try {
        const updatedJournalEntry = await Journal.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        res.json(updatedJournalEntry);
    } catch (error) {
        console.log(error);
        res.status(400).json(error);
    }
}

export {
    createJournalEntry,
    deleteJournalEntry,
    getAllJournalEntries,
    getOneJournalEntry,
    updateJournalEntry
};
