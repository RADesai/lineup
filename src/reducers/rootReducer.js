import { combineReducers } from 'redux';
import rosterReducer from './rosterReducer';
import modalReducer from './modalReducer';
import statusReducer from './statusReducer';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
    rosterReducer,
    modalReducer,
    statusReducer,
    form: formReducer
})

export default rootReducer;