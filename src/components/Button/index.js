import React from 'react';
import PropTypes from 'prop-types';
import { ButtonContainer } from './styles';

const Button = ({ label, onClick, operation, double, triple }) => {
  return (
    <ButtonContainer
      onClick={onClick}
      operation={operation}
      double={double}
      triple={triple}
    >
      {label}
    </ButtonContainer>
  );
};

Button.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  operation: PropTypes.bool,
  double: PropTypes.bool,
  triple: PropTypes.bool,
};

Button.defaultProps = {
  operation: false,
  double: false,
  triple: false,
};
export default Button;