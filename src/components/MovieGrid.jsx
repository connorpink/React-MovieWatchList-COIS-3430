import { useEffect, useState } from "react";
import MovieCard from './MovieCard';
import "../styles/MovieGrid.css";

export default function MovieGrid({movies, button}) {

    return (
        <section className="MovieGrid">
            {movies.map((movie, index) => (
                <MovieCard key={index} movie={movie} button={button}/>
            ))}
        </section>
    )
}
