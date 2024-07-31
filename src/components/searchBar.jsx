import { useEffect, useState } from "react";

export default function SearchBar({ movies, setMovies }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [rating, setRating] = useState('');

  // filter the movies provided based on whats in the search bar
  useEffect(() => {
    let filteredProps = movies;

    // apply the search term
    if (searchTerm) {
      filteredProps = filteredProps.filter((movie) => {
        return movie.title.toLowerCase().includes(searchTerm)
      });
    }

    // apply the rating
    if (rating !== null && !isNaN(parseInt(rating))) {
      filteredProps = filteredProps.filter((movie) => {
        return parseInt(movie.vote_average) >= parseInt(rating)
      });
    }

    // return results to parent
    setMovies(filteredProps);

  }, [searchTerm, rating]);


  return (
    <div className="searchBar">
      <div className="field">
        <label>
          Movie Title :
        </label>
        <input
          type="search"
          value={searchTerm}
          onChange={(event) => { setSearchTerm(event.target.value.toLowerCase()) }}
          placeholder="Search for a movie..."
        />
      </div>
      <div className="field">
        <label>
          Lowest Rating :
        </label>
        <select value={rating} onChange={(event) => { setRating(event.target.value) }}>
          <option value="">All ratings</option>
          {[...Array(10).keys()].map((rating) => <option key={rating + 1} value={rating + 1}>{rating + 1}</option>)}
        </select>
      </div>

    </div>
  );
}
