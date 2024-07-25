import { useEffect, useState } from "react";
import MovieCard from './MovieCard';
import "../styles/MovieGrid.css";

export default function MovieGrid(props) {
    const [searchTerm, setSearchTerm] = useState('');
    const [rating, setRating] = useState("");
    const [filteredMovies, setFilteredMovies] = useState(props.movies);

    useEffect(() => {
        let filteredProps = props.movies;
        if (searchTerm) {
            filteredProps = filteredProps.filter((movie) =>
                movie.title.toLowerCase().includes(searchTerm)
            );
        }
        if (rating !== null && !isNaN(parseInt(rating))) { // Check if the rating is a number
            filteredProps = filteredProps.filter((movie) => parseInt(movie.vote_average) >= parseInt(rating));
        } else if (rating === null || rating === "") {
            // If no rating is selected, display all movies
            setFilteredMovies(props.movies);
        }
        setFilteredMovies(filteredProps);
    }, [props.movies, searchTerm, rating]);


    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value.toLowerCase());
    };

    const handleRatingChange = (event) => {
        if (event.target.value === "") {
            setRating("");
        } else {
            setRating(event.target.value);
            // Update filteredProps here
            let filteredProps = props.movies;
            if (!isNaN(parseInt(rating))) { // Check if the rating is a number
                filteredProps = filteredProps.filter((movie) => parseInt(movie.vote_average) >= parseInt(rating));
            }
            setFilteredMovies(filteredProps);
        }
    };


    return (
        <>
            <label>
                Movie Title:
            </label>
            <input
                type="search"
                value={searchTerm}
                onChange={(event) => handleSearchChange(event)}
                placeholder="Search for a movie..."
            />
            <label>
                Lowest Rating:
            </label>
            <select value={rating} onChange={(event) => handleRatingChange(event)}>
                <option value="">All ratings</option>
                <option value="1">1</option>
                <option value="1">2</option>
                <option value="1">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
            </select>

            <section className="MovieGrid">
                {filteredMovies.map((movie, index) => (
                    <MovieCard key={index} movie={movie} />
                ))}
            </section>
        </>
    );
}
