import { useLocation } from 'react-router-dom';

const Movie = () => {
  const location = useLocation();
  const movie = location.state.movie;

  // Teraz możesz użyć obiektu `movie` do wyświetlenia szczegółów filmu

  return (
    <div>
      <h2>Movie Details</h2>
      <p>Name: {movie.name}</p>
      <p>Director: {movie.category}</p>
      {console.log(movie)}
    </div>
  );
};

export default Movie;
