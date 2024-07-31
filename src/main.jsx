import React from 'react'
import ReactDOM from 'react-dom/client'
import routes from './components/routes/routes'
import './styles/index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter(routes, {
  basename: import.meta.env.BASE_URL,
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
