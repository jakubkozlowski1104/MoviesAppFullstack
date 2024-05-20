import { StyledContainer } from './Settings.styles';
import { useState, useEffect } from 'react';

const Settings = () => {
  const [activeUser, setActiveUser] = useState(null);
  const [walletValue, setWalletValue] = useState(null);

  useEffect(() => {
    const user = localStorage.getItem('user');
    setActiveUser(JSON.parse(user));
  }, []);

  useEffect(() => {
    if (activeUser) {
      fetchWalletValue();
    }
  }, [activeUser]);

  const fetchWalletValue = async () => {
    try {
      const response = await fetch(
        `http://localhost:8080/api/users/${activeUser.id}/wallet`
      );
      if (!response.ok) {
        throw new Error('Failed to fetch wallet value');
      }
      const data = await response.json();
      setWalletValue(data);
    } catch (error) {
      console.error('Error fetching wallet value:', error);
    }
  };

  return (
    <StyledContainer>
      {!activeUser ? (
        <h1>niet</h1>
      ) : (
        <div className="movies-container">
          <h1 className="no-movies">cześć {activeUser.username}!</h1>
          <h2>Wartość twojego portfela: {walletValue} PLN</h2>
        </div>
      )}
    </StyledContainer>
  );
};

export default Settings;
