import { useState } from "react";
import NavBar from "../NavBar";
import { useLocation, useParams } from 'react-router-dom';

import '../../styles/UserCard.css';

import MovieCard from "../MovieCard";

function Movie() {
  const location = useLocation();
  const movie = location.state;
  movie.additionalInfo = [
    {
      name: "vote count", details: movie.vote_count
    }
  ]
  const params = useParams();

  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);

  //define async fetch function called quickAdd
  const quickAdd = async () => {
    try {
      const getRequest = {
        method: 'PUT',
        headers: { "X-API-KEY": 'test' },
        body: new URLSearchParams({
          'notes': ' ',
          'priority': '3',
        })
      }

      const response = await fetch(new Request(`https://loki.trentu.ca/~connorpink/3430/assn/cois-3430-2024su-a2-BigBeill/api/towatchlist/entries/${params.movieId}/`, getRequest));
      if (!response.ok) {
        setError({ message: "HTTP error! Status code is: " + response.status });
        return;
      }
      const putResponse = await response.json();

      setSuccessMessage(`${movie.title} : ${putResponse.message}`);
    } catch (error) {
      setError(error);
    }
  }

  const button = {
    name: "Quick add to watch list",
    location: ""
  }
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <div className="UserCard">

          {movie && (
            <>
              <MovieCard movie={movie} button={button} />
              <div className="buttonContainer">
                <button onClick={quickAdd}>quick add to watch list</button>
                {error ? (
                  <span>Error: {error.message}</span>
                ) : successMessage ? (
                  <span>{successMessage}</span>
                ) : (
                  <span />
                )}
              </div>
            </>
          )}

        </div>
      </main >
    </>
  );
}

export default Movie;
