import CONSTANTS from '../constants'
const initialState = {
    modalOpen: false,
    editingRoster: {
        players: []
    }
}

export default function modalReducer(state = initialState, action) {
    switch (action.type) {
        case CONSTANTS.DISPLAY_ROSTER_MODAL:
            return {
                modalOpen: true,
                editingRoster: action.payload
            }
        default:
            return state;
    }
}