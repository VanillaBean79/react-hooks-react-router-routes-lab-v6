import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard"
import NavBar from "../components/NavBar.jsx"


function Home() {
  const [movies, setMovies] = useState([])

  useEffect(()=>{
   fetch('http://localhost:4000/')
    .then((r)=> r.json())
    .then((data)=>setMovies(data))
    .catch((error)=> console.log("error fetching data:", error))
  },[])

      

  return (
    <>
      <NavBar />
      <header>
        <h1>Home Page</h1>
      </header>
      <main>
      {movies.map((movie) => (
          <MovieCard key={movie.id} id={movie.id} title={movie.title} />
        ))}
      </main>
    </>
  );
};

export default Home;
