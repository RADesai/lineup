import { FETCH_PLAYERS, FULFILLED, ADD_PLAYER, REMOVE_PLAYER, SELECT_PAGE } from '../constants'
const initialState = {
    roster: [
        {
            name: 'Point Guard'
        },
        {
            name: 'Shooting Guard'
        },
        {
            name: 'Small Forward'
        },
        {
            name: 'Power Forward'
        },
        {
            name: 'Center'
        },
        {
            name: 'BENCH'
        },
        {
            name: 'BENCH'
        },
        {
            name: 'BENCH'
        },
    ],
    selectedPage: 'MANAGER'
}

const addPlayer = (newPlayer, state) => {
    return [ ...state.roster, newPlayer ]
}
const removePlayer = (removedPlayer, state) => {
    return state.roster.filter(player => player.name  !== removedPlayer.name)
}

export default function sampleReducer(state = initialState, action) {
    switch (action.type) {
        case SELECT_PAGE:
            return {
                ...state,
                selectedPage: action.payload
            }
        case ADD_PLAYER:
            return {
                ...state,
                roster: addPlayer(action.payload, state)
            }
        case REMOVE_PLAYER:
            return {
                ...state,
                roster: removePlayer(action.payload, state)
            }
        case `${FETCH_PLAYERS}_${FULFILLED}`:
            return {
                ...state,
                players: action.payload.data
            }
        default:
            return state;
    }
}