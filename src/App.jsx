import React, { useState, useEffect } from 'react';

function App() {
  const [movieData, setMovieData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://loki.trentu.ca/~connorpink/3430/assn/cois-3430-2024su-a2-BigBeill/api/movies')
      .then(response => response.json())
      .then(data => setMovieData(data))
      .catch(error => setError(error));
  }, []);

  return (
    <div className="App">
      {error ? (
        <p>Error: {error.message}</p>
      ) : (
        <ul>
          {movieData.map((movie, index) => (
            <li key={index}>
              Movie ID: {movie.movieID}, Title: {movie.title}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
