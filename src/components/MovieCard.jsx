import React from 'react';
import { Link } from "react-router-dom";
import '../styles/MovieCard.css';

/*
takes to json objects
movie: general info every card should display
additionalInfo: any additional info the page would like to display
button: {
    name: what the button will display
    buttonHandler: function that will run when button is clicked
}
*/

function MovieCard({movie, button}) {

    return (
        <div className="MovieCard">

            {/* general information that every movie card should display*/}
            <h2>{movie.title}</h2>
            <Link to={`/movie/${movie.movieID}`} state={movie}> Movie Details </Link>
            <p>{new Date(movie.release_date).toLocaleDateString()} | {Math.round(movie.vote_average * 10) / 10}/10 | {movie.runtime} minutes</p>
            <p>{movie.description}</p>

            {/* additional information that the parent component may want to have displayed */}

            {/* optional button at bottom of card */}
            {button && <button onClick={() => {button.clickHandler(movie)}}>{button.name}</button> }
        </div>
    );
}

export default MovieCard;
