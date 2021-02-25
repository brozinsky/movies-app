import React from 'react';

const IMG_API = `https://image.tmdb.org/t/p/w1280`;

const MovieDetails = ({ title, poster_path, overview, vote_average }) => {
    return (
        <div className="shadow">
            <div className="card">
                <img src={poster_path ? IMG_API + poster_path : 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1950&q=80'}
                    alt={title} />
            </div>
        </div>
    );
}

export default MovieDetails;