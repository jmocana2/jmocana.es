import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '@mui/material';

/**
 * Primary UI component for user interaction
 */
export const Boton = ({ children, primary, backgroundColor, ...props }) => {
  return (
    <Button
      variant="contained"
      className={primary ? 'bg-primary' : 'bg-secondary'}
    >
      {children}
    </Button>
  );
};

Boton.propTypes = {
  /**
   * Button contents
   */
  children: PropTypes.node.isRequired,
  /**
   * Is this the principal call to action on the page?
   */
  primary: PropTypes.bool,
  /**
   * What background color to use
   */
  backgroundColor: PropTypes.string
};

Boton.defaultProps = {
  primary: false,
  backgroundColor: null
};
