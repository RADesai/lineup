import { combineReducers } from 'redux';
import rosterReducer from './rosterReducer';
import statusReducer from './statusReducer';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
    rosterReducer,
    statusReducer,
    form: formReducer
})

export default rootReducer;