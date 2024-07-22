import { useEffect, useState } from "react";
import NavBar from "./NavBar";
import WatchListCard from "./WatchListCard";
function WatchList() {

    const [watchListData, setWatchListData] = useState([])
    const [error, setError] = useState(null);

    // define a function called getMovie that runs async and takes a movie id as a parameter
    const getMovie = async (movieId) => {
        // call the api to get the movie id from the movie name
        let movie;
        await fetch(`https://loki.trentu.ca/~connorpink/3430/assn/cois-3430-2024su-a2-BigBeill/api/movies/${movieId}`)
            .then(response => response.json())
            .then(data => {
                movie = data.results[0];
            })
        return movie
    }

    useEffect(() => {
        fetch(new Request('https://loki.trentu.ca/~connorpink/3430/assn/cois-3430-2024su-a2-BigBeill/api/towatchlist/entries', {
            method: 'GET',
            headers: {
                "X-API-KEY": 'test',
            }
        }))
            .then(response => response.json())
            .then(data => setWatchListData(data))
            .catch(error => setError(error));
    }, []);

    // console.log(watchListData);
    return (
        <>
            <header>
                <NavBar />
            </header>
            <main>
                <h1>Watch List Entries</h1>

                {error ? (
                    <p>Error: {error.message}</p>
                ) : (
                    <div>
                        {watchListData.map((entry, index) => (
                            <WatchListCard key={index} entry={entry} movie={getMovie(entry.movieID)} />
                        ))}
                    </div>
                )}

            </main>
        </>
    );
};

export default WatchList;
