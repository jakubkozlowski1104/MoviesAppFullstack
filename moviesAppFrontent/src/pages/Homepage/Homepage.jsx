/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-regular-svg-icons';
import { faArrowDown, faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { StyledCenter } from './Homepage.styles';
import { useNavigate } from 'react-router-dom';

const Homepage = () => {
  const [movies, setMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [sortBy, setSortBy] = useState(''); // domyślne sortowanie po cenie
  const [sortDirection, setSortDirection] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const pageSize = 15;

  useEffect(() => {
    fetchMovies();
  }, [currentPage, sortBy, sortDirection, searchQuery]);

  useEffect(() => {
    fetchTotalMoviesCount();
  }, []);

  const fetchMovies = async () => {
    try {
      const response = await axios.get(
        `/api/movies?page=${currentPage}&size=${pageSize}&sortBy=${sortBy}&sortDirection=${sortDirection}&searchQuery=${searchQuery}`
      );
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

  const handleSortBy = (field, direction) => {
    setSortBy(field);
    setSortDirection(direction);
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const goToMovie = (movie) => {
    navigate(`/movie/${movie.id}`, { state: { movie } });
  };

  return (
    <StyledCenter>
      <div className="search-bar">
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearchChange}
          placeholder="Wyszukaj film..."
        />
      </div>

      <div className="sort-buttons">
        <button onClick={() => handleSortBy('price', 'asc')}>
          CENA
          <i>
            <FontAwesomeIcon icon={faArrowUp} />
          </i>
        </button>
        <button onClick={() => handleSortBy('price', 'desc')}>
          CENA
          <i>
            <FontAwesomeIcon icon={faArrowDown} />
          </i>
        </button>
        <button onClick={() => handleSortBy('releaseYear', 'asc')}>
          ROK
          <i>
            <FontAwesomeIcon icon={faArrowUp} />
          </i>
        </button>
        <button onClick={() => handleSortBy('releaseYear', 'desc')}>
          ROK
          <i>
            <FontAwesomeIcon icon={faArrowDown} />
          </i>
        </button>
        <button onClick={() => handleSortBy('rating', 'asc')}>
          OCENY
          <i>
            <FontAwesomeIcon icon={faArrowUp} />
          </i>
        </button>
        <button onClick={() => handleSortBy('rating', 'desc')}>
          OCENY
          <i>
            <FontAwesomeIcon icon={faArrowDown} />
          </i>
        </button>
      </div>
      <div className="center">
        <ul>
          {movies && movies.length > 0 ? (
            movies.map((movie) => (
              <li key={movie.id}>
                <div className="img-info">
                  <img src={movie.photoPath} alt={movie.name} />
                  <div className="buy-now">
                    <button onClick={() => goToMovie(movie)}>ZOBACZ!</button>
                  </div>
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
            ))
          ) : (
            <div>No movies found</div>
          )}
        </ul>
      </div>
      <div className="buttons">
        {totalPages ? (
          (() => {
            const buttons = [];
            for (let idx = 0; idx < totalPages; idx++) {
              buttons.push(
                <button onClick={() => setCurrentPage(idx)} key={idx}>
                  {idx + 1}
                </button>
              );
            }
            return buttons;
          })()
        ) : (
          <button>siema</button>
        )}
      </div>
    </StyledCenter>
  );
};

export default Homepage;
