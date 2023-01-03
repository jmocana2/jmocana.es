import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '@mui/material';

/**
 * Primary UI component for user interaction
 */
export const Boton = ({ label, primary, backgroundColor, ...props }) => {
  return (
    <div className="bg-orange-200">
      <button type="button" {...props}>
        <Button variant="contained" className="bg-black">
          {label}
        </Button>
      </button>
    </div>
  );
};

Boton.propTypes = {
  /**
   * Button contents
   */
  label: PropTypes.string.isRequired,
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
