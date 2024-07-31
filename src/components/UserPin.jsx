import MovieCard from './MovieCard';

function UserPin(props) {
    const stats = props.stats;
    const movie = props.movie;
    movie.additionalInfo = [
        {
            name: "Date movie was first watched", details: stats.date_of_first_Movie_Watched
        }
    ]
    return (
        <>

            <h3>First movie watched: </h3><MovieCard movie={movie} />

            <h3>Other Stats</h3>
            <ul>

                <li>Actual movie Time Watched: {stats.actual_movie_time_watched} minutes</li>
                <li>Planned Movie Time Watched: {stats.planned_movie_Time_Watched} minutes</li>
                <li>Average Movie Rating: {stats.average_movie_Rating}</li>

            </ul>
        </>

    )
}

export default UserPin