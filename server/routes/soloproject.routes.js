import { Router } from 'express';
import { createJournalEntry, deleteJournalEntry, getAllJournalEntries, getOneJournalEntry, updateJournalEntry } from '../controller/journal.controllers.js';
import { createGoal, deleteGoal, getAllGoals, getOneGoal, updateGoal } from '../controller/goal.controllers.js';

const router = Router();

// Journal Routes
router.route('/journal')
    .post(createJournalEntry)
    .get(getAllJournalEntries);

router.route('/journal/:id')
    .get(getOneJournalEntry)
    .put(updateJournalEntry)
    .delete(deleteJournalEntry);

// Goal Routes
router.route('/goal')
    .post(createGoal)
    .get(getAllGoals);

router.route('/goal/:id')
    .get(getOneGoal)
    .put(updateGoal)
    .delete(deleteGoal);

export default router;
