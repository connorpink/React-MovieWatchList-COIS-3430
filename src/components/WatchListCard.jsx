import React from 'react';
import { Link } from "react-router-dom";
import '../styles/MovieCard.css';

function WatchListCard(props) {
    const entry = props.entry;
    const movie = props.movie;
    entry.movie = movie;

    return (
        <div className="MovieCard">
            <h2>{movie.title}</h2>
            <p>Movie ID: {entry.movieID}</p>
            <Link to={`/watchListEntry/${entry.movieID}`} state={entry}>

                Edit Entry
            </Link>
            <p>priority: {entry.priority}</p>
            <p>notes: {entry.notes}</p>

        </div>
    );
}

export default WatchListCard;
