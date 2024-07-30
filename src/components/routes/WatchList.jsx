import { useEffect, useState } from "react";
import NavBar from "../NavBar";
import "../../styles/MovieGrid.css";
import MovieGrid from "../MovieGrid";

function WatchList() {

    const [watchListData, setWatchListData] = useState([])
    const [error, setError] = useState(null);

    async function getWatchList() {
        try {
            const getRequest = {
                method: 'GET',
                headers: { "X-API-KEY": 'test' }
            }

            const response = await fetch(new Request('https://loki.trentu.ca/~connorpink/3430/assn/cois-3430-2024su-a2-BigBeill/api/towatchlist/entries', getRequest));
            if (!response.ok) {
                setError({ message: "HTTP error! Status code is: " + response.status });
                return;
            }
            const watchList = await response.json();

            const movieList = await Promise.all(watchList.map(async element => {
                const movieResponse = await fetch(`https://loki.trentu.ca/~connorpink/3430/assn/cois-3430-2024su-a2-BigBeill/api/movies/${element.movieID}`);
                if (!movieResponse.ok) {
                    setError({ message: "HTTP error! Status code is: " + movieResponse.status });
                    return null;
                }
                const movieData = await movieResponse.json();

                return {...movieData[0],
                    additionalInfo: [
                        { name: 'Movie ID', details: movieData[0].movieID },
                        { name: 'Priority', details: element.priority },
                        { name: 'Notes', details: element.notes}
                    ]
                };
            }));

            setWatchListData(movieList.filter(Boolean))
        } catch (error) {
            setError(error);
        }
    }

    useEffect(() => {
        getWatchList()
    }, []);

    return (
        <>
            <header>
                <NavBar />
            </header>
            <main>
                {error ? (
                    <p>Error: {error.message}</p>
                ) : watchListData === null ? (
                    <p>Loading...</p>
                ) : (
                    <MovieGrid movies={watchListData}/>
                )}
            </main>
        </>
    );
}

export default WatchList;
