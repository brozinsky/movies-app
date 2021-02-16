import React, { useEffect, useState } from 'react'
import './App.css';
import Movie from './components/Movie';

const apiKey = process.env.REACT_APP_API_KEY;
const FEATURED_API = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${apiKey}&page=1`;
const SEARCH_API = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=`;


function App() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const getMovies = (API) => {
    fetch(API)
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.results);
        console.log(data)
      })
  }

  useEffect(() => {
    getMovies(FEATURED_API)
  }, []);

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

  return (
    <>
      <header>
        <h1 className='title'>Moovies</h1>
        <form onSubmit={handleOnSubmit}>
          <input
            className='search'
            type="text"
            placeholder='Search...'
            value={searchTerm}
            onChange={handleOnChange} />
        </form>
      </header>

      <div className="movie-container">
        {
          movies.length > 0 && movies.map((movie) =>
            < Movie
              key={movie.id}
              {...movie} />
          )
        }
      </div>
    </>
  );
}

export default App;
