import { useEffect, useState } from "react";
import NavBar from "../NavBar";
import UserPin from "../UserPin";
import '../../styles/UserCard.css';

function Profile() {
    const [profileData, setProfileData] = useState(null);
    const [movieData, setMovieData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchData() {

            try {
                await fetch(
                    'https://loki.trentu.ca/~connorpink/3430/assn/cois-3430-2024su-a2-BigBeill/api/users/1/stats',
                    {
                        method: 'GET',
                        headers: {
                            "X-API-KEY": 'test', // TODO : temporary hard code api key until login functionality added.
                        }
                    }
                )
                    .then(response => response.json())
                    .then(data => {
                        setProfileData(data.stats)
                        fetch(
                            `https://loki.trentu.ca/~connorpink/3430/assn/cois-3430-2024su-a2-BigBeill/api/movies/${data.stats.first_Movie_watched_Id}`,
                            {
                                method: 'GET',
                                headers: {
                                    "X-API-KEY": 'test', // TODO : temporary hard code api key until login functionality added.
                                }
                            }
                        ).then(response => {
                            return response.json()
                        }).then(data => {
                            setMovieData(data[0])
                        })

                    })
                    .catch(error => setError(error));
            } catch (error) {
                setError(error);
            }
        }
        fetchData();
    }, []);

    return (
        <>
            <header>
                <NavBar />
            </header>
            <main>
                <div className="UserCard">

                    <h1> Profile Stats</h1>
                    {error ? (
                        <p>Error: {error.message}</p>
                    ) : profileData === null ? (
                        <p>Loading...</p>
                    ) : (
                        <div>
                            {profileData && movieData && (
                                // Now you can safely access the properties of profileData
                                <UserPin stats={profileData} movie={movieData} />
                            )}
                        </div>
                    )}
                </div>

            </main>
        </>
    );
}

export default Profile;
