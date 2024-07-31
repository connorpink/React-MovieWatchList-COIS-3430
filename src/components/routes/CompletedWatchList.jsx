import { useEffect, useState } from "react";
import NavBar from "../NavBar";
import "../../styles/MovieGrid.css";
import MovieGrid from "../MovieGrid";


function CompletedWatchList() {

    const [completedWatchListData, setCompletedWatchListData] = useState([])
    const [error, setError] = useState(null);

    async function getWatchList() {
        try {
            const getRequest = {
                method: 'GET',
                headers: { "X-API-KEY": 'test' }
            }

            const response = await fetch(new Request('https://loki.trentu.ca/~connorpink/3430/assn/cois-3430-2024su-a2-BigBeill/api/completedwatchlist/entries/', getRequest));
            if (!response.ok) {
                setError({ message: "HTTP error! Status code is: " + response.status });
                return;
            }
            const completedWatchList = await response.json();

            const movieList = await Promise.all(completedWatchList.map(async element => {
                const movieResponse = await fetch(`https://loki.trentu.ca/~connorpink/3430/assn/cois-3430-2024su-a2-BigBeill/api/movies/${element.movieID}`);
                if (!movieResponse.ok) {
                    setError({ message: "HTTP error! Status code is: " + movieResponse.status });
                    return null;
                }
                const movieData = await movieResponse.json();
                return { ...movieData[0],
                    additionalInfo: [
                    { name: 'Rating', details: element.rating },
                    { name: 'Date Initially watched', details: element.date_initially_watched },
                    { name: 'Date Last Watched', details: element.date_last_watched },
                    { name: 'Times Watched', details: element.times_watched },
                    { name: 'Notes', details: element.notes }
                ]};
            }));

            setCompletedWatchListData(movieList.filter(Boolean))
        } catch (error) {
            setError(error);
        }
    }

    const link = {
        name: 'Edit Entry',
        location: '/entry'
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
                ) : completedWatchListData === null ? (
                    <p>Loading...</p>
                ) : (
                    <MovieGrid movies={completedWatchListData} link={link}/>
                )}
            </main>
        </>
    );
}

export default CompletedWatchList;
