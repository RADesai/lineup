import CONSTANTS from '../constants'
const initialState = {
    editingRoster: {
        players: []
    },
    rosterDeleted: false
}

export default function modalReducer(state = initialState, action) {
    switch (action.type) {
        case CONSTANTS.DISPLAY_ROSTER_MODAL:
            return {
                editingRoster: action.payload,
                rosterDeleted: false
            }
        case `${CONSTANTS.DELETE_ROSTER}_${CONSTANTS.FULFILLED}`:
            return {
                ...initialState,
                rosterDeleted: true
            }
        default:
            return state;
    }
}