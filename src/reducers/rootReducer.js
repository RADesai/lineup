import { combineReducers } from 'redux';
import statusReducer from './statusReducer';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
    statusReducer,
    form: formReducer
})

export default rootReducer;