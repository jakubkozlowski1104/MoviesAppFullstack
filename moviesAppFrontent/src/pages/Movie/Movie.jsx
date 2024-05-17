import { useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { StyledContainer } from './Movie.styles';
import { useState, useEffect } from 'react';

const Movie = () => {
  const location = useLocation();
  const movie = location.state.movie;
  console.log(movie.id);
  // console.log(localStorage.getItem('user'));
  const [isReadMore, setIsReadMore] = useState(false);
  const [activeUser, setActiveUser] = useState(null);

  useEffect(() => {
    const user = localStorage.getItem('user');
    setActiveUser(JSON.parse(user));
  }, []);

  // const handleBuyMovie = async () => {
  //   try {
  //     await axios
  //       .post('api/user/register/check', {
  //         userId: movie.userId,
  //         movieId: movie.movie,
  //       })
  //       .then((response) => {
  //         if (response.status === 201) {
  //           console.log('Użytkownik został pomyślnie zarejestrowany');
  //           navigate('/');
  //         } else if (response.status === 200) {
  //           checkIfDataAlreadyExist(response.data.status);
  //         }
  //       });
  //   } catch (error) {
  //     console.error('An error occurred:', error);
  //   }
  // };

  const handleReadMore = () => {
    setIsReadMore(!isReadMore);
    console.log(isReadMore);
    console.log(activeUser);
  };

  return (
    <StyledContainer>
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
            <button>KUP FILM!</button>
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
