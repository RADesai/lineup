const DEFAULT_ROSTER = [
    { name: 'Point Guard' },
    { name: 'Shooting Guard' },
    { name: 'Small Forward' },
    { name: 'Power Forward' },
    { name: 'Center' },
    { name: 'BENCH' },
    { name: 'BENCH' },
    { name: 'BENCH' }
];

const SELECT_PAGE = 'SELECT_PAGE';
const CREATE_ROSTER = 'CREATE_ROSTER';
const DELETE_ROSTER = 'DELETE_ROSTER';
const MANAGE_ROSTERS = 'MANAGE_ROSTERS';
const SET_LINEUPS = 'SET_LINEUPS';

const FETCH_PLAYERS = 'FETCH_PLAYERS';
const ADD_PLAYER = 'ADD_PLAYER';
const UPDATE_PLAYER = 'UPDATE_PLAYER';
const REMOVE_PLAYER = 'REMOVE_PLAYER';

const FETCH_ROSTERS = 'FETCH_ROSTERS';
const DISPLAY_ROSTER_MODAL = 'DISPLAY_ROSTER_MODAL';

const MANAGER_PAGE = 'MANAGER';

const PENDING = 'PENDING';
const FULFILLED = 'FULFILLED';
const REJECTED = 'REJECTED';

export default {
    DEFAULT_ROSTER,
    SELECT_PAGE,
    CREATE_ROSTER,
    DELETE_ROSTER,
    MANAGE_ROSTERS,
    SET_LINEUPS,
    FETCH_PLAYERS,
    ADD_PLAYER,
    UPDATE_PLAYER,
    REMOVE_PLAYER,
    FETCH_ROSTERS,
    DISPLAY_ROSTER_MODAL,
    MANAGER_PAGE,
    PENDING,
    FULFILLED,
    REJECTED
}