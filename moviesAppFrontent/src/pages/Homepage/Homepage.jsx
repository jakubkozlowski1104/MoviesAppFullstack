import { useState, useEffect } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-regular-svg-icons';
import { StyledCenter } from './Homepage.styles';

const Homepage = () => {
  const [movies, setMovies] = useState([]);
  // eslint-disable-next-line no-unused-vars
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const pageSize = 15;

  useEffect(() => {
    fetchMovies();
  }, [currentPage]); // Zmiana strony spowoduje pobranie nowych filmów

  useEffect(() => {
    fetchTotalMoviesCount();
  }, []);

  const fetchMovies = async () => {
    try {
      const response = await axios.get(
        `/api/movies?page=${currentPage}&size=${pageSize}`
      );
      console.log('robi sie');
      setMovies(response.data.content);
    } catch (error) {
      console.error('Błąd pobierania filmów:', error);
    }
  };

  const fetchTotalMoviesCount = async () => {
    try {
      const response = await axios.get(`/api/movies/count`);
      const totalCount = response.data;
      const totalPagesTemp = Math.ceil(totalCount / pageSize);
      setTotalPages(totalPagesTemp);
    } catch (error) {
      console.error('Błąd pobierania całkowitej liczby filmów:', error);
    }
  };

  const changePage = () => {
    console.log(totalPages);
    setCurrentPage(2);
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

      <button onClick={changePage}>changePage</button>
    </StyledCenter>
  );
};

export default Homepage;
