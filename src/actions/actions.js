import CONSTANTS from '../constants'
import * as service from '../services'

const actions = {
    selectPage: selectedPage => ({
        type: CONSTANTS.SELECT_PAGE,
        payload: selectedPage
    }),
    fetchPlayers: () => ({
        type: CONSTANTS.FETCH_PLAYERS,
        payload: service.fetchPlayers()
    }),
    addPlayer: player => ({
        type: CONSTANTS.ADD_PLAYER,
        payload: player
    }),
    removePlayer: player => ({
        type: CONSTANTS.REMOVE_PLAYER,
        payload: player
    }),
    createRoster: ({ name }, roster) => ({
        type: CONSTANTS.CREATE_ROSTER,
        payload: service.createRoster({ name, roster })
    }),
    fetchRosters: () => ({
        type: CONSTANTS.FETCH_ROSTERS,
        payload: service.fetchRosters()
    }),
    displayModal: roster => ({
        type: CONSTANTS.DISPLAY_ROSTER_MODAL,
        payload: roster
    }),
    closeModal: () => ({
        type: CONSTANTS.CLOSE_ROSTER_MODAL
    }),
    deleteRoster: rosterId => ({
        type: CONSTANTS.DELETE_ROSTER,
        payload: service.deleteRoster(rosterId)
    })
};

export default actions;