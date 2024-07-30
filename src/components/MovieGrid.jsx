import { useEffect, useState } from "react";
import MovieCard from './MovieCard';
import "../styles/MovieGrid.css";

/*
component takes 2 props:

movies: array[{
    generalInfo
    additionalInfo: array[{
        name: label for optional filed being added
        details: content of the optional field
    }]
}]
OR
movies: array[]
(will assume all data is general data)
}]

button: {
    name: what the button will display
    buttonHandler: function that will run when button is clicked
}

button will be applied to every card
*/

export default function MovieGrid({movies, button}) {

    return (
        <section className="MovieGrid">
            {movies.map((movie, index) => (
                <MovieCard key={index} movie={movie} button={button}/>
            ))}
        </section>
    )
}
