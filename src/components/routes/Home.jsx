import { useEffect, useState } from "react";
import NavBar from "../NavBar";
import MovieGrid from '../MovieGrid';
import SearchBar from "../searchBar";

function Home() {

    const [movieData, setMovieData] = useState([])
    const [filteredMovies, setFilteredMovies] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('https://loki.trentu.ca/~connorpink/3430/assn/cois-3430-2024su-a2-BigBeill/api/movies')
        .then(response => response.json())
        .then(data => {
            setMovieData(data)
            setFilteredMovies(data)
        })
        .catch(error => setError(error));
    }, []);

    return (
        <>
            <header>
                <NavBar />
            </header>
            <main>
                <h1>Home Page</h1>

                {error ? (
                    <p>Error: {error.message}</p>
                ) : (
                    <div>
                        <SearchBar movies={movieData} setMovies={setFilteredMovies} />
                        <MovieGrid movies={filteredMovies} />
                    </div>
                )}

            </main>
        </>
    );
}

export default Home;
