import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';
import rootReducer from './reducers/rootReducer';


// const persistedState = localStorage.getItem('reduxState') ? JSON.parse(localStorage.getItem('reduxState')) : {}

const createStoreWithMiddleware = applyMiddleware(
    promise(),
    thunk,
    createLogger()
)(createStore);

const store = createStoreWithMiddleware(
    rootReducer,
    // persistedState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

// store.subscribe(() => {
//     localStorage.setItem('reduxState', JSON.stringify(store.getState()))
// })

export default store;