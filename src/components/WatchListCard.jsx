import React from 'react';
import { Link } from "react-router-dom";
import '../styles/MovieCard.css';

function WatchListCard(props) {
    const entry = props.entry;
    const movie = props.movie;
    return (
        <div className="MovieCard">
            <h2>{movie.title}</h2>
            <Link to={`/entry/${entry.movieID}`} state={entry}>

                Edit Entry
            </Link>
            <p>{entry.notes}</p>
            <p>{entry.priority}</p>

        </div>
    );
}

export default WatchListCard;
