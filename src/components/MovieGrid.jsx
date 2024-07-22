import MovieCard from './MovieCard';
import "../styles/MovieGrid.css";


export default function MovieGrid(props) {
    const movies = props.movies;
    return (
        <>
            <section className="MovieGrid">
                {movies.map((movie, index) => (
                    <MovieCard key={index} movie={movie} />
                ))}
            </section>
        </>
    );
}
