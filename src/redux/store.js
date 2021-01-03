import { combineReducers, createStore, compose, applyMiddleware } from 'redux';
import weatherReducer from './reducers/weatherReducer';
import thunk from 'redux-thunk';


let reducers = combineReducers({
    weatherPage: weatherReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));

export default store;

