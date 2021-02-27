import { combineReducers } from 'redux';
import moviesReducer from './moviesReducer';
import detailsReducer from './detailsReducer';
import creditsReducer from './creditsReducer';

const rootReducer = combineReducers({
    movies: moviesReducer,
    details: detailsReducer,
    credits: creditsReducer,
})

export default rootReducer;