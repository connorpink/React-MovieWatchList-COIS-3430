import React from 'react';
import { Link } from "react-router-dom";
import '../styles/MovieCard.css';

/*
component takes 3 props:

generalInfo: {
    general info every card should display
    additionalInfo: array[{
        name: label for optional filed being added
        details: content of the optional field
    }]
}

button: {
    name: what the button will display
    buttonHandler: function that will run when button is clicked
}
*/

function MovieCard({movie, additionalInfo, button}) {

    return (
        <div className="MovieCard">

            {/* general information that every movie card should display*/}
            <h2>{movie.title}</h2>
            <Link to={`/movie/${movie.movieID}`} state={movie}> Movie Details </Link>
            <p>{new Date(movie.release_date).toLocaleDateString()} | {Math.round(movie.vote_average * 10) / 10}/10 | {movie.runtime} minutes</p>
            <p>{movie.description}</p>

            {/* additional information that the parent component may want to have displayed */}
            { additionalInfo && additionalInfo.map((info, index) => (
                <p key={index}><b>{info.name}:</b> {info.details}</p>
            ))}

            {/* optional button at bottom of card */}
            {button && <button onClick={() => {button.clickHandler(movie)}}>{button.name}</button> }
        </div>
    );
}

export default MovieCard;
