import React, { useEffect, useState } from 'react'
import '../App.css';
import Movie from '../components/Movie';
import MovieDetails from '../components/MovieDetails';
import Pagination from '../components/Pagination';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { fetchMovies } from '../actions/actions';
import tmdb from '../img/tmdb.png';

const apiKey = process.env.REACT_APP_API_KEY;
const SEARCH_API = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=`;

const HomePage = () => {

    const dispatch = useDispatch();
    const [searchTerm, setSearchTerm] = useState('');

    const location = useLocation();
    const pathId = location.pathname.split('/')[2];

    const getMovies = (API) => {
        fetch(API)
            .then((res) => res.json())
            .then((data) => {
                // console.log(data.total_pages)
                dispatch(
                    {
                        type: 'FETCH_MOVIES',
                        payload: {
                            popular: data.results,
                            totalPages: data.total_pages,
                        }
                    }
                )
            })
    }

    useEffect(() => {
        dispatch(fetchMovies())
    }, [dispatch]);

    const movies = useSelector(state => state.movies.popular.results)

    const handleOnSubmit = (e) => {
        e.preventDefault();
        if (searchTerm) {
            getMovies(SEARCH_API + searchTerm)
            setSearchTerm('')
        }
    }

    const handleOnChange = (e) => {
        setSearchTerm(e.target.value);
    }

    const history = useHistory();
    const handleHomeClick = () => {
        dispatch(fetchMovies(1))
        const location = {
            pathname: '/page=1'
        }
        history.push(location)
    }
    return (
        <>
            <header>
                <h1 onClick={handleHomeClick} className='title'>Moovies</h1>
                <img className='tmdb' src={tmdb} alt='Powered by The Movie DB' />
                <form onSubmit={handleOnSubmit}>
                    <input
                        className='search'
                        type="text"
                        placeholder='Search...'
                        value={searchTerm}
                        onChange={handleOnChange} />
                </form>
            </header>
            <Pagination />
            {pathId && <MovieDetails />}
            <div className="movie-container">
                {
                    movies.length > 0 && movies.map((movie) =>
                        < Movie
                            key={movie.id}
                            {...movie} />
                    )
                }
            </div>
            <Pagination />
        </>
    );
}

export default HomePage;