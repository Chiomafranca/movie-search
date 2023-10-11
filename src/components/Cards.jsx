import React, { useState, useEffect } from "react";
import './Cards.css';
import imdb from '../images/imdb.png';
import apple from '../images/apple.png';
import { Link } from "react-router-dom";

const Cards = ({ filter }) => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const getTopRated = async () => {
      try {
        const response = await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', {
          headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NzRjYWYxN2M2MThjOTNiYjQ1YmFkMDhlNTZiNmE2OSIsInN1YiI6IjY0YWM2N2MxNjZhMGQzMDBjNjZmYWE5YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.9QyWM5TvmyHcASG-leWeBSFYQmz7m-aFaCxyh4cmq7w'
          }
        });

        if (response.ok) {
          const data = await response.json();
          setMovies(data.results);
          console.log(data.results);
        } else {
          setError("Failed to get movies");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    getTopRated();
  }, []);

  // Function to filter movies based on the filter text
  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <h1>Featured Movie</h1>
      <div className="box">
        {filteredMovies.map((item) => (
          <Link to={`/movies/${item.id}`} key={item.id}>
            <div className="card1">
              <img src={`https://image.tmdb.org/t/p/original/${item.poster_path}`} alt="logo" className="movie1" />
              {/* Rest of your card content */}
                  
<div className="item-date">
<div className="release-date">
   <p>{item.release_date}</p>
</div>
<div className="title">
  <h3>{item.title}</h3>
</div>
 <div className="vidoe_items">
<div className="item1">
   <img src={imdb} alt="logo" className="imdb"/>
  <h5>860/100</h5>
</div>
<div className="item2">
   <img src={apple} alt="logo" />
   <h5>97%</h5>
</div>
</div>
<div className="item-footer">
  <h3>Actions, Adventure, Error</h3>
</div>
</div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Cards;
