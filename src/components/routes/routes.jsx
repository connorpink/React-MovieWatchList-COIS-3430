// import { createBrowserRouter } from "react-router-dom";
import Home from './Home';
import Error from './Error';
import CompletedWatchList from "./CompletedWatchList";
import WatchList from "./WatchList";
import Movie from "./Movie";

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
        path: '/completedWatchList',
        element: <CompletedWatchList />,
    },
    {
        path: '/movie/:movieId',
        element: <Movie />,
    },
];

export default routes;
