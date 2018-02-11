import { SELECT_PAGE, FETCH_PLAYERS, ADD_PLAYER, REMOVE_PLAYER, CREATE_ROSTER} from '../constants'
import * as service from '../services'

const actions = {
    selectPage: selectedPage => ({
        type: SELECT_PAGE,
        payload: selectedPage
    }),
    fetchPlayers: () => ({
        type: FETCH_PLAYERS,
        payload: service.fetchPlayers()
    }),
    addPlayer: player => ({
        type: ADD_PLAYER,
        payload: player
    }),
    removePlayer: player => ({
        type: REMOVE_PLAYER,
        payload: player
    }),
    createRoster: ({ name }, roster) => ({
        type: CREATE_ROSTER,
        payload: service.createRoster({ name, roster })
    })
};

export default actions;