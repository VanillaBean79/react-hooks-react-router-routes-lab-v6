import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"; 
import NavBar from "../components/NavBar.jsx";

function Movie() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null)
  const [loading, setLoading] = useState(true)
  const [ error, setError] = useState(null)

  useEffect(()=>{
    fetch(`http://localhost:4000/movies/${id}`)
      .then((r)=>r.json())
      .then((data)=>{
        setMovie(data)
        setLoading(false)
      })
      .catch((error)=>{
        setError("error fetching movie data")
        setLoading(false)
      })
  },[id])

  if (loading) {
    return <p>Loading...</p>
  }

  if (error) {
    return <p>{error}</p>
  }

  return (
    <>
      <NavBar />
      <header>
        <h1>{movie.title}</h1>
      </header>
      <main>
        <p>Time: {movie.time}</p>
        <p>Genres:
          {movie.genres.map((genre, index)=>(
            <span key={index}>{genre}</span>
          ))}
        </p>
      </main>
    </>
  );
};

export default Movie;
