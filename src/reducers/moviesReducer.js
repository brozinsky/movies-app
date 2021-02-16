const initState = {
    popular: [],
    new: [],
    upcoming: [],
    searched: []
}

const moviesReducer = (state = initState, action) => {
    switch (action.type) {
        case 'FETCH_MOVIES':
            return { ...state }
        default:
            return { ...state }
    }
};

const fetchMovies = (userData) => {
    return {
        type: 'FETCH_MOVIES',
    }
}

fetchMovies();

export default moviesReducer;