import { useEffect, useState } from "react";
import NavBar from "../NavBar";
import UserPin from "../UserPin";

function Profile() {
    const [profileData, setProfileData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch(
                    'https://loki.trentu.ca/~connorpink/3430/assn/cois-3430-2024su-a2-BigBeill/api/users/1/stats',
                    {
                        method: 'GET',
                        headers: {
                            "X-API-KEY": 'test', // TODO : temporary hard code api key until login functionality added.
                        }
                    }
                );
                const data = await response.json();
                setProfileData(data);
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
                <h1> Profile Stats</h1>
                {error ? (
                    <p>Error: {error.message}</p>
                ) : profileData === null ? (
                    <p>Loading...</p>
                ) : (
                    <div>
                        {profileData && (
                            // Now you can safely access the properties of profileData
                            <UserPin stats={profileData.stats} />
                        )}
                    </div>
                )}
            </main>
        </>
    );
}

export default Profile;
