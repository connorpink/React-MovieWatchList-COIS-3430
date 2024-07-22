import NavBar from "../NavBar";
import { useParams } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

function Movie() {
  const location = useLocation();
  const movie = location.state;

  const params = useParams()
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        {/* display the title, release_date, vote_average, vote_count, runtime and description of a movie. */}
        <div className="movie-container">
          {movie && (
            <>
              <h1>{movie.title}</h1>
              <p><span>movie ID:</span> {params.movieId}</p>
              <p><span>Release Date:</span> {movie.release_date}</p>
              <p><span>Vote Average:</span> {movie.vote_average}</p>
              <p><span>Vote Count:</span> {movie.vote_count}</p>
              <p><span>runtime:</span> {movie.runtime}</p>
              <p>{movie.description}</p>

            </>
          )}

        </div>
      </main>
    </>
  );
}

export default Movie;
