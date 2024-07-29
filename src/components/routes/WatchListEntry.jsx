import { useState } from "react";
import NavBar from "../NavBar";
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import MovieCard from '../MovieCard';

function WatchListEntry() {
    const navigate = useNavigate();

    const location = useLocation();
    const entry = location.state;
    const movie = entry.movie;

    const [error, setError] = useState(null);
    const [successMessage, setSuccessMessage] = useState(null);
    const [priority, setPriority] = useState(entry.priority);
    const [rating, setRating] = useState(1);
    const [notes, setNotes] = useState(entry.notes);

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const patchRequest = {
                method: 'PATCH',
                headers: { "X-API-KEY": 'test' },
                body: new URLSearchParams({
                    'priority': `${priority}`
                })
            }
            const response = await fetch(new Request(`https://loki.trentu.ca/~connorpink/3430/assn/cois-3430-2024su-a2-BigBeill/api/towatchlist/entries/${movie.movieID}/priority`, patchRequest));
            if (!response.ok) {
                setError({ message: "HTTP error! Status code is: " + response.status });
                return;
            }
            const patchResponse = await response.json();

            setSuccessMessage(`${patchResponse.message}`);

        } catch (error) {
            setError(error);
        }

        // Update the component state with the new priority
        setPriority(event.target.value);
    };

    const handleDelete = async (event) => {
        event.preventDefault();
        try {
            const deleteRequest = {
                method: 'DELETE',
                headers: { "X-API-KEY": "test" }
            }
            const response = await fetch(new Request(`https://loki.trentu.ca/~connorpink/3430/assn/cois-3430-2024su-a2-BigBeill/api/towatchlist/entries/${movie.movieID}/`, deleteRequest));
            if (!response.ok) {
                setError({ message: "HTTP error! Status code is: " + response.status });
                return;
            }
            const deleteResponse = await response.json();

            setSuccessMessage(`${deleteResponse.message}`);
            //redirect back to the watchlist page
            navigate('/watchList/');

        } catch (error) {
            setError(error);
        }
    }

    const handleWatched = async (event) => {
        event.preventDefault();
        try {
            const deleteRequest = {
                method: 'DELETE',
                headers: { "X-API-KEY": "test" }
            }
            const response = await fetch(new Request(`https://loki.trentu.ca/~connorpink/3430/assn/cois-3430-2024su-a2-BigBeill/api/towatchlist/entries/${movie.movieID}/`, deleteRequest));
            if (!response.ok) {
                setError({ message: "HTTP error! Status code is: " + response.status });
                return;
            }
            const deleteResponse = await response.json();

            setSuccessMessage(`${deleteResponse.message}`);
            const postRequest = {
                method: 'POST',
                headers: { "X-API-KEY": "test" },
                body: new URLSearchParams({
                    'movieID': `${movie.movieID}`,
                    'rating': `${rating}`,
                    'notes': `${notes}`,
                    //get current date and time and format as YYYY-MM-DD
                    'date_initially_watched': `${new Date().toISOString().slice(0, 10)}`,
                    'date_last_watched': `${new Date().toISOString().slice(0, 10)}`,
                    'times_watched': `1`
                })
            }
            const postResponse = await fetch(new Request(`https://loki.trentu.ca/~connorpink/3430/assn/cois-3430-2024su-a2-BigBeill/api/completedwatchlist/entries`, postRequest));
            if (!postResponse.ok) {
                setError({ message: `HTTP error! Status code is: ${postResponse.status} : ${postResponse.statusText}` });
                console.log(postResponse);
                return;
            }
            //redirect back to the watchlist page
            navigate('/completedWatchList/');


        } catch (error) {
            setError(error);
        }
    }

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

                            <form onSubmit={handleSubmit}>
                                <label >Current Watch priority: </label>
                                <select value={priority} onChange={(event) => setPriority(event.target.value)}>
                                    {[...Array(10).keys()].map((rating) => <option key={rating + 1} value={rating + 1}>{rating + 1}</option>)}

                                </select>
                                <button type="submit">Update Priority</button>
                                {error ? (
                                    <span>Error: {error.message}</span>
                                ) : successMessage ? (
                                    <span>{successMessage}</span>
                                ) : (
                                    <span />
                                )}
                                <p>notes: </p>

                                <textarea value={notes} onChange={(event) => setNotes(event.target.value)}></textarea>


                            </form>
                            <br />
                            <form onSubmit={handleWatched}>
                                <label >Provide a rating </label>
                                <select value={rating} onChange={(event) => setRating(event.target.value)}>
                                    {[...Array(10).keys()].map((rating) => <option key={rating + 1} value={rating + 1}>{rating + 1}</option>)}

                                </select>
                                <button type="submit">Mark as Watched</button>

                            </form>
                            <br />
                            <form onSubmit={handleDelete}>
                                <button type="submit">Remove Entry from List</button>

                            </form>

                        </>
                    )}
                </div>
            </main >
        </>
    );
}

export default WatchListEntry;