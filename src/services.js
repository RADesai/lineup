import axios from 'axios';

// GET all models from db
export const fetchPlayers = () => axios.get('/api/players')

// POST player to db
export const addPlayer = player => axios.post('/api/players', player)

// POST roster to db
// export const createRoster = roster => axios.post('/api/rosters', roster)
export const createRoster = roster => {
    console.log("Roster:");
    console.log(roster); // undefined
    return axios.post('/api/rosters', roster)
}

// DELETE given model from db
export const removePlayer = playerId => axios.delete(`/api/players/${playerId}`)