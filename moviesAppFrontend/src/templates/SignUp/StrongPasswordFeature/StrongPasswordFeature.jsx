/* eslint-disable react/prop-types */
import { StyledStrongPasswordFeature } from './StrongPasswordFeature.styles';

const StrongPasswordFeature = ({ inputs }) => {
  const validatePassword = (letters) => {
    if (letters <= 4) {
      return 'Too weak!';
    } else if (letters <= 6) {
      return 'Could be stronger';
    } else if (letters <= 8) {
      return 'Strong password';
    } else {
      return 'Very strong password';
    }
  };

  return (
    <StyledStrongPasswordFeature
      stronglevel={inputs.password && inputs.password.length}
    >
      <div className='feature'>
        <div className='low'></div>
        <div className='better'></div>
        <div className='strong'></div>
        <div className='very-strong'></div>
      </div>
      <div className='passwordPowerInfo'>
        {inputs.password
          ? validatePassword(inputs.password.length)
          : 'Too week!'}
      </div>
    </StyledStrongPasswordFeature>
  );
};

export default StrongPasswordFeature;
