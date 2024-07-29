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
                {[...Array(10).keys()].map((rating) => <option key={rating + 1} value={rating + 1}>{rating + 1}</option>)}
            </select>

            <section className="MovieGrid">
                {filteredMovies.map((movie, index) => (
                    <MovieCard key={index} movie={movie} />
                ))}
            </section>
        </>
    );
}
