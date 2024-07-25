import { useEffect, useState } from "react";
import MovieCard from './MovieCard';
import "../styles/MovieGrid.css";

export default function MovieGrid(props) {
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredMovies, setFilteredMovies] = useState(props.movies);

    useEffect(() => {
        setFilteredMovies(props.movies);
    }, [props.movies]);

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value.toLowerCase());
    };

    const handleSearchSubmit = () => {
        const filteredMovies = props.movies.filter((movie) =>
            movie.title.toLowerCase().includes(searchTerm)
        );
        setFilteredMovies(filteredMovies);
    };

    return (
        <>
            <input
                type="search"
                value={searchTerm}
                onChange={(event) => handleSearchChange(event)}
                placeholder="Search for a movie..."
            />
            <button onClick={handleSearchSubmit}>Search</button>
            <section className="MovieGrid">
                {filteredMovies.map((movie, index) => (
                    <MovieCard key={index} movie={movie} />
                ))}
            </section>
        </>
    );
}