import React from 'react';
import { Link } from "react-router-dom";
import '../styles/MovieCard.css';

function CompletedWatchListCard(props) {
    const entry = props.entry;
    const movie = props.movie;
    return (
        <div className="MovieCard">
            <h2>{movie.title}</h2>
            <Link to={`/entry/${entry.movieID}`} state={entry}>

                Edit Entry
            </Link>
            <p>rating: {entry.rating}</p>
            <p>date initially watched: {entry.date_initially_watched}</p>
            <p>date last watched: {entry.date_last_watched}</p>
            <p>times watched: {entry.times_watched}</p>
            <p>notes: {entry.notes}</p>

        </div>
    );
}

export default CompletedWatchListCard;
