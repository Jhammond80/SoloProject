import axios from 'axios';

const http = axios.create({
    baseURL: 'http://localhost:8000/api'
});

function createGoal(goal) {
    return http.post('/goal', goal)
        .then(res => res.data)
        .catch(err => {
            throw err;
        });
}

function deleteGoal(id) {
    return http.delete(`/goal/${id}`)
        .then(res => res.data)
        .catch(err => {
            throw err;
        });
}

function getAllGoals() {
    return http.get('/goal')
        .then(res => res.data)
        .catch(err => {
            throw err;
        });
}

function getOneGoal(id) {
    return http.get(`/goal/${id}`)
        .then(res => res.data)
        .catch(err => {
            throw err;
        });
}

function updateGoal(goal) {
    return http.put(`/goal/${goal._id}`, goal)
        .then(res => res.data)
        .catch(err => {
            throw err;
        });
}

export {
    createGoal,
    deleteGoal,
    getAllGoals,
    getOneGoal,
    updateGoal
};
