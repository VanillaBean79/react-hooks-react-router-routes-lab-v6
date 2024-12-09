// import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Directors from "./pages/directors.jsx";
import Actors from "./pages/Actors.jsx";
import Movie from "./pages/Movie.jsx";
import ErrorPage from "./pages/ErrorPage"

const routes = [
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/directors",
    element: <Directors />
  },
  {
    path: "/actors",
    element: <Actors />
  },
  {
    path: "/movie/:id",
    element: <Movie />

  },
  {
    path:"*",
    element: <ErrorPage />
  }
];

export default routes;