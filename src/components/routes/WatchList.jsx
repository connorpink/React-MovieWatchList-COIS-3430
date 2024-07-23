import { useEffect, useState } from "react";
import NavBar from "../NavBar";
import WatchListCard from "../WatchListCard";
function WatchList() {

    const [watchListData, setWatchListData] = useState([])
    const [error, setError] = useState(null);

    async function getWatchList() {

        const getRequest = {
            method: 'GET',
            headers: { "X-API-KEY": 'test' }
        }

        const response = await fetch(new Request('https://loki.trentu.ca/~connorpink/3430/assn/cois-3430-2024su-a2-BigBeill/api/towatchlist/entries', getRequest));
        const watchList = await response.json();

        const movieList = await Promise.all(watchList.map(async element => {
            const movieResponse = await fetch(`https://loki.trentu.ca/~connorpink/3430/assn/cois-3430-2024su-a2-BigBeill/api/movies/${element.movieID}`);
            const movieData = await movieResponse.json();
            return {
                watchData: element,
                movieData: movieData[0]
            };
        }));

        setWatchListData(movieList)
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
                <h1>Watch List Entries</h1>

                {error ? (
                    <p>Error: {error.message}</p>
                ) : (
                    <div>
                        {watchListData.map((entry, index) => (
                            <WatchListCard key={index} entry={entry.watchData} movie={entry.movieData} />
                        ))}
                    </div>
                )}

            </main>
        </>
    );
};

export default WatchList;
