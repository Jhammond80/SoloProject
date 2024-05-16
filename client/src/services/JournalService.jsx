import axios from 'axios';

const http = axios.create({
    baseURL: 'http://localhost:8000/api'
});

function createJournalEntry(journalEntry) {
    return http.post('/journal', journalEntry)
        .then(res => res.data)
        .catch(err => {
            throw err;
        });
}

function deleteJournalEntry(id) {
    return http.delete(`/journal/${id}`)
        .then(res => res.data)
        .catch(err => {
            throw err;
        });
}

function getAllJournalEntries() {
    return http.get('/journal')
        .then(res => res.data)
        .catch(err => {
            throw err;
        });
}

function getOneJournalEntry(id) {
    return http.get(`/journal/${id}`)
        .then(res => res.data)
        .catch(err => {
            throw err;
        });
}

function updateJournalEntry(journalEntry) {
    return http.put(`/journal/${journalEntry._id}`, journalEntry)
        .then(res => res.data)
        .catch(err => {
            throw err;
        });
}

export {
    createJournalEntry,
    deleteJournalEntry,
    getAllJournalEntries,
    getOneJournalEntry,
    updateJournalEntry
};