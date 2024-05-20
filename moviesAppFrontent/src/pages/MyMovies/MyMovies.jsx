import { useState, useEffect } from 'react';
import { StyledContainer } from './MyMovies.styles';
import { useNavigate } from 'react-router-dom';

const MyMovies = () => {
  const [movies, setMovies] = useState([]);
  const [activeUser, setActiveUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const user = localStorage.getItem('user');
    setActiveUser(JSON.parse(user));
  }, []);

  useEffect(() => {
    if (activeUser) {
      fetchMovies();
    }
  }, [activeUser]);

  const fetchMovies = async () => {
    try {
      const response = await fetch(
        `http://localhost:8080/api/purchasedMovies/user/${activeUser.id}/movies`
      );
      if (!response.ok) {
        throw new Error('Failed to fetch movies');
      }
      const data = await response.json();
      setMovies(data);
    } catch (error) {
      console.error('Error fetching movies:', error);
    }
  };

  return (
    <StyledContainer>
      {!activeUser ? (
        <h1 className="no-movies">
          If you want to see our movies you have to{' '}
          <span onClick={() => navigate('/login')}> Login</span> or{' '}
          <span onClick={() => navigate('/signup')}> Register</span> or buy some
          movies!
        </h1>
      ) : (
        <div className="movies-container">
          <h1>Your movies:</h1>
          <ul className="movies">
            {movies.map((movie) => (
              <li key={movie.id} className="movie">
                <div className="name">{movie.name}</div>
                <div className="img">
                  <img src={movie.photoPath} alt={movie.name} />
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </StyledContainer>
  );
};

export default MyMovies;
