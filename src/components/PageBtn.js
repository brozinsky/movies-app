import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { fetchMovies } from '../actions/actions';

export const PageBtn = ({ id, name, isDisabled }) => {
    const dispatch = useDispatch();
    const history = useHistory();

    const loadDetailsHandler = () => {
        if (!isDisabled) {
            dispatch(fetchMovies(id))
            const location = {
                pathname: `page=${id}`
            }
            history.push(location)
        }
    }

    return (
        <Link to={`/page=${id}`}
            className={`pages-btn ` + (isDisabled ? 'disabled' : '')}
            onClick={loadDetailsHandler}
        >
            {name}
        </Link>
    )
}