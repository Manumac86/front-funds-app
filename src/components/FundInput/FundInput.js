import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';

// Styles
import './FundInput.scss';

/**
 * The FundInput Component.
 *
 * @param {Number}   fundValue      The Fund Value to show in the input.
 * @param {Function} onChange       The callback for when the input changes.
 * @param {Function} onChangeEmail  The callback for when the input changes.
 * @param {Function} onSubmit       The callback for when the form is submitted.
 *
 * @return {JSX}
 */
const FundInput = ({
  fundValue,
  onChange,
  onChangeEmail,
  onSubmit,
}) => (
  <div className="fundInput">
    <form
      className="fundInput_form"
      onSubmit={onSubmit}
    >
      <input
        className="fundInput_form_input_email"
        onChange={onChangeEmail}
        placeholder="Enter your email"
        type="text"
      />
      <div className="fundInput_form_container">
        <div className="fundInput_form_label">$</div>
        <input
          className="fundInput_form_input"
          onChange={onChange}
          type="number"
          value={fundValue}
        />
      </div>
      <Button
        type="submit"
        color="primary"
        variant="contained"
      >
        Give Now
      </Button>
    </form>
    <a
      className="fundInput_link"
      href="https://help.kickstarter.com/hc/en-us/articles/115005047933-Why-do-people-back-projects-"
      target="_blank"
      rel="noreferrer"
    >
      Why give $50?
    </a>
  </div>
);

/**
 * FundInput Props Types.
 */
FundInput.propTypes = {
  fundValue: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
  onChangeEmail: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default FundInput;
