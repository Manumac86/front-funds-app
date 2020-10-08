import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import { LanguageContext } from '../../containers/Language/Language';
import Text from '../Text/Text';

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
  isInputsInvalid,
  onChange,
  onChangeEmail,
  onSubmit,
}) => {
  const { dictionary } = useContext(LanguageContext);

  return (
    <div className="fundInput">
      <form
        className="fundInput_form"
        onSubmit={onSubmit}
      >
        <input
          className={`fundInput_form_input_email ${isInputsInvalid ? '-error' : ''}`}
          onChange={onChangeEmail}
          placeholder={dictionary.emailPlaceholder}
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
          disabled={isInputsInvalid}
          type="submit"
          color="primary"
          variant="contained"
        >
          <Text tid="giveNowButton" />
        </Button>
      </form>
      <a
        className="fundInput_link"
        href="https://help.kickstarter.com/hc/en-us/articles/115005047933-Why-do-people-back-projects-"
        target="_blank"
        rel="noreferrer"
      >
        <Text tid="helpLink" />
      </a>
    </div>
  );
};

/**
 * FundInput Props Types.
 */
FundInput.propTypes = {
  isInputsInvalid: PropTypes.bool.isRequired,
  fundValue: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
  onChangeEmail: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default FundInput;
