function UserPin(props) {
    const stats = props.stats;
    return (
        <ul>

            <li>First Movie Watched Title: {stats.first_Movie_watched_Title}</li>
            <li>Actual movie Time Watched: {stats.actual_movie_time_watched}</li>
            <li>Planned Movie Time Watched: {stats.planned_movie_Time_Watched}</li>
            <li>Average Movie Rating: {stats.average_movie_Rating}</li>
            <li>Date of First Movie Watched: {stats.date_of_first_Movie_Watched}</li>

        </ul>
    )
}

export default UserPin