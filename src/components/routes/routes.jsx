// import { createBrowserRouter } from "react-router-dom";
import Home from './Home';
import Error from './Error';
// import Directors from "./Directors";
// import Actors from "./Actors";
import Movie from "./Movie";

const routes = [
    {
        path: '/',
        element: <Home />,
        errorElement: <Error />
    },
    // ,
    // {
    //     path: '/directors',
    //     element: <Directors />,
    // },
    // {
    //     path: '/actors',
    //     element: <Actors />,
    // },
    {
        path: '/movie/:movieId',
        element: <Movie />,
    },
];

export default routes;
