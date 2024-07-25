// import { useState } from "react";
import NavBar from "../NavBar";
// import { useParams } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import MovieCard from '../MovieCard';

function WatchListEntry() {
    const location = useLocation();
    const entry = location.state;
    const movie = entry.movie;
    // const params = useParams();


    return (
        <>
            <header>
                <NavBar />
            </header>
            <main>
                <div className="movie-container">

                    {entry && (
                        <>
                            <MovieCard key={1} movie={movie} />

                            <p>priority: {entry.priority}</p>
                            <p>notes: {entry.notes}</p>


                        </>
                    )}

                </div>
            </main >
        </>
    );
}

export default WatchListEntry;
