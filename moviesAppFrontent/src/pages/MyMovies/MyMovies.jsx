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
        `/api/purchasedMovies/user/${activeUser.id}`
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
        <div>
          <h1>Your movies:</h1>
          <ul>
            {movies.map((movie) => (
              <li key={movie.id}>{movie.name}</li>
            ))}
          </ul>
        </div>
      )}
    </StyledContainer>
  );
};

export default MyMovies;
