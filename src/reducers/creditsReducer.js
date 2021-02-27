const initState = {
    credits: {
        cast: [],
    },
    isLoading: true,
}

const creditsReducer = (state = initState, action) => {
    switch (action.type) {
        case 'FETCH_CREDITS':
            return {
                ...state,
                credits: action.payload.credits,
                isLoading: false,
            }
        case 'LOADING_CREDITS':
            return {
                ...state,
                isLoading: true,
            }
        default:
            return { ...state };
    }
};

export default creditsReducer;