import { useState, useEffect } from 'react';

const MyMovies = () => {
  const [movies, setMovies] = useState([]);
  const [activeUser, setActiveUser] = useState(null);

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
    <div>
      {!activeUser ? (
        <div>zaloguj sie lub zarejewsturj!</div>
      ) : (
        <h1>Your movies:</h1>
      <ul>
        {activeUser && console.log(activeUser.id)}
        {activeUser &&
          movies.map((movie) => <li key={movie.id}>{movie.name}</li>)}
      </ul>
      ) }
    </div>
  );
};

export default MyMovies;
