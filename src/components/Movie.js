import React from 'react';
import { Link } from 'react-router-dom';


const IMG_API = `https://image.tmdb.org/t/p/w1280`;

const setVoteClass = (vote) => {
    if (vote >= 8) {
        return 'green'
    } else if (vote >= 7) {
        return 'yellow'
    } else if (vote >= 5) {
        return 'orange'
    } else {
        return 'red'
    }
}

const Movie = ({ title, poster_path, overview, vote_average, id }) => {
    return (
        <Link to={`/movie/${id}`}>
            <div className='movie'>
                <img src={poster_path ? IMG_API + poster_path : 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1950&q=80'} alt={title} />
                <div className="movie-info">
                    <h3>{title}</h3>
                    <span
                        className={`badge ${setVoteClass(vote_average)}`}
                    >{vote_average}
                    </span>
                </div>
                <div className="movie-overview">
                    <div className="overview-title">
                        <h3>{title}</h3>
                        <span
                            className={`badge ${setVoteClass(vote_average)}`}
                        >{vote_average}
                        </span>
                    </div>
                    <div className="overview-text">
                        <h4>Overview:</h4>
                        <p >{overview} {overview}</p>
                    </div>
                </div>
            </div>
        </Link>
    );
}

export default Movie;