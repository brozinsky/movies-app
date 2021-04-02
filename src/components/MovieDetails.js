import React from 'react';
import Cast from './Cast';
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom';

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

const MovieDetails = () => {
    const { movie } = useSelector((state) => state.details);
    const { credits } = useSelector((state) => state.credits);
    const history = useHistory();

    const handleCloseClick = () => {
        history.goBack();
    }

    return (
        <>
            <div className="shadow">
                <div className="card">
                    <div className="close" onClick={handleCloseClick}>
                    </div>
                    <header className="info-header">
                        <img className="background-img" src={movie.backdrop_path ? IMG_API + movie.backdrop_path : ''} alt="" />
                        <div className="overlay"></div>
                        <img className='poster-img' src={movie.poster_path ? IMG_API + movie.poster_path : 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1950&q=80'}
                            alt={movie.title} />
                        <div className="wrap-info">
                            <div className="info-tags">
                                {movie.genres.map(genre =>
                                    <span className="info-tag">{genre.name}</span>)}
                            </div>
                            <h2 className="info-title">
                                {movie.title}
                                <span className="info-year">
                                    &nbsp;({movie.release_date.slice(0, 4)})
                                </span>
                            </h2>
                            <h3 className="info-secondary">
                                {movie.title === movie.original_title ?
                                    null :
                                    movie.original_title}&nbsp;
                                <span>{movie.release_date}&nbsp;({movie.original_language.toUpperCase()})</span>
                            </h3>
                            <div className="info-movie">
                                <span
                                    className={`badge ${setVoteClass(movie.vote_average)} badge-details`}
                                >{movie.vote_average}
                                </span>
                                <span className="info-votes">
                                    {movie.vote_count + ' user votes'}
                                </span>
                            </div>
                            <h5 className="director-title">Director:
                            <span className="director-name">{credits.crew.map(person =>
                                person.job === 'Director' ? person.name : null

                            )}</span> </h5>
                            <h5 className="writer-title">Screenwriter:
                                <span className="writer-name">{credits.crew.map(person => person.job === 'Screenplay' || person.job === 'Writer' ? person.name + ', ' : null)}</span> </h5>
                            <h4 className='info-tagline'>
                                {movie.tagline}
                            </h4>
                            <div className="info-text">
                                <h4>Overview:</h4>
                                <p >{movie.overview}</p>
                            </div>
                            <a className='page-link'
                                href={movie.homepage}>
                                {'Watch now >'}
                            </a>
                        </div>
                    </header>
                    <section className='cast'>
                        <h2 className='cast-title'>Cast</h2>
                        <div className="cast-wrap">
                            {credits.cast.map(actor =>
                                <Cast image={actor.profile_path} name={actor.name} charName={actor.character}>{actor.character}</Cast>)}
                        </div>
                    </section>
                </div>
            </div>

        </>
    );
}

export default MovieDetails;