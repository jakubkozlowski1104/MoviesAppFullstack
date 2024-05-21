import { useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { StyledContainer } from './Movie.styles';
import { useState, useEffect } from 'react';
import CustomAlert from '../../Components/Alert/CustomAlert';

const Movie = () => {
  const location = useLocation();
  const movie = location.state.movie;
  const [isReadMore, setIsReadMore] = useState(false);
  const [activeUser, setActiveUser] = useState(null);
  const [alertMessage, setAlertMessage] = useState('');
  const [alertSeverity, setAlertSeverity] = useState('success'); // 'success' or 'error'
  const [showAlert, setShowAlert] = useState(false); // New state for alert vis

  useEffect(() => {
    const user = localStorage.getItem('user');
    setActiveUser(JSON.parse(user));
  }, []);

  const handleCloseAlert = () => {
    setShowAlert(false);
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
      alert('An error occurred while purchasing the movie.');
    } finally {
      setShowAlert(true);
    }
  };

  const handleReadMore = () => {
    setIsReadMore(!isReadMore);
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
          <div className="rating">
            <i>
              <FontAwesomeIcon icon={faStar} />
            </i>
            <p>{(movie.rating / 10).toFixed(1).replace('.', ',')}</p>
          </div>
          <div className="img">
            <img src={movie.photoPath} alt={movie.name} />
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
    </StyledContainer>
  );
};

export default Movie;
