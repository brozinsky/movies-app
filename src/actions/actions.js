const apiKey = process.env.REACT_APP_API_KEY;

export const getDetails = (id) => (dispatch) => {
    const DETAILS_API = `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=en-US`;
    fetch(DETAILS_API)
        .then((res) => res.json())
        .then((data) => {
            dispatch({
                type: 'FETCH_DETAILS',
                payload: {
                    movie: data,
                }
            })
        })
}


export const getCredits = (id) => (dispatch) => {
    const CREDITS_API = `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${apiKey}&language=en-US`;
    fetch(CREDITS_API)
        .then((res) => res.json())
        .then((data) => {
            dispatch({
                type: 'FETCH_CREDITS',
                payload: {
                    credits: data,
                }
            })
        })
}

export const fetchMovies = (page = 1) => (dispatch) => {
    const API = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&page=${page}`;
    fetch(API)
        .then((res) => res.json())
        .then((data) => {
            // setMovies(data.results);
            dispatch({
                type: 'FETCH_MOVIES',
                payload: {
                    popular: data
                    // totalPages: data.total_pages,
                }
            })
        })
}


export function setPage() {
    return (dispatch, getState) => {
        const state = getState();
        console.log(state);
        const API = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&page=${state.movies.popular.page}`;
        fetch(API)
            .then((res) => res.json())
            .then((data) => {
                // setMovies(data.results);
                dispatch({
                    type: 'FETCH_MOVIES',
                    payload: {
                        popular: data
                        // totalPages: data.total_pages,
                    }
                })
            })
    };
}