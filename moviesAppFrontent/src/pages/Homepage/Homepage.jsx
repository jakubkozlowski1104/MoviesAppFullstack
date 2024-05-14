import { useState, useEffect } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-regular-svg-icons';
import { StyledCenter } from './Homepage.styles';

const Homepage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchMovies();
  }, []);

  const fetchMovies = async () => {
    try {
      const response = await axios.get('/api/movies');
      console.log(response);
      setMovies(response.data);
    } catch (error) {
      console.error('Błąd pobierania filmów:', error);
    }
  };

  return (
    <StyledCenter>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            <div className="img-info">
              <img src={movie.photoPath} alt={movie.name} />
              <div className="rating">
                <i className="icon">
                  <FontAwesomeIcon icon={faStar} />
                </i>
                <div className="rate">{movie.rating}%</div>
              </div>
              <div className="price">{movie.price} PLN</div>
            </div>

            <div className="info">
              <div className="name">
                {movie.name} ({movie.releaseYear})
              </div>
              <div className="more-info">
                <div className="year">{movie.releaseYear} |</div>
                <div className="category">{movie.category}</div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </StyledCenter>
  );
};

export default Homepage;
