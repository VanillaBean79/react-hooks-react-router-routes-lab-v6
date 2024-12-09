import { useEffect, useState } from "react";
import NavBar from "../components/NavBar.jsx"
function Directors() {
  const [directors, setDirectors] = useState([])

  useEffect(()=>{
    fetch('http://localhost:4000/directors')
      .then((r)=>r.json())
      .then((data)=>setDirectors(data))  
  },[])
  return (
    <>
      <NavBar />
      <header>
        <h1>Directors Page</h1>
      </header>
      <main>
       {directors.map((director)=>(
        <article key={director.id}>
          <h2>{director.name}</h2>
          <ul>
            {director.movies.map((movie, index)=>(
              <li key={index}>{movie}</li>
            ))}
          </ul>
        </article>
       ))}
      </main>
    </>
  );
};

export default Directors;
