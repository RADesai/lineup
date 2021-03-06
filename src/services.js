import axios from 'axios';
// import { deleteRoster } from '../actions/actions';

// GET all models from db
export const fetchPlayers = () => axios.get('/api/players')

// POST player to db
export const addPlayer = player => axios.post('/api/players', player)

// POST roster to db
export const createRoster = roster => axios.post('/api/rosters', roster)

// GET all models from db
export const fetchRosters = () => axios.get('/api/rosters')

// DELETE given model from db
export const deleteRoster = rosterId => {
    // actiondeleteRoster(rosterId);
    return axios.delete(`/api/rosters/${rosterId}`)
}

// DELETE given model from db
export const removePlayer = playerId => axios.delete(`/api/players/${playerId}`)