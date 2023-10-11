import React, { useState, useEffect } from "react"
import { useParams } from 'react-router-dom'
import './Details.css'
import { Link } from "react-router-dom";


const Details = () => {
   const {id} =useParams()
   const [data, setData] =useState([])
   const [Error, setError] = useState('')
   
    
   
   useEffect(() => {
    const fetchDetails = async () => {
      try {
        if (id !== null) {
          const response = await fetch(`https://api.themoviedb.org/3/movie/${id}`, {
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NzRjYWYxN2M2MThjOTNiYjQ1YmFkMDhlNTZiNmE2OSIsInN1YiI6IjY0YWM2N2MxNjZhMGQzMDBjNjZmYWE5YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.9QyWM5TvmyHcASG-leWeBSFYQmz7m-aFaCxyh4cmq7w'
              }
          });
          const data = await response.json();
          setData(data);
          console.log(data)
        }
      } catch (err) {
        console.log(err);
        setError("Error getting movie details :(");
      } 
    };

    fetchDetails();
  }, []);


return (
    <div>
        <div className="details1">
              <div className="details2">
             <div>
               <Link to="/">
               <img src={`https://image.tmdb.org/t/p/original/${data.poster_path}`} alt="movie" />
               <div>
                 <p>{data.title}</p>
                 <h3>{data.release_date}</h3>
               </div>
               </Link>
             </div>
              </div>
        </div> 
    </div>
  )
 }

export default Details
