const initState = {
    popular: [],
    new: [],
    upcoming: [],
    searched: []
}

const moviesReducer = (state = initState, action) => {
    switch (action.type) {
        case 'FETCH_MOVIES':
            return { ...state, popular: action.payload.popular }
        default:
            return { ...state };
    }
};

export default moviesReducer;