const initState = {
    movie: {}
}

const detailsReducer = (state = initState, action) => {
    switch (action.type) {
        case 'FETCH_DETAILS':
            return {
                ...state,
                movie: action.payload.movie
            }
        default:
            return { ...state };
    }
};

export default detailsReducer;