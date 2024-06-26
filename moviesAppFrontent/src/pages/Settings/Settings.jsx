/* eslint-disable react-hooks/exhaustive-deps */
import CustomAlert from '../../Components/Alert/CustomAlert';
import { StyledContainer } from './Settings.styles';
import { useState, useEffect } from 'react';

const Settings = () => {
  const [activeUser, setActiveUser] = useState(null);
  const [walletValue, setWalletValue] = useState(null);
  const [amountToAdd, setAmountToAdd] = useState('');
  const [alertMessage, setAlertMessage] = useState('');
  const [alertSeverity, setAlertSeverity] = useState('success'); // 'success' or 'error'
  const [showAlert, setShowAlert] = useState(false); // New state for alert visibility

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

  const handleAddToWallet = async () => {
    try {
      const response = await fetch(
        `http://localhost:8080/api/users/${activeUser.id}/wallet/add`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ amount: parseFloat(amountToAdd) }),
        }
      );
      if (!response.ok) {
        throw new Error('Failed to add amount to wallet');
      }
      fetchWalletValue();
      setAmountToAdd('');
      setAlertMessage('Pomyślnie dodano środki do portfela.');
      setAlertSeverity('success');
    } catch (error) {
      console.error('Error adding amount to wallet:', error);
      setAlertMessage('Nie udało się dodać środków do portfela.');
      setAlertSeverity('error');
    } finally {
      setShowAlert(true);
    }
  };

  const handleCloseAlert = () => {
    setShowAlert(false);
  };

  return (
    <StyledContainer>
      {!activeUser ? (
        <h1>Użytkownik niezalogowany</h1>
      ) : (
        <div className="settings-container">
          <h1 className="no-movies">Cześć {activeUser.username}!</h1>
          <div className="wallet">
            <h2>
              Wartość twojego portfela: {walletValue && walletValue.toFixed(2)}{' '}
              PLN
            </h2>
            <input
              type="number"
              value={amountToAdd}
              min={1}
              onChange={(e) => setAmountToAdd(e.target.value)}
            />
            <button onClick={handleAddToWallet}>Dodaj do portfela</button>
          </div>
          {showAlert && (
            <CustomAlert
              message={alertMessage}
              severity={alertSeverity}
              onClose={handleCloseAlert}
            />
          )}
        </div>
      )}
    </StyledContainer>
  );
};

export default Settings;
