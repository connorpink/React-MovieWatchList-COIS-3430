import { useEffect, useState } from "react";
import NavBar from "./NavBar";
import MovieGrid from './MovieGrid';

function CompletedWatchList() {

    const [movieData, setMovieData] = useState([])
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('https://loki.trentu.ca/~connorpink/3430/assn/cois-3430-2024su-a2-BigBeill/api/movies')
            .then(response => response.json())
            .then(data => setMovieData(data))
            .catch(error => setError(error));
    }, []);

    return (
        <>
            <header>
                <NavBar />
            </header>
            <main>
                <h1>Completed Watch List</h1>

                {error ? (
                    <p>Error: {error.message}</p>
                ) : (
                    <div>
                        <MovieGrid movies={movieData} />
                    </div>
                )}

            </main>
        </>
    );
};

export default CompletedWatchList;
