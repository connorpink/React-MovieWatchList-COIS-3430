import React from 'react';
import { Link } from "react-router-dom";
import '../styles/MovieCard.css';

function MovieCard(props) {
    const movie = props.movie;

    return (
        <div className="MovieCard">
            <h2>{movie.title}</h2>
            <Link to={`/movie/${movie.movieID}`} state={movie}>

                Movie Details
            </Link>
            <p>{new Date(movie.release_date).toLocaleDateString()} | {Math.round(movie.vote_average * 10) / 10}/10 | {movie.runtime} minutes</p>
            <p>{movie.description}</p>

        </div>
    );
}

export default MovieCard;
