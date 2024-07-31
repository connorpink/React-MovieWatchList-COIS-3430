// page for editing completed watch list movies

import { useState } from "react";
import NavBar from "../NavBar";
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import '../../styles/MovieCard.css';


import MovieCard from '../MovieCard';

function Entry() {
  const navigate = useNavigate();

  const location = useLocation();
  const movie = location.state;

  console.log(movie)

  const [rating, setRating] = useState(parseInt(movie.additionalInfo[0].details,10));
  const [notes, setNotes] = useState(movie.additionalInfo[4].details);
  const [timesWatched, setTimesWatched] = useState(parseInt(movie.additionalInfo[3].details,10))
  const [lastWatched, setLastWatched] = useState(movie.additionalInfo[2].details)

  function handleSubmit(){
    const putRequest = {
      method: 'PATCH',
      headers: { "X-API-KEY": 'test' },
      body: new URLSearchParams({
        'rating': rating
      })
    }

    let patchRequest = {
      method: 'PATCH',
      headers: { "X-API-KEY": 'test' },
    }
    patchRequest.body = new URLSearchParams({ 'rating': rating })
    fetch(`https://loki.trentu.ca/~connorpink/3430/assn/cois-3430-2024su-a2-BigBeill/api/completedwatchlist/entries/${movie.movieID}/rating`, patchRequest)
    const additionalTimesWatched = timesWatched - parseInt(movie.additionalInfo[3].details,10)
    console.log(additionalTimesWatched);
    patchRequest.body = new URLSearchParams({ 'times-watched': additionalTimesWatched })
    fetch(`https://loki.trentu.ca/~connorpink/3430/assn/cois-3430-2024su-a2-BigBeill/api/completedwatchlist/entries/${movie.movieID}/times-watched`, patchRequest)
    patchRequest.body = new URLSearchParams({ 'notes': notes })
    fetch(`https://loki.trentu.ca/~connorpink/3430/assn/cois-3430-2024su-a2-BigBeill/api/completedwatchlist/entries/${movie.movieID}/notes`, patchRequest)
  }

  function handleWatched(){
    setLastWatched('Today')
    setTimesWatched(timesWatched + 1)
  }
  
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1 className="center">Edit Entry</h1>

        <div className="settingsPage">
          <MovieCard movie={movie} />

          <div className="MovieCard">
            <label htmlFor="notes">notes: </label>
            <textarea name="notes" value={notes} onChange={(event) => setNotes(event.target.value)}></textarea>

            <label htmlFor="rating">Your rating: </label>
            <select name="rating" value={rating} onChange={(event) => setRating(event.target.value)}>
              {[...Array(10).keys()].map((rating) => <option key={rating + 1} value={rating + 1}>{rating + 1}</option>)}
            </select>
            <br/>
            <p>Movie watched: {timesWatched} times</p>
            <p>Movie Last Watched: {lastWatched} </p>
            <button className="styledButton" onClick={() => handleWatched()}>Watched Again</button>
            <button className="lastButton" onClick={() => handleSubmit()}>Save Changes</button>

          </div>
          
        </div>

      </main >
    </>
  );
}

export default Entry;