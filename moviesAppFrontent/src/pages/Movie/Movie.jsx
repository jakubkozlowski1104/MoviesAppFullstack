/* eslint-disable react-hooks/exhaustive-deps */
import { useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { StyledContainer } from './Movie.styles';
import { useState, useEffect } from 'react';
import CustomAlert from '../../Components/Alert/CustomAlert';
import { useNavigate } from 'react-router-dom';

const Movie = () => {
  const location = useLocation();
  const movie = location.state.movie;
  const [isReadMore, setIsReadMore] = useState(false);
  const [activeUser, setActiveUser] = useState(null);
  const [randomMovies, setRandomMovies] = useState([]);
  const [alertMessage, setAlertMessage] = useState('');
  const [alertSeverity, setAlertSeverity] = useState('success'); // 'success' or 'error'
  const [showAlert, setShowAlert] = useState(false); // New state for alert vis
  const navigate = useNavigate();

  useEffect(() => {
    const user = localStorage.getItem('user');
    setActiveUser(JSON.parse(user));
    fetchRandomMovies();
  }, []);

  const handleCloseAlert = () => {
    setShowAlert(false);
  };

  const fetchRandomMovies = async () => {
    try {
      const response = await fetch(
        `http://localhost:8080/movies/random?excludedIds=${movie.id}`
      );
      if (!response.ok) {
        throw new Error('Failed to fetch random movies');
      }
      const data = await response.json();
      setRandomMovies(data);
      console.log(data);
    } catch (error) {
      console.error('Error fetching random movies:', error);
    }
  };

  const handleBuyMovie = async () => {
    try {
      const response = await fetch(
        `http://localhost:8080/api/purchasedMovies/purchase?userId=${activeUser.id}&movieId=${movie.id}`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      if (response.status === 204) {
        setAlertMessage('już ten film zakupiłeś!');
        setAlertSeverity('error');
      } else if (response.status === 200) {
        setAlertMessage('Brawo, udało ci się zakupić nowy film!');
        setAlertSeverity('success');
      } else if (response.status === 208) {
        setAlertMessage('PBrak wystarczających środków na koncie!');
        setAlertSeverity('error');
      }

      const data = await response.text();
      console.log('Response:', data);
    } catch (error) {
      console.error('Error:', error);
      setAlertMessage('Aby zakupić film, zarejestruj się lub zaloguj!');
      setAlertSeverity('error');
    } finally {
      setShowAlert(true);
    }
  };

  const handleReadMore = () => {
    setIsReadMore(!isReadMore);
  };

  const goToMovie = (movie) => {
    navigate(`/movie/${movie.id}`, { state: { movie } });
    fetchRandomMovies();
  };

  return (
    <StyledContainer>
      <div className="alert">
        {showAlert && (
          <CustomAlert
            message={alertMessage}
            severity={alertSeverity}
            onClose={handleCloseAlert}
          />
        )}
      </div>
      <div className="center">
        <div className="grafic-info">
          <div className="img">
            <img src={movie.photoPath} alt={movie.name} />
          </div>
          <div className="rating">
            <i>
              <FontAwesomeIcon icon={faStar} />
            </i>
            <p>{(movie.rating / 10).toFixed(1).replace('.', ',')}</p>
          </div>
        </div>
        <div className="info">
          <div className="name">{movie.name}</div>
          <div className="desc">
            {movie.description}{' '}
            <span className="see-more">
              {isReadMore ? (
                <p>
                  {' '}
                  orem ipsum dolor sit amet consectetur adipisicing elit.
                  Delectus hic, cupiditate nesciunt, blanditiis nulla nam dicta
                  adipisci molestiae neque tenetur dolor repellendus minus
                  exercitationem quam expedita totam aspernatur assumenda vero
                  aliquid. Ab velit cumque, alias ex sint illum aliquam nostrum
                  quas autem perferendis modi tempore ducimus recusandae
                  delectus, omnis saepe.
                  <span className="see-more-btn" onClick={handleReadMore}>
                    zwiń
                  </span>
                </p>
              ) : (
                <span className="see-more-btn" onClick={handleReadMore}>
                  ... zobacz więcej
                </span>
              )}
            </span>
          </div>
          <div className="buy">
            <div className="price">{movie.price} PLN</div>
            <button onClick={handleBuyMovie}>KUP FILM!</button>
          </div>
          <div className="more-info">
            <p>
              <span>reżyseria: </span>
              {movie.director}
            </p>
            <p>
              <span>scenariusz: </span>
              {movie.director}
            </p>
            <p>
              <span>gatunek:</span> {movie.director}
            </p>
            <p>
              <span>rok wydania:</span> {movie.releaseYear}
            </p>
            <p>
              <span>czas trwania:</span> {movie.duration}
            </p>
          </div>
        </div>
      </div>
      <div className="recomended-movies">
        <h1>Filmy które mogą ci się spodobać</h1>
        <div className="movies">
          {randomMovies.map((movie) => (
            <li
              key={movie.id}
              className="movie"
              onClick={() => goToMovie(movie)}
            >
              <div className="name">{movie.name}</div>
              <div className="img">
                <img src={movie.photoPath} alt={movie.name} />
              </div>
              <div className="test buy-now">
                <button>Zobacz</button>
              </div>
            </li>
          ))}
        </div>
      </div>
    </StyledContainer>
  );
};

export default Movie;
