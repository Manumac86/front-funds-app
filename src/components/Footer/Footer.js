import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Text from '../Text/Text';

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
      <Text tid="saveButton" />
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
        <Text tid="shareButton" />
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
