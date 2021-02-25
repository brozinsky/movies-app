import { combineReducers } from 'redux';
import moviesReducer from './moviesReducer';
import detailsReducer from './detailsReducer';

const rootReducer = combineReducers({
    movies: moviesReducer,
    details: detailsReducer,
})

export default rootReducer;