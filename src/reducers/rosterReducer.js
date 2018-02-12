import CONSTANTS from '../constants'
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
    selectedPage: 'MANAGER',
    rosters: []
}

const addPlayer = (newPlayer, state) => {
    return [ ...state.roster, newPlayer ]
}
const removePlayer = (removedPlayer, state) => {
    return state.roster.filter(player => player.name  !== removedPlayer.name)
}

export default function sampleReducer(state = initialState, action) {
    switch (action.type) {
        case CONSTANTS.SELECT_PAGE:
            return {
                ...state,
                selectedPage: action.payload
            }
        case CONSTANTS.ADD_PLAYER:
            return {
                ...state,
                roster: addPlayer(action.payload, state)
            }
        case CONSTANTS.REMOVE_PLAYER:
            return {
                ...state,
                roster: removePlayer(action.payload, state)
            }
        case `${CONSTANTS.FETCH_PLAYERS}_${CONSTANTS.FULFILLED}`:
            return {
                ...state,
                players: action.payload.data
            }
        case `${CONSTANTS.FETCH_ROSTERS}_${CONSTANTS.FULFILLED}` :
            return {
                ...state,
                rosters: action.payload.data
            }
        default:
            return state;
    }
}