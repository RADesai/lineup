import CONSTANTS from '../constants'
const initialState = {
    roster: CONSTANTS.DEFAULT_ROSTER,
    selectedPage: CONSTANTS.MANAGER_PAGE,
    rosters: []
}

const removePlayer = (removedPlayer, state) => {
    return state.roster.filter(player => player.name  !== removedPlayer.name)
}

const filterOutDeletedRoster = (deletedRosterId, state) =>
    state.rosters.filter(roster => roster._id !== deletedRosterId)

export default function rosterReducer(state = initialState, action) {
    switch (action.type) {
        case CONSTANTS.SELECT_PAGE:
            return {
                ...state,
                selectedPage: action.payload
            }
        case CONSTANTS.ADD_PLAYER:
            return {
                ...state,
                roster: [ ...state.roster, action.payload ]
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
        // find roster that was deleted and mark it
        case `${CONSTANTS.DELETE_ROSTER}_${CONSTANTS.FULFILLED}`:
            return {
                ...state,
                rosters: filterOutDeletedRoster(action.payload.data.id, state)
            }
        default:
            return state;
    }
}