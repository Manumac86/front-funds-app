import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';

// Styles
import './Footer.scss';

/**
 * The Footer Component.
 *
 * @param {Function} onClick  Callback for when button is clicked.
 */
const Footer = ({ onSaveClick }) => (
  <div className="footer">
    <Button
      className="footer_button"
      onClick={onSaveClick}
      variant="contained"
    >
      Save for later
    </Button>
    <Button
      className="footer_button"
      variant="contained"
    >
      <a
        target="_blank"
        rel="noreferrer"
        href="https://twitter.com/intent/tweet"
        className="twitter-share-button"
      >
        Tell your friends
      </a>
    </Button>
  </div>
);

/**
 * Footer Props Types.
 */
Footer.propTypes = {
  onSaveClick: PropTypes.func.isRequired,
};

export default Footer;
