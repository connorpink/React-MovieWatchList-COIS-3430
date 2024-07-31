// import { createBrowserRouter } from "react-router-dom";
import Home from './Home';
import Error from './Error';
import CompletedWatchList from "./CompletedWatchList";
import WatchList from "./WatchList";
import Movie from "./Movie";
import Profile from "./Profile";
import WatchListEntry from './WatchListEntry';
import Entry from './Entry';
//import Login from './Login';

const routes = [
    {
        path: '/',
        element: <Home />,
        errorElement: <Error />
    },
    {
        path: '/watchList',
        element: <WatchList />,
    },
    {
        path: '/watchListEntry/:movieId',
        element: <WatchListEntry />,
    },
    {
        path: '/completedWatchList',
        element: <CompletedWatchList />,
    },
    {
        path: '/movie/:movieId',
        element: <Movie />,
    },
    {
        path: '/profile',
        element: <Profile />,
    },
    {
        path: '/entry/:movieId',
        element: <Entry />,
    },
    /*
    {
        path: '/login',
        element: <Login />,
    },
    */
];

export default routes;
