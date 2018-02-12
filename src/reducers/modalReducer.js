import CONSTANTS from '../constants'
const initialState = {
    modalOpen: false,
    editingRoster: {
        players: []
    },
    rosterDeleted: false
}

export default function modalReducer(state = initialState, action) {
    switch (action.type) {
        case CONSTANTS.DISPLAY_ROSTER_MODAL:
            return {
                modalOpen: true,
                editingRoster: action.payload
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