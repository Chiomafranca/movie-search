import React, { useEffect, useState } from 'react';

const SearchDisplay = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const getTopRated = async () => {
      try {
        const response = await fetch("https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1", {
          headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NzRjYWYxN2M2MThjOTNiYjQ1YmFkMDhlNTZiNmE2OSIsInN1YiI6IjY0YWM6I2NzMTYwZTlkNzVkYzE5MTI4NjY3ODg4ZTEwOTY4ZTk0Iiwic2NvcGVzIjpbXX0.DZz-IJrX0-6AOTb0Ef86XxurE6Y5a1iXLJ76r1OAGh0'
          }
        });

        if(response.ok) {
          const data = await response.json();
          setMovies(data.results);
          console.log(data.results);
        } else {
          setError('Movie not found');
        }
      } catch (error) {
        console.error("Movie not found", error);
      }
    };
    
    getTopRated();
  }, []);

  return (
    <div>
      {movies.map((movie) => (
        <div key={movie.id}>
          <p>{movie.title}</p>
          <img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt="movie" />
        </div>
      ))}
      {error && <p>Error: {error}</p>}
    </div>
  );
};
export default SearchDisplay;
