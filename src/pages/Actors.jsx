import { useEffect, useState } from "react";
import NavBar from "../components/NavBar.jsx"


function Actors() {
  const [actors, setActors] = useState([])

  useEffect(()=>{
    fetch('http://localhost:4000/actors')
      .then((r)=>r.json())
      .then((data)=>setActors(data))
      .catch((error)=>console.log("error fetching data:", error))
    },[])
  

  
  return (
    <>
      <NavBar />
      <header>
        <h1>Actors Page</h1>
      </header>
      <main>
        {actors.map((actor, index)=>(
          <article key={index}>
            <h2>{actor.name}</h2>
            <ul>
              {actor.movies.map((movie, movieIndex)=>(
                <li key={movieIndex}>{movie}</li>
              ))}
            </ul>
          </article>
        ))}
      </main>
    </>
  );
};

export default Actors;
