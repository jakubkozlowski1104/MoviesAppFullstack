/* eslint-disable react/prop-types */
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';

const CustomAlert = ({ message, severity }) => {
  return (
    <Alert
      severity={severity}
      style={{
        border: `1px solid ${severity === 'success' ? 'green' : 'red'}`,
      }}
    >
      <AlertTitle>{severity === 'success' ? 'Success' : 'Error'}</AlertTitle>
      {message}
    </Alert>
  );
};

export default CustomAlert;
