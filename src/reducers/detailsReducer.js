const initState = {
    movie: {
        release_date: '',
        original_language: '',
        genres: [
            { id: null, name: '' }
        ],
    },
    isLoading: true,
}

const detailsReducer = (state = initState, action) => {
    switch (action.type) {
        case 'FETCH_DETAILS':
            return {
                ...state,
                movie: action.payload.movie,
                isLoading: false,
            }
        case 'LOADING_DETAILS':
            return {
                ...state,
                isLoading: true,
            }
        default:
            return { ...state };
    }
};

export default detailsReducer;