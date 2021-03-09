const initState = {
    popular: {
        results: [],
        page: 1,
        total_pages: null
    },
}

const moviesReducer = (state = initState, action) => {
    switch (action.type) {
        case 'FETCH_MOVIES':
            return {
                ...state,
                popular: action.payload.popular,
            }
        default:
            return { ...state };
    }
};

export default moviesReducer;