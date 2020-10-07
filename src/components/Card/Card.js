import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Tooltip from '@material-ui/core/Tooltip';
import Fade from '@material-ui/core/Fade';
import LinearProgressBar from '../LinearProgressBar/LinearProgressBar';

// Styles
import './Card.scss';

/**
 * Material-UI Custom Styles.
 *
 * @type {Function}
 */
const useStyles = makeStyles(() => ({
  customWidth: {
    fontFamily: 'Quicksand',
    fontStyle: 'italic',
    fontSize: 19,
    fontWeight: 400,
    maxWidth: 310,
    padding: 20,
    textAlign: 'center',
  },
  root: {
    width: '100%',
  },
}));

/**
 * The Card Component.
 *
 * @param {number}          amountLeft     The amount left to complete project funding.
 * @param {number}          numberOfFunds  The total number of funds received.
 * @param {number}          progressValue  The total funds until now.
 * @param {React.Component} children       The children to render in the specified slot.
 *
 * @return {JSX}
 */
const Card = ({
  amountLeft,
  fundingTimeLeft,
  numberOfFunds,
  progressValue,
  children,
}) => {
  /**
   * The Bootrstap custom classes.
   * @type {Object}
   */
  const classes = useStyles();

  return (
    <div className="card">
      <Tooltip
        arrow
        classes={{ tooltip: classes.customWidth }}
        placement="top"
        title={(
          <><b>${amountLeft}</b> still needed for this project.</>
        )}
        TransitionComponent={Fade}
        TransitionProps={{ timeout: 600 }}
      >
        <Box
          display="flex"
          alignItems="center"
        >
          <Box minWidth={340}>
            <LinearProgressBar
              variant="determinate"
              value={progressValue}
            />
          </Box>
        </Box>
      </Tooltip>
      <div className="card_items">
        <p className="card_items_description">
          <span>Only {fundingTimeLeft} days </span>left to fund this project.
        </p>
        <p className="card_items_description">
          Join the <strong>{numberOfFunds} </strong>
          other donors who have already supported this project. Every dollar helps.
        </p>
        {children}
      </div>
    </div>
  );
};

/**
 * Card Props Types.
 */
Card.propTypes = {
  amountLeft: PropTypes.number.isRequired,
  fundingTimeLeft: PropTypes.number.isRequired,
  progressValue: PropTypes.number.isRequired,
  numberOfFunds: PropTypes.number.isRequired,
  children: PropTypes.element,
};

/**
 * Props default values.
 */
Card.defaultProps = {
  children: <></>,
};

export default Card;
