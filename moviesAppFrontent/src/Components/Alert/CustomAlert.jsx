/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import LinearProgress from '@mui/material/LinearProgress';
import { StyledButton } from './CustomAlert.styles';

const CustomAlert = ({ message, severity, onClose }) => {
  const [progress, setProgress] = useState(100);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => (prevProgress <= 0 ? 0 : prevProgress - 1));
    }, 25);

    const autoCloseTimer = setTimeout(() => {
      onClose();
    }, 3500);

    return () => {
      clearInterval(timer);
      clearTimeout(autoCloseTimer);
    };
  }, [onClose]);

  return (
    <Alert
      severity={severity}
      style={{
        border: `1px solid ${severity === 'success' ? 'green' : 'red'}`,
        position: 'relative',
      }}
      action={
        <StyledButton size="small" onClick={onClose}>
          X
        </StyledButton>
      }
    >
      <AlertTitle>{severity === 'success' ? 'Success' : 'Error'}</AlertTitle>
      {message}
      <LinearProgress
        variant="determinate"
        value={progress}
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          width: '100%',
          height: '6px',
        }}
      />
    </Alert>
  );
};

export default CustomAlert;
